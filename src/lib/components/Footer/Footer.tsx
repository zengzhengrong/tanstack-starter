import packageJson from 'package.json'
import type { JSX } from 'react'

const icons: {
  icon: JSX.Element
  url: string
}[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-github-icon lucide-github"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    url: 'https://github.com/jackytea/tanstack-starter'
  }
]

const Footer = () => {
  return (
    <div className="relative">
      <hr className="absolute w-full border-gray-200 dark:border-stone-800" />
      <footer className="container bg-white dark:bg-stone-950">
        <div className="flex items-center justify-between gap-y-10 border-gray-200 border-x px-4 py-6 dark:border-stone-800">
          <p className="font-semibold text-neutral-500 text-sm tracking-tight sm:text-center dark:text-neutral-400">
            &copy;{new Date().getFullYear()}, TanStack-Starter {packageJson.version}
          </p>
          <div className="flex items-center gap-x-4">
            {icons.map((icon, index) => (
              <a
                target="_blank"
                href={icon.url}
                key={`${icon.url}${index}`}
                rel="noopener noreferrer"
                className="cursor-pointer text-neutral-500 text-xl hover:text-neutral-900 hover:dark:text-white"
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export { Footer }
