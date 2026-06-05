import { describe, expect, it } from "vitest";
import { languageOptions, sectionIds, uiCopy } from "../data/i18n";
import {
  experiences,
  portfolioContent,
  profile,
  skills,
  softSkills,
} from "../data/portfolio";

const supportedLanguages = ["id", "en"] as const;

describe("portfolio data", () => {
  it("provides default Indonesian portfolio profile and core data", () => {
    expect(profile.name).toBe("Edward Yulyardi Suparno");
    expect(profile.initials).toBe("EY");
    expect(profile.email).toContain("@");
    expect(profile.linkedin).toContain("linkedin.com");

    expect(experiences.length).toBeGreaterThanOrEqual(2);
    expect(skills.length).toBeGreaterThanOrEqual(10);
    expect(softSkills.length).toBeGreaterThanOrEqual(5);
  });

  it("provides complete localized portfolio content for every supported language", () => {
    supportedLanguages.forEach((language) => {
      const content = portfolioContent[language];

      expect(content.profile.name).toBe("Edward Yulyardi Suparno");
      expect(content.profile.title.length).toBeGreaterThan(0);
      expect(content.profile.summary.length).toBeGreaterThan(80);
      expect(content.profile.cvUrl).toContain("edu-cv.pdf");
      expect(content.profile.photoUrl).toContain("edu-profile.jpg");

      expect(content.experiences.length).toBeGreaterThanOrEqual(2);

      content.experiences.forEach((experience) => {
        expect(experience.company.length).toBeGreaterThan(0);
        expect(experience.role.length).toBeGreaterThan(0);
        expect(experience.description.length).toBeGreaterThan(0);
        expect(experience.points.length).toBeGreaterThanOrEqual(3);
      });

      expect(content.educationHighlights.length).toBeGreaterThanOrEqual(3);
      expect(content.highSchoolHighlights.length).toBeGreaterThanOrEqual(3);
      expect(content.organizationPoints.length).toBeGreaterThanOrEqual(3);
      expect(content.skills.length).toBeGreaterThanOrEqual(10);
      expect(content.softSkills.length).toBeGreaterThanOrEqual(5);
      expect(content.certifications.length).toBeGreaterThanOrEqual(2);
      expect(content.languages.length).toBeGreaterThanOrEqual(2);
    });
  });

  it("keeps localized UI copy aligned with supported navigation sections", () => {
    expect(sectionIds).toEqual([
      "home",
      "experience",
      "education",
      "organization",
      "skills",
      "contact",
    ]);

    supportedLanguages.forEach((language) => {
      const copy = uiCopy[language];

      expect(Object.keys(copy.nav)).toEqual(sectionIds);
      expect(languageOptions[language].label.length).toBeGreaterThan(0);
      expect(languageOptions[language].shortLabel.length).toBeGreaterThan(0);

      expect(copy.accessibility.skipToMain.length).toBeGreaterThan(0);
      expect(copy.hero.primaryCta.length).toBeGreaterThan(0);
      expect(copy.sections.experience.title.length).toBeGreaterThan(0);
      expect(copy.sections.education.title.length).toBeGreaterThan(0);
      expect(copy.sections.organization.title.length).toBeGreaterThan(0);
      expect(copy.sections.skills.title.length).toBeGreaterThan(0);
      expect(copy.sections.contact.title.length).toBeGreaterThan(0);
      expect(copy.footer.repository.length).toBeGreaterThan(0);
    });
  });

  it("uses expected English labels for skill categories", () => {
    expect(uiCopy.en.sections.skills.technicalSkills).toBe("Hard Skills");
    expect(uiCopy.en.sections.skills.nonTechnicalSkills).toBe("Soft Skills");
  });
});
