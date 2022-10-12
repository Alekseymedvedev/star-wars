import React from "react";
import {shallow} from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CharactersCard from "./charactersCard";

configure({ adapter: new Adapter() });
describe("should render Card component", () => {
    it("should contain .card wrapper", () => {
        const component = shallow(<CharactersCard />);
        const wrapper = component.find("card");
        expect(wrapper.length).toBe(0);
    });
});
