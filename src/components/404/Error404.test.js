import { BrowserRouter as Router } from "react-router-dom";
import toJson from "enzyme-to-json";
import React from "react";
import { Link } from "react-router-dom";

describe("404 Page", () => {
  it("Create snapshot", () => {
    const props = {
      to: "/",
    };
    const wrapper = (
      <Router location="home">
        <Link {...props} />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
