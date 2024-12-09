import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import { LoadingState } from '@/components/ui/LoadingState'

export const WelcomePage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-4xl font-semibold text-gray-300">
          Welcome to Alfie Enterprise
        </h1>
        <p className="text-lg text-gray-200">
          Smart leave management for modern teams
        </p>
        <div className="mt-8">
          <Button size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}
