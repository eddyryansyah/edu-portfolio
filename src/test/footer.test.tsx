import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "../components/Footer";

describe("Footer", () => {
  it("renders portfolio footer information", () => {
    render(<Footer />);

    expect(screen.getByText("Edward Portfolio")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Dibuat oleh Eddy Ryansyah sebagai proyek portofolio frontend modern.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Eddy Ryansyah. Seluruh hak cipta dilindungi./i),
    ).toBeInTheDocument();
  });

  it("renders official repository link", () => {
    render(<Footer />);

    const repositoryLink = screen.getByRole("link", {
      name: /repositori resmi/i,
    });

    expect(repositoryLink).toHaveAttribute(
      "href",
      "https://github.com/eddyryansyah/edu-portfolio",
    );
    expect(repositoryLink).toHaveAttribute("target", "_blank");
    expect(repositoryLink).toHaveAttribute("rel", "noreferrer");
  });
});
