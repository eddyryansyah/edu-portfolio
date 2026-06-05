import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";

describe("App language integration", () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.history.pushState(null, "", "/");
    window.scrollTo = vi.fn();
  });

  it("uses Indonesian language by default", () => {
    render(<App />);

    expect(document.documentElement).toHaveAttribute("lang", "id");

    expect(screen.getByText("Beranda")).toBeInTheDocument();
    expect(screen.getByText("Portofolio Profesional")).toBeInTheDocument();
    expect(screen.getByText("Hubungi Saya")).toBeInTheDocument();
    expect(screen.getByText("Keterampilan Teknis")).toBeInTheDocument();
    expect(screen.getByText("Keterampilan Nonteknis")).toBeInTheDocument();
    expect(screen.getByText("Repositori Resmi")).toBeInTheDocument();

    expect(window.localStorage.getItem("language")).toBe("id");
  });

  it("changes page content to English when English is selected", () => {
    render(<App />);

    const languageButtons = screen.getAllByRole("button", {
      name: /pilih bahasa/i,
    });

    fireEvent.click(languageButtons[0]);

    const languageMenu = screen.getByRole("menu");
    const englishOption = within(languageMenu).getByRole("menuitemradio", {
      name: /english/i,
    });

    fireEvent.click(englishOption);

    expect(document.documentElement).toHaveAttribute("lang", "en");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Professional Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
    expect(screen.getByText("Hard Skills")).toBeInTheDocument();
    expect(screen.getByText("Soft Skills")).toBeInTheDocument();
    expect(screen.getByText("Official Repository")).toBeInTheDocument();

    expect(window.localStorage.getItem("language")).toBe("en");
  });

  it("loads saved English language from localStorage", () => {
    window.localStorage.setItem("language", "en");

    render(<App />);

    expect(document.documentElement).toHaveAttribute("lang", "en");

    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Professional Profile",
        level: 2,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /download edward yulyardi suparno cv/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Skills & Certifications",
        level: 2,
      }),
    ).toBeInTheDocument();
  });
});
