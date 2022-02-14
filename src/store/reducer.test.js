import reducer from "./reducer";
import { MOVIES_LOADED } from "./actionTypes";

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
});
