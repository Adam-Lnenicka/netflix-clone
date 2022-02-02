import React from "react";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";
import App from "./App";

describe("Navigation", () => {
  test("Navigation snapshot", () => {
    const { asFragment } = render(<App />);

    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
