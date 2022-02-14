import { shallow } from "enzyme";
import MovieSortCriteria from "./MovieSortCriteria";
import React from "react";

const mockDispatch = jest.fn();

describe("Actions Dispatched", () => {
  it("should dispatch a loginToPlatform action", () => {
    const wrapper = shallow(
      <div>
        <MovieSortCriteria />
      </div>
    );
    wrapper.find("#select").simulate("change", {
      target: { value: "title" },
    });
    expect(mockDispatch).toBeCalled();
  });
});
