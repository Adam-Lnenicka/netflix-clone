import "jsdom-global/register";

import React from "react";
import { mount, shallow } from "enzyme";
import MovieBanner from "./MovieBanner";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

describe("MovieBanner", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;
  let props;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);

    props = {
      thisMovie: () => {},
      apiMoviesArray: ["test, test2, test3"],
      title: "Captain Marvel",
      genres: ["Animation"],
      release_date: "2016",
      runtime: 108,
      vote_average: 7.7,
      overview:
        "Carol DanversDetermined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery. becomes one of the universe`s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
      poster_path: "https://",
      tagline: "short description",
    };
    wrapper = shallow(
      <Provider store={store}>
        <MovieBanner {...props} />
      </Provider>
    );
  });

  it("MovieBanner to match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Objects empty by default", () => {
    const store = mockStore(initialState);

    expect(wrapper.find("#banner-selected-image")).toEqual({});
  });
});
