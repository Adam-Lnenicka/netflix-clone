import "jsdom-global/register";

import { mount, shallow } from "enzyme";
import MovieSortCriteria from "./MovieSortCriteria";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockDispatch = jest.fn();

describe("Movie Sorting Actions Dispatched", () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  it("should dispatch a loginToPlatform action", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MovieSortCriteria onChange={mockDispatch} />
      </Provider>
    );
    wrapper.find("#select").simulate("change", {
      target: { value: "title" },
    });
    expect(mockDispatch).toBeCalled();
  });
});
