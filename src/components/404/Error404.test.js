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

  it("Linked to Home", () => {
    expect(wrapper.find(Link).props().to).toBe("/");
  });

  it("Create snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
