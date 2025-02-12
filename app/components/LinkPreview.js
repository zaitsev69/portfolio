'use client';

import { useState, useEffect } from "react";

const LinkPreview = ({ url }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const response = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        setPreview(data);
      } catch (error) {
        console.error("Erreur lors de la récupération de la preview :", error);
      }
    };

    fetchPreview();
  }, [url]);

  return (
    <div className="p-4 border rounded shadow-md bg-white max-w-lg mx-auto">
      {preview ? (
        <a
          href={preview.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="text-xl font-bold">{preview.title || "Pas de titre disponible"}</h3>
          <p>{preview.description || "Pas de description disponible"}</p>
          {preview.images?.length > 0 && (
            <img
              src={preview.images[0]}
              alt="Preview"
              className="mt-2 w-full h-auto rounded"
            />
          )}
        </a>
      ) : (
        <p>Chargement de la preview...</p>
      )}
    </div>
  );
};

export default LinkPreview;
