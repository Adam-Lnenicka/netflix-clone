import { MOVIES_LOADED } from "./actionTypes";
import { loadMoviesThunk } from "./thunk";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { test: "123" } }),
  })
);

describe("Given loadMoviesThunk", () => {
  it("should call dispatch with correct atr", () => {
    const mockedDispatch = jest.fn();

    loadMoviesThunk({})(mockedDispatch);

    expect(mockedDispatch).toHaveBeenCalledWith({
      type: MOVIES_LOADED,
      payload: { test: "1" },
    });
  });
});
