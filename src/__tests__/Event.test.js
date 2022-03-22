import React from "react";
import { shallow } from "enzyme";

//components
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    // Event details Collapsed

    test('renders event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });
    test('renders summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });
    test('renders start-time', () => {
        expect(EventWrapper.find('.start-time')).toHaveLength(1);
    });
    test('renders time-zone', () => {
        expect(EventWrapper.find('.time-zone')).toHaveLength(1);
    });
    test('renders button', () => {
        expect(EventWrapper.find('.btn-details')).toHaveLength(1);
    });
    test('renders description', () => {
        expect(EventWrapper.find('.event-description')).toHaveLength(0);
    });

    // Event details !Collapsed
})