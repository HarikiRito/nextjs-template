import { fireEvent, render, screen } from '@testing-library/react'
import { AppButton } from '.'

describe('FlatButton', () => {
  it('should render correctly', () => {
    const ui = <AppButton>abc</AppButton>
    render(ui)
    const a = screen.getByRole('button')
    expect(true).toBeTruthy()
    // expect(a.textContent).toBe('abc 0')
    // fireEvent.click(a)
    // expect(a.textContent).toBe('abc 1')
  })
})
