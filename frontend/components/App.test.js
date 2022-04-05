const { default: AppFunctional } = require("./AppFunctional")
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


beforeEach(() => {
  render(<AppFunctional />)
})
afterEach(()=>{
  //destroy fake DOM
  //No need, happens automatically
  window.localStorage.clear()
})

let squares



const testSquares = (squares, activeIdx) => {
  squares?.forEach((square, idx) => {
    if (idx === activeIdx) {
      expect(square.textContent).toBe('B')
      expect(square.className).toMatch(/active/)
    } else {
      expect(square.textContent).toBeFalsy()
      expect(square.className).not.toMatch(/active/)
    }
  })
}

// Write your tests here
describe('AppFunctional Component', () => {
  test('sanity', () => {
    expect(true).toBe(true)
  })
  test('renders grid component', () => {
    const grid = document.querySelector('#grid')
    expect(grid).toBeVisible()
  })
  test('initially active square should be 4', () => {
    testSquares(squares, 1)
  })
  test('nav up', () => {
    fireEvent.click(document.querySelector('#up'))
    testSquares(squares, 1)
  })
  test('nav down', () => {
    fireEvent.click(document.querySelector('#down'))
    testSquares(squares, 7)
  })
  test('nav right', () => {
    fireEvent.click(document.querySelector('#right'))
    testSquares(squares, 5)
  })
})





