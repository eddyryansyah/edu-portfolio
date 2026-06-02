import { Icon } from "./Icon";

type BulletListProps = {
  items: string[];
};

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[var(--text-body)]">
          <Icon
            name="check"
            className="mt-0.5 h-5 w-5 flex-none text-[var(--text-title)]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
