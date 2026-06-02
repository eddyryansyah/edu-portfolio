import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "../App";

describe("App theme integration", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  afterEach(() => {
    cleanup();
    window.localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("uses dark theme by default when no theme is saved", async () => {
    render(<App />);

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("dark");
    });

    expect(window.localStorage.getItem("theme")).toBe("dark");
    expect(
      screen.getByRole("button", { name: /switch to light mode/i }),
    ).toBeInTheDocument();
  });

  it("loads saved light theme from localStorage", async () => {
    window.localStorage.setItem("theme", "light");

    render(<App />);

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("light");
    });

    expect(window.localStorage.getItem("theme")).toBe("light");
    expect(
      screen.getByRole("button", { name: /switch to dark mode/i }),
    ).toBeInTheDocument();
  });

  it("toggles theme and persists the selected theme", async () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole("button", { name: /switch to light mode/i }),
    );

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("light");
    });

    expect(window.localStorage.getItem("theme")).toBe("light");
    expect(
      screen.getByRole("button", { name: /switch to dark mode/i }),
    ).toBeInTheDocument();
  });
});
