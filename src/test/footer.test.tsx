import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "../components/Footer";

describe("Footer", () => {
  it("renders Indonesian portfolio footer information", () => {
    render(<Footer language="id" />);

    expect(screen.getByText("Edward Portfolio")).toBeInTheDocument();

    expect(
      screen.getByText(
        "Dibuat oleh Eddy Ryansyah sebagai proyek portofolio frontend modern.",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Seluruh hak cipta dilindungi/i),
    ).toBeInTheDocument();
  });

  it("renders official repository link in Indonesian", () => {
    render(<Footer language="id" />);

    const repositoryLink = screen.getByRole("link", {
      name: /repositori resmi/i,
    });

    expect(repositoryLink).toHaveAttribute(
      "href",
      "https://github.com/eddyryansyah/edu-portfolio",
    );
  });

  it("renders English portfolio footer information", () => {
    render(<Footer language="en" />);

    expect(screen.getByText("Edward Portfolio")).toBeInTheDocument();

    expect(
      screen.getByText(
        "Built by Eddy Ryansyah as a modern frontend portfolio project.",
      ),
    ).toBeInTheDocument();

    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it("renders official repository link in English", () => {
    render(<Footer language="en" />);

    const repositoryLink = screen.getByRole("link", {
      name: /official repository/i,
    });

    expect(repositoryLink).toHaveAttribute(
      "href",
      "https://github.com/eddyryansyah/edu-portfolio",
    );
  });
});
