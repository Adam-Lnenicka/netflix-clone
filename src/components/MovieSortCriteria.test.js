import { it, jest, expect } from "@jest/globals";

it("Dispatch function", () => {
  const dispatch = jest.mock("react-redux", () => ({
    useDispatch: () => (fn) => fn(),
  }));
  expect(dispatch).toHaveBeenCalled();
});

it("Movie array", () => {
  const movies = jest.mock("react-redux", () => ({
    loadMoviesThunk: jest.fn(),
  }));

  expect(movies).toHaveBeenCalled();
});
