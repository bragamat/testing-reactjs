import React from 'react';
import { shallow } from 'enzyme';

import Card from '../components/Card/index';

// Render the component
it('renders without crashing', () => {
  shallow(<Card />)
});
