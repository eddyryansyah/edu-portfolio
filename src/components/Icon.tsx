import type { ReactNode } from "react";

export type IconName =
  | "mail"
  | "phone"
  | "linkedin"
  | "map"
  | "download"
  | "external"
  | "package"
  | "clipboard"
  | "shopping"
  | "graduation"
  | "award"
  | "users"
  | "messageCircle"
  | "language"
  | "check";

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

function getIconPath(name: IconName): ReactNode {
  switch (name) {
    case "mail":
      return (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7L12 13L21 7" />
        </>
      );

    case "phone":
      return (
        <>
          <path d="M22 16.92V19A2 2 0 0 1 19.82 21A19.8 19.8 0 0 1 11.19 17.93A19.5 19.5 0 0 1 5.07 11.81A19.8 19.8 0 0 1 2 3.18A2 2 0 0 1 4 1H6.08A2 2 0 0 1 8 2.72C8.12 3.63 8.33 4.52 8.63 5.37A2 2 0 0 1 8.18 7.48L7.3 8.36A16 16 0 0 0 14.64 15.7L15.52 14.82A2 2 0 0 1 17.63 14.37C18.48 14.67 19.37 14.88 20.28 15A2 2 0 0 1 22 16.92Z" />
        </>
      );

    case "linkedin":
      return (
        <>
          <circle cx="6.3" cy="6.4" r="1.7" fill="currentColor" stroke="none" />
          <path
            d="M4.7 10H7.9V18.5H4.7V10Z"
            fill="currentColor"
            stroke="none"
          />
          <path
            d="M10 10H13.1V11.2C13.55 10.45 14.55 9.75 16.15 9.75C19.2 9.75 20.1 11.75 20.1 14.35V18.5H16.9V14.75C16.9 13.75 16.85 12.55 15.45 12.55C14.05 12.55 13.25 13.55 13.25 14.65V18.5H10V10Z"
            fill="currentColor"
            stroke="none"
          />
        </>
      );

    case "map":
      return (
        <>
          <path d="M12 21S19 13.5 19 8.5A7 7 0 0 0 5 8.5C5 13.5 12 21 12 21Z" />
          <circle cx="12" cy="8.5" r="2.5" />
        </>
      );

    case "download":
      return (
        <>
          <path d="M12 3V15" />
          <path d="M7 10L12 15L17 10" />
          <path d="M5 21H19" />
        </>
      );

    case "external":
      return (
        <>
          <path d="M14 3H21V10" />
          <path d="M10 14L21 3" />
          <path d="M19 14V19A2 2 0 0 1 17 21H5A2 2 0 0 1 3 19V7A2 2 0 0 1 5 5H10" />
        </>
      );

    case "package":
      return (
        <>
          <path d="M21 8L12 3L3 8L12 13L21 8Z" />
          <path d="M3 8V16L12 21L21 16V8" />
          <path d="M12 13V21" />
        </>
      );

    case "clipboard":
      return (
        <>
          <rect x="6" y="5" width="12" height="16" rx="2" />
          <path d="M9 5A3 3 0 0 1 15 5" />
          <path d="M9 9H15" />
          <path d="M9 13H15" />
          <path d="M9 17H13" />
        </>
      );

    case "shopping":
      return (
        <>
          <path d="M6 8H18L17 21H7L6 8Z" />
          <path d="M9 8V6A3 3 0 0 1 15 6V8" />
        </>
      );

    case "graduation":
      return (
        <>
          <path d="M22 9L12 4L2 9L12 14L22 9Z" />
          <path d="M6 11.5V16C6 18 9 20 12 20C15 20 18 18 18 16V11.5" />
          <path d="M22 9V15" />
        </>
      );

    case "award":
      return (
        <>
          <circle cx="12" cy="8" r="5" />
          <path d="M8.5 12.5L7 22L12 19L17 22L15.5 12.5" />
        </>
      );

    case "users":
      return (
        <>
          <path d="M16 21V19A4 4 0 0 0 12 15H6A4 4 0 0 0 2 19V21" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21V19A4 4 0 0 0 19 15.13" />
          <path d="M16 3.13A4 4 0 0 1 16 10.87" />
        </>
      );

    case "messageCircle":
      return (
        <>
          <path d="M21 11.5A8.38 8.38 0 0 1 12.5 20A8.5 8.5 0 0 1 8.8 19.15L3 21L4.85 15.2A8.5 8.5 0 1 1 21 11.5Z" />
          <path d="M8 10H16" />
          <path d="M8 14H13" />
        </>
      );

    case "language":
      return (
        <>
          <path d="M4 5H13" />
          <path d="M9 3V5" />
          <path d="M11 5C10.3 8.8 8.1 11.8 4 14" />
          <path d="M5.5 8C6.6 10.4 8.4 12.2 11 13.5" />
          <path d="M15 21L19 11L23 21" />
          <path d="M16.4 17H21.6" />
        </>
      );

    case "check":
      return <path d="M20 6L9 17L4 12" />;

    default:
      return null;
  }
}

export function Icon({ name, className = "h-5 w-5", size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {getIconPath(name)}
    </svg>
  );
}
