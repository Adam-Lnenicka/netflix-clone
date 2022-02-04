import React from "react";
import { shallow } from "enzyme";
import MovieCard from "./MovieCard";

describe("MovieCard", () => {
  it("snapshot", () => {
    const props = {
      title: "Captain Marvel",
      genres: ["Animation"],
      release_date: "2016",
      runtime: 108,
      poster_path: "https://",
    };
    const component = shallow(<MovieCard {...props} />);
    expect(component).toMatchSnapshot();
  });
});
