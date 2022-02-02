import React from "react";
import MovieCardsContainer from "./MovieCardsContainer";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

/**
 * @jest-environment jsdom
 */

describe("MovieCardsContainer", () => {
  test("MovieCardsContainer snapshot", () => {
    const { asFragment } = render(<MovieCardsContainer />);

    expect(asFragment(<MovieCardsContainer />)).toMatchSnapshot();
  });
});
