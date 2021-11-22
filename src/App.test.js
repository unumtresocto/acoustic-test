import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./ui/Article/Article", () => {
  return function Article() {
    return <div>Dummy article</div>;
  };
});

test("Renders app shell correctly", () => {
  render(<App />);
  const header = screen.getByText("acoustic test task");
  const footer = screen.getByText("No rights reserved, really");
  const article = screen.getByText("Dummy article");

  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
  expect(article).toBeInTheDocument();
});
