import { THEMES } from '@/constants/theme.constants'

type Theme = (typeof THEMES)[keyof typeof THEMES]

export type { Theme }
