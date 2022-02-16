import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MovieCardsContainer from "./MovieCardsContainer";

describe("MovieCardsContainer", () => {
  const initialState = {};
  const mockStore = configureStore();
  it("MovieCardsContainer matches snapshot", () => {
    const store = mockStore(initialState);
    const props = {
      title: "Captain Marvel",
      genres: ["Animation"],
      release_date: "2016",
      description: "Movie description",
      poster_path: "https://",
      overview: "test description test",
      vote_average: "vote average test",
      movie: "movie test",
      reuntime: "runtime test",
      broken:
        "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    };
    const wrapper = shallow(
      <Provider store={store}>
        <MovieCardsContainer {...props} />{" "}
      </Provider>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
