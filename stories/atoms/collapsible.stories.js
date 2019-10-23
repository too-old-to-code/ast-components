import React from 'react';
// import { action } from '@storybook/addon-actions';
import { AstCollapsible } from '../../src/atoms/collapsible';

export default {
  title: 'Atoms.Collapsible',
};

export const Secondary = () => (
  <React.Fragment>
    <div style={{ width: '400px' }}>
      <AstCollapsible accordionPosition="one" initial={<button>See content</button>}>
        <div
          style={{ background: '#201b1bbd', overflow: 'hidden', padding: '10px', color: 'white' }}
        >
          <p>the cat sat on the mat and had a jolly good time</p>
          <p>the cat sat on the mat and had a jolly good time</p>
        </div>
      </AstCollapsible>
    </div>
    {/*<div style={{ width: '300px', background: 'dodgerblue' }}>
          <AstCollapsible accordionPosition="one" initial={<span>&#9432;</span>}>
            <div style={{ background: 'beige', overflow: 'hidden', padding: '20px' }}>
              <p>the cat sat on the mat and had a jolly good time</p>
              <p>the cat sat on the mat and had a jolly good time</p>
            </div>
          </AstCollapsible>
          <AstCollapsible accordionPosition="two" initial={<span>&#9432;</span>}>
            <div style={{ background: 'beige', overflow: 'hidden', padding: '20px' }}>
              <p>the cat sat on the mat and had a jolly good time</p>
              <p>the cat sat on the mat and had a jolly good time</p>
            </div>
          </AstCollapsible>
        </div>*/}
  </React.Fragment>
);
