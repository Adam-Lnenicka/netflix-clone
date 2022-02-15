import "jsdom-global/register";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import FormikField from "./FormikField";

describe("Formik Field", () => {
  it("create snapshot for Formik Field", () => {
    const props = {
      title: "test-title",
      path: "test-path",
      myErrors: "test-errors",
      myTouched: "test-touched",
    };

    const wrapper = mount(<FormikField {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
