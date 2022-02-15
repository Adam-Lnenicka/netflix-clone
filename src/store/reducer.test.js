import reducer from "./reducer";
import {
  MOVIES_LOADED,
  MOVIES_LOADED_BY_DATE,
  MOVIES_LOADED_BY_RATING,
  MOVIES_LOADED_BY_TITLE,
  MOVIE_ADDED,
  MOVIE_FILTER,
  SEARCH,
} from "./actionTypes";

describe("load movies: ", () => {
  const action = {
    payload: "payload",
  };

  let state;

  beforeEach(() => {
    state = {};
  });

  it("movies are loaded", () => {
    action.type = MOVIES_LOADED;
    const value = reducer(state, action);
    expect(value).toEqual({
      movies: ["payload"],
    });
  });

  it("movies are loaded by title", () => {
    action.type = MOVIES_LOADED_BY_TITLE;
    const value = reducer(state, action);
    expect(value).toEqual({
      movies: ["payload"],
    });
  });

  it("movies are loaded by date", () => {
    action.type = MOVIES_LOADED_BY_DATE;
    const value = reducer(state, action);
    expect(value).toEqual({
      movies: ["payload"],
    });
  });

  it("movies are loaded by rating", () => {
    action.type = MOVIES_LOADED_BY_RATING;
    const value = reducer(state, action);
    expect(value).toEqual({
      movies: ["payload"],
    });
  });

  it("movies are added", () => {
    state.movies = {};
    action.type = MOVIE_ADDED;
    const value = reducer(state, action);
    expect(value).toEqual({
      ...state,
      movies: [[...state.movies[0].unshift("payload")]],
    });
  });

  it("movies are filtered", () => {
    state.filterMovie = {};
    action.type = MOVIE_FILTER;
    const value = reducer(state, action);
    expect(value).toEqual({
      ...state,
      filterMovie: "payload",
    });
  });

  it("movies are filtered by search", () => {
    state.searchFilter = {};
    action.type = SEARCH;
    const value = reducer(state, action);
    expect(value).toEqual({
      ...state,
      searchFilter: "payload",
    });
  });
});
