'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { EnrollmentModal } from '@/components/enrollment-modal'
import { ThankYouModal } from '@/components/thank-you-modal'

const workshops = [
  {
    id: 1,
    title: "Finding Your Poetic Voice",
    description: "Discover your unique voice and learn techniques to express your authentic self through poetry.",
    level: "All Levels",
    duration: "4 weeks"
  },
  {
    id: 2,
    title: "Poetry Writing Essentials",
    description: "Master the fundamentals of poetry including meter, rhyme, imagery, and emotional resonance.",
    level: "Beginner",
    duration: "6 weeks"
  },
  {
    id: 3,
    title: "Performance Poetry",
    description: "Learn to read your work with impact and confidence. Develop your stage presence and performance skills.",
    level: "Intermediate",
    duration: "4 weeks"
  },
  {
    id: 4,
    title: "Poetry and Social Commentary",
    description: "Explore poetry as a tool for activism and social change. Write poetry that challenges and inspires.",
    level: "All Levels",
    duration: "5 weeks"
  },
  {
    id: 5,
    title: "Advanced Poetic Techniques",
    description: "Dive into experimental forms, unconventional structures, and contemporary poetry approaches.",
    level: "Advanced",
    duration: "8 weeks"
  },
  {
    id: 6,
    title: "Poetry for Healing",
    description: "Use poetry as a therapeutic tool for personal growth, emotional expression, and healing.",
    level: "All Levels",
    duration: "6 weeks"
  }
]

export function WorkshopsGrid() {
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false)
  const [thankYouModalOpen, setThankYouModalOpen] = useState(false)
  const [selectedWorkshop, setSelectedWorkshop] = useState<typeof workshops[0] | null>(null)

  const handleEnrollClick = (workshop: typeof workshops[0]) => {
    setSelectedWorkshop(workshop)
    setEnrollmentModalOpen(true)
  }

  const handleEnrollmentSuccess = () => {
    setThankYouModalOpen(true)
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="bg-card border border-border rounded-lg p-8 hover:border-primary transition">
            <h3 className="text-xl font-semibold mb-3 text-primary">{workshop.title}</h3>
            <p className="text-muted-foreground mb-6">{workshop.description}</p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded">
                {workshop.level}
              </span>
              <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded">
                {workshop.duration}
              </span>
            </div>
            <Button
              onClick={() => handleEnrollClick(workshop)}
              className="mt-6 w-full"
            >
              Enroll Now
            </Button>
          </div>
        ))}
      </div>

      {selectedWorkshop && (
        <EnrollmentModal
          open={enrollmentModalOpen}
          onOpenChange={setEnrollmentModalOpen}
          workshopId={selectedWorkshop.id}
          workshopTitle={selectedWorkshop.title}
          onSuccess={handleEnrollmentSuccess}
        />
      )}

      <ThankYouModal
        open={thankYouModalOpen}
        onOpenChange={setThankYouModalOpen}
      />
    </>
  )
}
