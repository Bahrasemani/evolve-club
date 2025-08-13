"use client"

import React from 'react'
import { Button } from '@/components/ui/button'

export function ChatWidget() {
  return (
    <div className="fixed bottom-6 right-6">
      <Button className="rounded-full h-12 w-12">💬</Button>
    </div>
  )
}