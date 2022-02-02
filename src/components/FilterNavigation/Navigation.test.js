import React from "react";
import Navigation from "./Navigation";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("Navigation", () => {
  test("Navigation snapshot", () => {
    const { asFragment } = render(<Navigation />);

    expect(asFragment(<Navigation />)).toMatchSnapshot();
  });
});
