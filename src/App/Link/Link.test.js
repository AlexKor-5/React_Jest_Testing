import React from "react";
import renderer from "react-test-renderer";
import Link from "./Link";

it("renders correctly", () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <a
      className="normal"
      href="http://www.facebook.com"
      onMouseEnter={[Function]}
      onMouseLeave={[Function]}
    >
      Facebook
    </a>
  `);
});
