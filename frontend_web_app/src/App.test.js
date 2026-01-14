import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders top navigation Home link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /home/i });
  expect(linkElement).toBeInTheDocument();
});
