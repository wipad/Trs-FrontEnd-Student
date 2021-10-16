import React from 'react';
import HeaderAppBar from './';
import { render, screen } from '../../reducers/test-utils'

test('renders component HeaderAppBar', () => {


     render(<React.Suspense fallback="loading">
            <HeaderAppBar ><p>Test</p></HeaderAppBar>
      </React.Suspense>
      );

      const onText = screen.getByText(/Test/i)

      expect(onText).toBeInTheDocument()
});

