import React from 'react';
import { mount } from 'enzyme';

import Card from '../components/Card/index';

describe('Card', () => {
  it('Card renders without crashing', () => {
    const card = mount(<Card title="First Card to Test" />);
    expect(card.find('h1').text()).toEqual('First Card to Test');
  });
});
