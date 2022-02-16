import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import {
  MOVIES_LOADED,
  MOVIES_LOADED_BY_DATE,
  MOVIES_LOADED_BY_RATING,
  MOVIES_LOADED_BY_TITLE,
} from "./actionTypes";
import {
  loadMoviesByDateThunk,
  loadMoviesByRatingThunk,
  loadMoviesByTitleThunk,
  loadMoviesThunk,
} from "./thunk";

describe("SearchMovie actions", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;

  beforeEach(function () {
    moxios.install();

    store = mockStore({
      movies: [],
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {},
      });
    });
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it("Display loaded movies", () => {
    const loaded = [{ type: MOVIES_LOADED, payload: {} }];

    return store.dispatch(loadMoviesThunk()).then(() => {
      expect(store.getActions()).toEqual(loaded);
    });
  });

  it("Display loaded movies by title", () => {
    const loaded = [{ type: MOVIES_LOADED_BY_TITLE, payload: {} }];

    return store.dispatch(loadMoviesByTitleThunk()).then(() => {
      expect(store.getActions()).toEqual(loaded);
    });
  });

  it("Display loaded movies by date", () => {
    const loaded = [{ type: MOVIES_LOADED_BY_DATE, payload: {} }];

    return store.dispatch(loadMoviesByDateThunk()).then(() => {
      expect(store.getActions()).toEqual(loaded);
    });
  });

  it("Display loaded movies by rating", () => {
    const loaded = [{ type: MOVIES_LOADED_BY_RATING, payload: {} }];

    return store.dispatch(loadMoviesByRatingThunk()).then(() => {
      expect(store.getActions()).toEqual(loaded);
    });
  });
});
