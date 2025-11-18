'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface ThankYouModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ThankYouModal({ open, onOpenChange }: ThankYouModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thank You!</DialogTitle>
          <DialogDescription>
            Your enrollment has been confirmed. You will receive a confirmation email
            with calendar links shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

