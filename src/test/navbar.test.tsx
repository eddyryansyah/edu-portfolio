import { fireEvent, render, screen, within } from "@testing-library/react";
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

  Object.defineProperty(section, "offsetTop", {
    configurable: true,
    value: top,
  });

  document.body.appendChild(section);

  return section;
};

const renderNavbar = (props?: Partial<React.ComponentProps<typeof Navbar>>) => {
  const defaultProps: React.ComponentProps<typeof Navbar> = {
    theme: "dark",
    language: "id",
    onToggleTheme: vi.fn(),
    onChangeLanguage: vi.fn(),
  };

  return render(<Navbar {...defaultProps} {...props} />);
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

  it("renders brand and Indonesian navigation items", () => {
    renderNavbar();

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

  it("renders English navigation items when language is English", () => {
    renderNavbar({ language: "en" });

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
    renderNavbar();

    const menuButton = screen.getByRole("button", {
      name: /buka atau tutup menu navigasi/i,
    });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const mobileNavigation = document.getElementById("mobile-navigation");

    expect(mobileNavigation).toBeInTheDocument();

    const mobileMenu = within(mobileNavigation as HTMLElement);

    expect(
      mobileMenu.getByText("Tampilan", { selector: "p" }),
    ).toBeInTheDocument();
    expect(
      mobileMenu.getByText("Mode Gelap", { selector: "p" }),
    ).toBeInTheDocument();
    expect(
      mobileMenu.getByText("Bahasa", { selector: "p" }),
    ).toBeInTheDocument();
    expect(
      mobileMenu.getByText("Bahasa Indonesia", { selector: "p" }),
    ).toBeInTheDocument();
  });

  it("calls theme toggle handler from navbar", () => {
    const onToggleTheme = vi.fn();

    renderNavbar({ onToggleTheme });

    const themeButton = screen.getByRole("button", {
      name: /ganti ke mode terang/i,
    });

    fireEvent.click(themeButton);

    expect(onToggleTheme).toHaveBeenCalledTimes(1);
  });

  it("opens language dropdown and calls language change handler", () => {
    const onChangeLanguage = vi.fn();

    renderNavbar({ onChangeLanguage });

    const languageButton = screen.getByRole("button", {
      name: /pilih bahasa/i,
    });

    fireEvent.click(languageButton);
    fireEvent.click(screen.getByRole("menuitemradio", { name: /english/i }));

    expect(onChangeLanguage).toHaveBeenCalledWith("en");
  });

  it("scrolls to the selected section and updates the URL hash", () => {
    createSection("skills", 900);

    renderNavbar();

    fireEvent.click(screen.getByRole("button", { name: "Keterampilan" }));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 780,
      behavior: "smooth",
    });

    expect(window.location.hash).toBe("#skills");
  });
});
