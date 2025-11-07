import { users } from '@/database/schema/user.schema'

type User = typeof users.$inferSelect
type UserPayload = typeof users.$inferInsert
type UserWithAccount = User & { accountId: string }

export type { User, UserPayload, UserWithAccount }
