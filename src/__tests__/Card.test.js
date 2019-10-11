import React from 'react';
import { shallow } from 'enzyme';

import Card from '../components/Card/index';

describe('Card', () => {

    // Render the component
    it('Card renders without crashing', () => {
        shallow(<Card />)
    });
    it('should render card title', () => {
        throw new Error
    })
    it('should render card description', () => {
        throw new Error
    })
    it('shouldn\'t render if neither title or description given', () => {
        throw new Error
    })
})

describe('Card rendering', () => {

    it('should throws error if no prop', () => {
        throw new Error
    })
})

