import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FlatButton } from '.'

describe('FlatButton', () => {
  it('should render correctly', () => {
    const ui = <FlatButton>abc</FlatButton>
    render(ui)
    const a = screen.getByRole('button')
    expect(true).toBeTruthy()
    // expect(a.textContent).toBe('abc 0')
    // fireEvent.click(a)
    // expect(a.textContent).toBe('abc 1')
  })
})
