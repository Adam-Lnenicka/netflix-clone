import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import MoviePage from "./MoviePage";

describe("MoviePage", () => {
  it("Create snapshot of Movie Page", () => {
    const wrapper = shallow(<MoviePage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
