import { X } from 'lucide-react'
import { AppLayout } from '@/layouts/AppLayout/AppLayout'
import { AccountWithImage } from '@/types/account.provider.type'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { Card, CardContent, CardHeader } from '@/ui/card'

const Account = ({ account }: { account: AccountWithImage | null }) => {
  return (
    <AppLayout>
      <div className="flex h-full w-full flex-col items-center justify-center">
        {account ? (
          <Card className="h-96">
            <CardHeader className="text-center">
              <Avatar className="flex h-48 w-48 items-center justify-center">
                <AvatarImage
                  className="h-48 w-48 rounded-full border-2 border-gray-200 dark:border-stone-800"
                  src={account.image ?? ''}
                />
                <AvatarFallback className="flex h-48 w-48 items-center justify-center rounded-full border-2 border-gray-200 bg-gray-100 text-5xl dark:border-stone-800 dark:bg-stone-900">
                  {account.name?.[0] ?? ''}
                  {account.name?.split(' ')?.[1]?.[0] ?? ''}
                </AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <div className="grid w-full text-center">
                <p className="font-extrabold text-2xl">{account.name ?? ''}</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <X className="h-32 w-32 text-red-500" />
            <p className="text-lg">Account Not Found</p>
          </>
        )}
      </div>
    </AppLayout>
  )
}

export { Account }
