import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Cleanup after each test
afterEach(() => cleanup())

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: (props) => <img {...props} />,
}))

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, href }) => <a href={href}>{children}</a>,
}))
