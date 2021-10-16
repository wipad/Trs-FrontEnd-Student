import React from 'react';
import LoginView from './';
import { render, screen } from '../../reducers/test-utils'

test('renders Login view', () => {


      const {  debug } = render(
            <React.Suspense fallback="...loading"><LoginView /></React.Suspense>
      );
   
      // debug()

      const onText = screen.getByText(/...loading/i)

      expect(onText).toBeInTheDocument()
});


