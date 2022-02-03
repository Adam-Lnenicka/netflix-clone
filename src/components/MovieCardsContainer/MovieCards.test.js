import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import MovieCardsContainer from "./MovieCardsContainer";

test("snapshot movie container", () => {
  const wrapper2 = shallow(<MovieCardsContainer />);
  expect(toJSON(wrapper2)).toMatchSnapshot();
});
