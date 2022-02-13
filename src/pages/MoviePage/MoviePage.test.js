import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import MoviePage from "./MoviePage";

describe("MoviePage", () => {
  it("create snapshot", () => {
    const wrapper = shallow(<MoviePage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
