import React from "react";
import { mount } from "enzyme";
import { jest, expect, it } from "@jest/globals";

import FormikAddMovie from "./FormikAddMovie";
it("calls onSubmit when form submitted", () => {
  const onSubmitFn = jest.fn();
  const wrapper = mount(<FormikAddMovie onSubmit={onSubmitFn} />);
  const form = wrapper.find("form");
  form.simulate("submit");
  expect(onSubmitFn).toHaveBeenCalled();
});
