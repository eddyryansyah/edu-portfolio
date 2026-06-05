import { useCallback, useEffect, useState } from "react";
import type { SectionId } from "../data/i18n";

const DESKTOP_NAVBAR_OFFSET = 120;
const MOBILE_NAVBAR_OFFSET = 160;
const BOTTOM_THRESHOLD = 32;

const getNavbarOffset = () =>
  window.innerWidth < 768 ? MOBILE_NAVBAR_OFFSET : DESKTOP_NAVBAR_OFFSET;

type UseActiveSectionResult = {
  activeSection: SectionId;
  navigateToSection: (targetId: SectionId) => void;
};

export function useActiveSection(
  sectionIds: SectionId[],
): UseActiveSectionResult {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScrollPosition = documentHeight - viewportHeight;
      const isNearBottom =
        window.scrollY >= maxScrollPosition - BOTTOM_THRESHOLD;

      if (isNearBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1] ?? "home");
        return;
      }

      const navbarOffset = getNavbarOffset();
      const scrollPosition = window.scrollY + navbarOffset + 1;
      let currentSection: SectionId = "home";

      for (const sectionId of sectionIds) {
        const sectionElement = document.getElementById(sectionId);

        if (!sectionElement) {
          continue;
        }

        if (sectionElement.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  const navigateToSection = useCallback((targetId: SectionId) => {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    const targetPosition =
      targetElement.getBoundingClientRect().top +
      window.scrollY -
      getNavbarOffset();

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: "smooth",
    });

    window.history.pushState(null, "", `#${targetId}`);
    setActiveSection(targetId);
  }, []);

  return {
    activeSection,
    navigateToSection,
  };
}
