import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { LanguageDropdown } from "../components/LanguageDropdown";

describe("LanguageDropdown", () => {
  it("renders language button with Indonesian label by default", () => {
    render(<LanguageDropdown language="id" onChangeLanguage={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /pilih bahasa/i }),
    ).toBeInTheDocument();
  });

  it("opens language menu and shows available language options", () => {
    render(<LanguageDropdown language="id" onChangeLanguage={vi.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: /pilih bahasa/i }));

    expect(screen.getByRole("menu")).toBeInTheDocument();

    expect(
      screen.getByRole("menuitemradio", { name: /bahasa indonesia/i }),
    ).toHaveAttribute("aria-checked", "true");

    expect(
      screen.getByRole("menuitemradio", { name: /english/i }),
    ).toHaveAttribute("aria-checked", "false");
  });

  it("calls language change handler when another language is selected", () => {
    const onChangeLanguage = vi.fn();

    render(
      <LanguageDropdown language="id" onChangeLanguage={onChangeLanguage} />,
    );

    fireEvent.click(screen.getByRole("button", { name: /pilih bahasa/i }));
    fireEvent.click(screen.getByRole("menuitemradio", { name: /english/i }));

    expect(onChangeLanguage).toHaveBeenCalledWith("en");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("uses English aria label when current language is English", () => {
    render(<LanguageDropdown language="en" onChangeLanguage={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /choose language/i }),
    ).toBeInTheDocument();
  });

  it("closes menu when Escape is pressed", () => {
    render(<LanguageDropdown language="id" onChangeLanguage={vi.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: /pilih bahasa/i }));

    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes menu when clicking outside", () => {
    render(<LanguageDropdown language="id" onChangeLanguage={vi.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: /pilih bahasa/i }));

    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});
