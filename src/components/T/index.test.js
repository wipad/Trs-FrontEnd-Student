import React from 'react';
import T from './';
import { render, screen } from '../../reducers/test-utils'

test('renders component message T => text', () => {


      const { rerender, debug } = render(
            <React.Suspense fallback="...loading"><T text="React Js" /></React.Suspense>
      );
      const update = rerender(<React.Suspense fallback="...loading Update"><T text="React Js Update" /></React.Suspense>)

      // debug(update)

      const onText = screen.getByText(/..loading Update/i)

      expect(onText).toBeInTheDocument()
});

test('renders component message T => children', () => {


      const { rerender, debug } = render(<React.Suspense fallback="..loading"><T >React Js</T></React.Suspense>);
      const update = rerender(<React.Suspense fallback="..loading Update"><T >React Js Update</T></React.Suspense>)

      // debug(update)

      const onText = screen.getByText(/..loading Update/i)

      expect(onText).toBeInTheDocument()
});
