import React from "react";
import { mount, shallow } from "enzyme";
import MovieCard from "./MovieCard";

describe("MovieCard", () => {
  it("snapshot", () => {
    const props = {
      title: "Captain Marvel",
      genres: ["Animation"],
      release_date: "2016",
      runtime: 108,
      description: "Movie description",
      poster_path: "https://",
      year: "2016",
      image: "movie image",
    };
    const component = mount(<MovieCard {...props} />);
    expect(component).toMatchSnapshot();
  });
});
