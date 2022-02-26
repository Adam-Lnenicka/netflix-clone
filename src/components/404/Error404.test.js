import "jsdom-global/register";
import { BrowserRouter as Router } from "react-router-dom";
import toJson from "enzyme-to-json";
import React from "react";
import { Link } from "react-router-dom";
import { mount } from "enzyme";
import Error404 from "./Error404";

describe("404 Page", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      to: "/",
    };
    wrapper = mount(
      <Router location="home">
        <Error404>
          <Link {...props} />
        </Error404>
      </Router>
    );
  });

  it("Create snapshot of 404 component with link", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
