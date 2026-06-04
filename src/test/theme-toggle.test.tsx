import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "../components/ThemeToggle";

describe("ThemeToggle", () => {
  it("renders light mode action when current theme is dark", () => {
    render(<ThemeToggle theme="dark" onToggle={vi.fn()} />);

    const toggleButton = screen.getByRole("button", {
      name: /ganti ke mode terang/i,
    });

    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute("aria-pressed", "false");
  });

  it("renders dark mode action when current theme is light", () => {
    render(<ThemeToggle theme="light" onToggle={vi.fn()} />);

    const toggleButton = screen.getByRole("button", {
      name: /ganti ke mode gelap/i,
    });

    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute("aria-pressed", "true");
  });

  it("calls onToggle when clicked", () => {
    const onToggle = vi.fn();

    render(<ThemeToggle theme="dark" onToggle={onToggle} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /ganti ke mode terang/i,
      }),
    );

    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
