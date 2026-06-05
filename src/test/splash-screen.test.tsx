import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { uiCopy } from "../data/i18n";
import { SplashScreen } from "../components/SplashScreen";

describe("SplashScreen", () => {
  it("renders Indonesian loading status for the page intro", () => {
    render(<SplashScreen copy={uiCopy.id.splash} />);

    expect(
      screen.getByRole("status", { name: /memuat halaman/i }),
    ).toBeInTheDocument();

    expect(screen.getByText("Kenalkan, Edward.")).toBeInTheDocument();
  });

  it("renders English loading status for the page intro", () => {
    render(<SplashScreen copy={uiCopy.en.splash} />);

    expect(
      screen.getByRole("status", { name: /loading page/i }),
    ).toBeInTheDocument();

    expect(screen.getByText("Meet Edward.")).toBeInTheDocument();
  });
});
