import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import MovieCard from "./MovieCard";

test("Movie card snapshot", () => {
  const wrapper = shallow(<MovieCard />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
