import { accounts } from '@/database/schema/account.schema'

type Account = typeof accounts.$inferSelect
type AccountPayload = typeof accounts.$inferInsert

export type { Account, AccountPayload }
