import { createServerFn } from '@tanstack/react-start'
import {
  destroyAccounts,
  readAccount,
  readAccounts,
  readAccountsByUserId
} from '@/database/providers/accounts.provider'
import { destroyUsers } from '@/database/providers/users.provider'
import { authMiddleware } from '@/middleware/auth.middleware'

const getAccounts = createServerFn({
  method: 'GET'
})
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    return readAccounts(context.user.accountId)
  })

const getAccount = createServerFn({
  method: 'GET'
})
  .middleware([authMiddleware])
  .inputValidator((data: { accountId: string }) => {
    return data
  })
  .handler(async ({ data }) => {
    return readAccount(data.accountId)
  })

const deleteAccount = createServerFn({
  method: 'POST'
})
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const accounts = await readAccountsByUserId(context.user.id)

    return accounts.length <= 1 ? destroyUsers([context.user.id]) : destroyAccounts([context.user.accountId])
  })

export { deleteAccount, getAccount, getAccounts }
