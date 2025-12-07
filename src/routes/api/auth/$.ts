import { createFileRoute } from '@tanstack/react-router'

import { auth } from '@/auth/config/auth.config'

export const Route = createFileRoute('/api/auth/$')({
  // @ts-ignore - server.handlers is a TanStack Start feature not yet typed in @tanstack/react-router
  server: {
    handlers: {
      GET: ({ request }: { request: Request }) => {
        return auth.handler(request)
      },
      POST: ({ request }: { request: Request }) => {
        return auth.handler(request)
      }
    }
  }
})
