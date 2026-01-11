import { MessageCircle } from 'lucide-react'
import React from 'react'

export default function WhatsAppButton() {
  return (
   <a 
      href="https://wa.me/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 z-50"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
