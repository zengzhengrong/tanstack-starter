import { AppLayout } from '@/layouts/AppLayout/AppLayout'

const Home = () => {
  return (
    <AppLayout>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="mb-3 font-black text-2xl">🏝️ TanStack Starter 🏝️</h1>
      </div>
    </AppLayout>
  )
}

export { Home }
