import { useState } from "react";

type ProfilePhotoProps = {
  src: string;
  alt: string;
  fallback: string;
};

export function ProfilePhoto({ src, alt, fallback }: ProfilePhotoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="flex h-24 w-24 flex-none items-center justify-center rounded-3xl bg-slate-950 text-2xl font-bold text-white ring-4 ring-slate-100">
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-24 w-24 flex-none rounded-3xl object-cover object-top ring-4 ring-slate-100"
      onError={() => setHasError(true)}
    />
  );
}
