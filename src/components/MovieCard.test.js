import React from "react";
import { shallow } from "enzyme";
import MovieCard from "./MovieCard";
import toJSON from "enzyme-to-json";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("MovieCard", () => {
  const initialState = {};
  const mockStore = configureStore();
  it("matches snapshot", () => {
    const store = mockStore(initialState);
    const props = {
      title: "Captain Marvel",
      genres: ["Animation"],
      release_date: "2016",
      description: "Movie description",
      poster_path: "https://",
      year: "2016",
    };
    const wrapper = shallow(
      <Provider store={store}>
        <MovieCard {...props} />{" "}
      </Provider>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
