import { describe, expect, it } from "vitest";
import {
  certifications,
  educationHighlights,
  experiences,
  highSchoolHighlights,
  languages,
  organizationPoints,
  profile,
  skills,
  softSkills,
} from "../data/portfolio";

describe("portfolio data", () => {
  it("has complete profile data", () => {
    expect(profile.name).toBeTruthy();
    expect(profile.initials).toBeTruthy();
    expect(profile.title).toBeTruthy();
    expect(profile.location).toBeTruthy();
    expect(profile.phone).toBeTruthy();
    expect(profile.email).toContain("@");
    expect(profile.linkedin).toMatch(/^https:\/\//);
    expect(profile.photoUrl).toContain("edu-profile.jpg");
    expect(profile.cvUrl).toContain("edu-cv.pdf");
    expect(profile.summary.length).toBeGreaterThan(80);
  });

  it("has valid work experiences", () => {
    expect(experiences.length).toBeGreaterThanOrEqual(2);

    for (const experience of experiences) {
      expect(experience.company).toBeTruthy();
      expect(experience.role).toBeTruthy();
      expect(experience.location).toBeTruthy();
      expect(experience.period).toBeTruthy();
      expect(experience.description).toBeTruthy();
      expect(experience.points.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("has complete portfolio sections", () => {
    expect(educationHighlights.length).toBeGreaterThanOrEqual(3);
    expect(highSchoolHighlights.length).toBeGreaterThanOrEqual(3);
    expect(organizationPoints.length).toBeGreaterThanOrEqual(3);
    expect(skills.length).toBeGreaterThanOrEqual(8);
    expect(softSkills.length).toBeGreaterThanOrEqual(5);
    expect(certifications.length).toBeGreaterThanOrEqual(2);
    expect(languages.length).toBeGreaterThanOrEqual(2);
  });
});
