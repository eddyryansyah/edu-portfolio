import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Navbar } from "../components/Navbar";

const createSection = (id: string, top: number) => {
  const section = document.createElement("section");
  section.id = id;
  section.dataset.testSection = "true";

  section.getBoundingClientRect = () =>
    ({
      top,
      left: 0,
      right: 0,
      bottom: top + 400,
      width: 0,
      height: 400,
      x: 0,
      y: top,
      toJSON: () => ({}),
    }) as DOMRect;

  document.body.appendChild(section);

  return section;
};

describe("Navbar", () => {
  beforeEach(() => {
    window.history.pushState(null, "", "/");
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    document
      .querySelectorAll("[data-test-section='true']")
      .forEach((section) => section.remove());

    vi.restoreAllMocks();
  });

  it("renders brand and navigation items", () => {
    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    expect(screen.getByText("Edward Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Professional Profile")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Experience" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Education" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Organization" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Skills" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Contact" })).toBeInTheDocument();
  });

  it("opens mobile navigation menu when toggle button is clicked", () => {
    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    const menuButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Appearance")).toBeInTheDocument();
    expect(screen.getByText("Dark Mode")).toBeInTheDocument();
  });

  it("calls theme toggle handler from navbar", () => {
    const onToggleTheme = vi.fn();

    render(<Navbar theme="dark" onToggleTheme={onToggleTheme} />);

    const themeButton = screen.getByRole("button", {
      name: /switch to light mode/i,
    });

    fireEvent.click(themeButton);

    expect(onToggleTheme).toHaveBeenCalledTimes(1);
  });

  it("scrolls to the selected section and updates the URL hash", () => {
    createSection("skills", 900);

    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: "Skills" }));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 780,
      behavior: "smooth",
    });

    expect(window.location.hash).toBe("#skills");
  });
});
