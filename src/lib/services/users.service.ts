import { createServerFn } from '@tanstack/react-start'
import { readUser } from '@/database/providers/users.provider'
import { authMiddleware } from '@/middleware/auth.middleware'

const getUser = createServerFn({
  method: 'GET'
})
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    return readUser(context.user.id, context.user.accountId)
  })

export { getUser }
