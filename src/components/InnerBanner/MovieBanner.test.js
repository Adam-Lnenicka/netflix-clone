import React from "react";
import { shallow } from "enzyme";
import MovieBanner from "./MovieBanner";

describe("MovieCard", () => {
  it("snapshot", () => {
    const props = {
      title: "Captain Marvel",
      genres: ["Animation"],
      release_date: "2016",
      runtime: 108,
      vote_average: 7.7,
      overview:
        "Carol DanversDetermined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery. becomes one of the universe`s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
      poster_path: "https://",
    };
    const component = shallow(<MovieBanner {...props} />);
    expect(component).toMatchSnapshot();
  });
});
