import React from 'react';
import HomeView from './';
import { render, screen } from '../../reducers/test-utils'

test('renders Home view', () => {


      const {  debug } = render(
            <React.Suspense fallback="...loading"><HomeView /></React.Suspense>
      );
   
      // debug()

      const onText = screen.getByText(/Learn React/i)

      expect(onText).toBeInTheDocument()
});


