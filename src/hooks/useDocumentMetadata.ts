import { useEffect } from "react";

type DocumentMetadata = {
  title: string;
  description: string;
};

const getOrCreateDescriptionMeta = () => {
  const existingDescriptionElement = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );

  if (existingDescriptionElement) {
    return existingDescriptionElement;
  }

  const descriptionElement = document.createElement("meta");
  descriptionElement.name = "description";
  document.head.appendChild(descriptionElement);

  return descriptionElement;
};

export function useDocumentMetadata(metadata: DocumentMetadata) {
  useEffect(() => {
    document.title = metadata.title;

    const descriptionElement = getOrCreateDescriptionMeta();
    descriptionElement.content = metadata.description;
  }, [metadata]);
}
