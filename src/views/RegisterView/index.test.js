import React from 'react';
import RegisterView from './';
import { render, screen } from '../../reducers/test-utils'

test('renders Register view', () => {


      const {  debug } = render(
            <React.Suspense fallback="...loading"><RegisterView /></React.Suspense>
      );
   
      // debug()

      const onText = screen.getByText(/...loading/i)

      expect(onText).toBeInTheDocument()
});


