import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FeatureIcon from "../featureIcons";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders an image tag", () => {
  render(<FeatureIcon link="/thumb" />);
  const element = screen.getByTestId("image");
  expect(element).toBeInTheDocument();
});

it("renders an img tag with src and alt", () => {
  act(() => {
    render(<FeatureIcon link="/thumb" src="testSrc.png" />, container);
  });
  expect(container.src).toBe("testSrc.png");
  act(() => {
    render(<FeatureIcon link="/thumb" alt="image of testSrc" />, container);
  });
  expect(container.alt).toBe("image of testSrc");
});
