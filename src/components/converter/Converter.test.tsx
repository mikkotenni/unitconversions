// Converter.test.tsx
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Converter from './Converter'
import '@testing-library/jest-dom'

describe('Converter Component', () => {
  it('renders correctly with given props', () => {
    const { getByText } = render(<Converter unitFrom="meters" unitTo="feet" />)
    expect(getByText('Converting from meters to feet')).toBeInTheDocument()
  })
})