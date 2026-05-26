const iconPaths = {
  mail: "M4 4h16v16H4V4Zm2.4 3 5.6 4.2L17.6 7H6.4Zm11.6 10V9.5l-6 4.5-6-4.5V17h12Z",
  phone:
    "M6.6 3.8 9 6.2 7.5 9c1.1 2.2 3.3 4.4 5.5 5.5l2.8-1.5 2.4 2.4-1.2 3.1c-.3.8-1.1 1.3-1.9 1.3C12.6 22 2 11.4 2 4.9c0-.8.5-1.6 1.3-1.9l3.3-1.2Z",
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.2 0H13v1.5c.6-.9 1.7-1.8 3.5-1.8 3.7 0 4.5 2.4 4.5 5.6v5.7h-4v-5c0-1.2 0-2.8-1.8-2.8s-2 1.3-2 2.7v5.1h-4v-11Z",
  map: "M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z",
  download:
    "M11 3h2v9l3.5-3.5 1.4 1.4L12 15.8 6.1 9.9l1.4-1.4L11 12V3Zm-6 15h14v2H5v-2Z",
  external:
    "M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z",
  package:
    "M12 2 3 6.5v11L12 22l9-4.5v-11L12 2Zm0 2.2 5.8 2.9L12 10 6.2 7.1 12 4.2ZM5 8.7l6 3v7.5l-6-3V8.7Zm8 10.5v-7.5l6-3v7.5l-6 3Z",
  clipboard:
    "M8 2h8v3h3v17H5V5h3V2Zm2 2v2h4V4h-4ZM7 7v13h10V7H7Zm2 4h6v2H9v-2Zm0 4h6v2H9v-2Z",
  shopping:
    "M7 7V6a5 5 0 0 1 10 0v1h3v15H4V7h3Zm2 0h6V6a3 3 0 0 0-6 0v1Zm-3 2v11h12V9H6Z",
  graduation:
    "M12 3 1 8l11 5 9-4.1V16h2V8L12 3Zm-6 8.2V15c0 2.2 3.6 4 6 4s6-1.8 6-4v-3.8l-6 2.7-6-2.7Z",
  award:
    "M12 2a6 6 0 0 1 4 10.5V22l-4-2-4 2v-9.5A6 6 0 0 1 12 2Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9.6v5.2l2-1 2 1v-5.2a6 6 0 0 1-4 0Z",
  users:
    "M8 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm8.5 0a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM2 21v-2c0-3.3 3-6 6-6s6 2.7 6 6v2H2Zm13 0v-2c0-1.8-.7-3.5-1.8-4.8 1-.7 2.1-1.2 3.3-1.2 2.8 0 5.5 2.5 5.5 5.5V21h-7Z",
  language:
    "M4 4h8v2H9.5c-.2 1.2-.6 2.5-1.2 3.6.8.9 1.8 1.6 3 2.2l-1 1.8A11 11 0 0 1 7.2 11c-.9 1.1-2 2-3.2 2.7l-1-1.7a9 9 0 0 0 3-2.4A12 12 0 0 1 4.8 7h2c.2.5.4 1 .6 1.4.3-.8.6-1.6.7-2.4H4V4Zm11.5 4h2L22 20h-2.2l-.8-2.2h-5l-.8 2.2H11l4.5-12Zm-.8 7.8h3.6L16.5 11l-1.8 4.8Z",
  check: "M9.2 16.6 4.6 12l-1.4 1.4 6 6L21 7.6 19.6 6.2 9.2 16.6Z",
};

export type IconName = keyof typeof iconPaths;

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export function Icon({ name, className = "h-5 w-5", size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}
