import { readAccount, readAccounts } from '@/database/providers/accounts.provider'
import type { ArrayElement } from '@/types/array.type'

type AccountWithImage = Awaited<Promise<ReturnType<typeof readAccount>>>
type AccountWithUser = ArrayElement<Awaited<Promise<ReturnType<typeof readAccounts>>>>

export type { AccountWithImage, AccountWithUser }
