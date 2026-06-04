import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SplashScreen } from "../components/SplashScreen";

describe("SplashScreen", () => {
  it("renders loading status for the page intro", () => {
    render(<SplashScreen />);

    expect(
      screen.getByRole("status", {
        name: /memuat halaman/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the portfolio intro text", () => {
    render(<SplashScreen />);

    expect(screen.getByText("Kenalkan, Edward.")).toBeInTheDocument();
  });
});
