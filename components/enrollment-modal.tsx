'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Spinner } from '@/components/ui/spinner'
import { enrollWorkshopAction } from '@/lib/actions/enroll-workshop'
import { useAction } from 'next-safe-action/hooks'

const enrollmentSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
})

type EnrollmentFormData = z.infer<typeof enrollmentSchema>

interface EnrollmentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  workshopId: number
  workshopTitle: string
  onSuccess: () => void
}

export function EnrollmentModal({
  open,
  onOpenChange,
  workshopId,
  workshopTitle,
  onSuccess,
}: EnrollmentModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
  })

  const { execute, status } = useAction(enrollWorkshopAction, {
    onSuccess: () => {
      reset()
      onOpenChange(false)
      onSuccess()
    },
  })

  const onSubmit = (data: EnrollmentFormData) => {
    execute({
      ...data,
      workshopId,
      workshopTitle,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enroll in {workshopTitle}</DialogTitle>
          <DialogDescription>
            Please fill out the form below to enroll in this workshop.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              {...register('firstName')}
              placeholder="Enter your first name"
              disabled={status === 'executing'}
            />
            {errors.firstName && (
              <p className="text-sm text-destructive">{errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              {...register('lastName')}
              placeholder="Enter your last name"
              disabled={status === 'executing'}
            />
            {errors.lastName && (
              <p className="text-sm text-destructive">{errors.lastName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="Enter your email"
              disabled={status === 'executing'}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {status === 'hasErrored' && (
            <p className="text-sm text-destructive">
              Something went wrong. Please try again.
            </p>
          )}

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={status === 'executing'}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={status === 'executing'}>
              {status === 'executing' ? (
                <>
                  <Spinner />
                  Enrolling...
                </>
              ) : (
                'Enroll'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

