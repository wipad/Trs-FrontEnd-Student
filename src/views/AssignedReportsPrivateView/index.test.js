import React from 'react';
import NoMatch from './';
import { render, screen } from '../../reducers/test-utils'
import { MemoryRouter } from "react-router-dom";

test('renders NoMatch view', () => {


      render(
            <React.Suspense fallback="...loading">
                  <MemoryRouter initialEntries={["/error"]}>
                        <NoMatch />
                  </MemoryRouter></React.Suspense>
      );

      // debug()

      const onText = screen.getByText(/error/i)

      expect(onText).toBeInTheDocument()
});


