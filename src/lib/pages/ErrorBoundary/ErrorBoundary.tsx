import { AppLayout } from '@/layouts/AppLayout/AppLayout'

const ErrorBoundary = () => {
  return (
    <AppLayout>
      <div className="flex h-full w-full items-center justify-center">An Error Occurred</div>
    </AppLayout>
  )
}

export { ErrorBoundary }
