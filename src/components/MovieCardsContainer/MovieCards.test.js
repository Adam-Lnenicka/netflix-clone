import React from "react";
import toJSON from "enzyme-to-json";
import { mount } from "enzyme";
import MovieCardsContainer from "./MovieCardsContainer";

test("snapshot movie container", () => {
  const wrapper2 = mount(<MovieCardsContainer />);
  expect(toJSON(wrapper2)).toMatchSnapshot();
});
