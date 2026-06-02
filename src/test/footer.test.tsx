import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "../components/Footer";

describe("Footer", () => {
  it("renders portfolio footer information", () => {
    render(<Footer />);

    expect(screen.getByText("Edward Portfolio")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Built by Eddy Ryansyah as a modern frontend portfolio project.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Eddy Ryansyah. All rights reserved./i),
    ).toBeInTheDocument();
  });

  it("renders official repository link", () => {
    render(<Footer />);

    const repositoryLink = screen.getByRole("link", {
      name: /official repository/i,
    });

    expect(repositoryLink).toHaveAttribute(
      "href",
      "https://github.com/eddyryansyah/edu-portfolio",
    );
    expect(repositoryLink).toHaveAttribute("target", "_blank");
    expect(repositoryLink).toHaveAttribute("rel", "noreferrer");
  });
});
