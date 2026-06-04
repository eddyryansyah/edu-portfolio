import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";
import { profile } from "../data/portfolio";

describe("App contact links", () => {
  afterEach(() => {
    cleanup();
  });

  const hasLinkWithHref = (href: string) =>
    screen
      .getAllByRole("link")
      .some((link) => link.getAttribute("href") === href);

  it("renders email, WhatsApp, and LinkedIn contact links", () => {
    render(<App />);

    expect(hasLinkWithHref(`mailto:${profile.email}`)).toBe(true);
    expect(hasLinkWithHref(profile.whatsappUrl)).toBe(true);
    expect(hasLinkWithHref(profile.linkedin)).toBe(true);
  });

  it("renders CV download link with a formal filename", () => {
    render(<App />);

    const cvLink = screen.getByRole("link", { name: /unduh cv/i });

    expect(cvLink).toHaveAttribute("href", profile.cvUrl);
    expect(cvLink).toHaveAttribute(
      "download",
      "CV Edward Yulyardi Suparno.pdf",
    );
  });
});
