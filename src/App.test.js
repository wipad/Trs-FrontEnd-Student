import React from 'react';
import { render, screen } from './reducers/test-utils';
import App from './App';
import { MemoryRouter } from "react-router-dom";

describe('renders App', () => {
  it('routing to /', () => {
    render(<React.Suspense fallback="loading" >
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </React.Suspense>);


    const onText = screen.getByText(/loading/i)

    expect(onText).toBeInTheDocument()
  })

  it('routing to /login', () => {
    render(<React.Suspense fallback="loading" >
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    </React.Suspense>);


    const onText = screen.getByText(/loading/i)

    expect(onText).toBeInTheDocument()
  })

  it('routing to /register', () => {
    render(<React.Suspense fallback="loading" >
      <MemoryRouter initialEntries={["/register"]}>
        <App />
      </MemoryRouter>
    </React.Suspense>);


    const onText = screen.getByText(/loading/i)

    expect(onText).toBeInTheDocument()
  })

  it('routing to no match', () => {
    render(<React.Suspense fallback="loading" >
      <MemoryRouter initialEntries={["/error"]}>
        <App />
      </MemoryRouter>
    </React.Suspense>);


    const onText = screen.getByText(/loading/i)

    expect(onText).toBeInTheDocument()
  })
})





