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
    expect(screen.getByText("Profil Profesional")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Beranda" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Pengalaman" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Pendidikan" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Organisasi" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Keterampilan" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Kontak" })).toBeInTheDocument();
  });

  it("opens mobile navigation menu when toggle button is clicked", () => {
    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    const menuButton = screen.getByRole("button", {
      name: /buka atau tutup menu navigasi/i,
    });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Tampilan")).toBeInTheDocument();
    expect(screen.getByText("Mode Gelap")).toBeInTheDocument();
  });

  it("calls theme toggle handler from navbar", () => {
    const onToggleTheme = vi.fn();

    render(<Navbar theme="dark" onToggleTheme={onToggleTheme} />);

    const themeButton = screen.getByRole("button", {
      name: /ganti ke mode terang/i,
    });

    fireEvent.click(themeButton);

    expect(onToggleTheme).toHaveBeenCalledTimes(1);
  });

  it("scrolls to the selected section and updates the URL hash", () => {
    createSection("skills", 900);

    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: "Keterampilan" }));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 780,
      behavior: "smooth",
    });

    expect(window.location.hash).toBe("#skills");
  });
});
