import { Icon, type IconName } from "./Icon";

type ContactItemProps = {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
};

export function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="flex w-full min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-slate-950 text-white">
        <Icon name={icon} size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className="break-words text-sm font-semibold leading-5 text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="block w-full min-w-0"
    >
      {content}
    </a>
  );
}
