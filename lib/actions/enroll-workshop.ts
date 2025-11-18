'use server'

import { actionClient } from "@/lib/safe-action";
import { z } from "zod";
import { Resend } from "resend";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable. Please configure it to enable workshop enrollment emails.");
  }
  return new Resend(apiKey);
};

const enrollSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  workshopId: z.number(),
  workshopTitle: z.string(),
});

export const enrollWorkshopAction = actionClient
  .schema(enrollSchema)
  .action(async ({ parsedInput }) => {
    const { firstName, lastName, email, workshopId, workshopTitle } = parsedInput;

    // Generate calendar links
    const calendarDate = new Date();
    calendarDate.setDate(calendarDate.getDate() + 7); // Workshop in 7 days (adjust as needed)
    calendarDate.setHours(18, 0, 0, 0); // Set to 6 PM
    
    const endDate = new Date(calendarDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours duration
    
    // Format dates for Google Calendar (YYYYMMDDTHHmmssZ)
    const formatGoogleDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };
    
    const startDateFormatted = formatGoogleDate(calendarDate);
    const endDateFormatted = formatGoogleDate(endDate);
    
    const title = encodeURIComponent(workshopTitle);
    const details = encodeURIComponent(`You've enrolled in ${workshopTitle}. We look forward to seeing you!`);
    const location = encodeURIComponent("Online Workshop");
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateFormatted}/${endDateFormatted}&details=${details}&location=${location}`;
    
    // Format dates for iCal (YYYYMMDDTHHmmssZ)
    const formatICalDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };
    
    const iCalContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Poetry Workshop//Enrollment//EN",
      "BEGIN:VEVENT",
      `DTSTART:${formatICalDate(calendarDate)}`,
      `DTEND:${formatICalDate(endDate)}`,
      `SUMMARY:${workshopTitle.replace(/[,;]/g, "\\,")}`,
      `DESCRIPTION:${`You've enrolled in ${workshopTitle}. We look forward to seeing you!`.replace(/[,;]/g, "\\,")}`,
      `LOCATION:${location.replace(/,/g, "\\,")}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");
    
    const appleCalendarUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(iCalContent)}`;

    try {
      // Send confirmation email to user
      const resend = getResendClient();

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "noreply@yourdomain.com",
        to: email,
        subject: `Confirmation: Enrolled in ${workshopTitle}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Thank you for enrolling!</h2>
            <p>Dear ${firstName} ${lastName},</p>
            <p>We're excited to confirm your enrollment in <strong>${workshopTitle}</strong>.</p>
            <p>Add this workshop to your calendar:</p>
            <div style="margin: 20px 0;">
              <a href="${googleCalendarUrl}" 
                 style="display: inline-block; background-color: #4285f4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-right: 10px;">
                Add to Google Calendar
              </a>
              <a href="${appleCalendarUrl}" 
                 style="display: inline-block; background-color: #000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
                Add to Apple Calendar
              </a>
            </div>
            <p>We look forward to seeing you at the workshop!</p>
            <p>Best regards,<br>Pamela D. Pete</p>
          </div>
        `,
      });

      // Send notification email to admin
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "noreply@yourdomain.com",
        to: "pameladpoetry@yahoo.com",
        subject: `New Workshop Enrollment: ${workshopTitle}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Workshop Enrollment</h2>
            <p><strong>Workshop:</strong> ${workshopTitle}</p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Enrollment Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
      });

      return { success: true };
    } catch (error) {
      console.error("Error sending emails:", error);
      throw new Error("Failed to send confirmation email. Please try again later.");
    }
  });

