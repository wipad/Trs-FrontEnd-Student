import React from 'react';
import HideOnScroll from './HideOnScroll';
import { render,screen } from '../../../reducers/test-utils'

test('renders component HideOnScroll', () => {

      function testFunc(params) {

      }
      const { debug, rerender } = render(
            <HideOnScroll window={testFunc}><p>Test</p></HideOnScroll>);
      const update = rerender(<HideOnScroll window={testFunc}><p>Test Update</p></HideOnScroll>)

      // debug(update)

      const onText = screen.getByText(/Test Update/i)

      expect(onText).toBeInTheDocument()
});

