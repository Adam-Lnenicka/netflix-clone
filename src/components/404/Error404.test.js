import "jsdom-global/register";
import { BrowserRouter as Router } from "react-router-dom";
import toJson from "enzyme-to-json";
import React from "react";
import { Link } from "react-router-dom";
import { mount } from "enzyme";

describe("404 Page", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      to: "/",
    };
    wrapper = mount(
      <Router location="home">
        <Link {...props} />
      </Router>
    );
  });

  it("Create snapshot of 404 component with link", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
