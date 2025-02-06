import { useState } from "react";
import { PostmanCollection } from "@/interfaces/postman";
import FileUploader from "@/components/FileUploader";
import CollectionPreview from "@/components/CollectionPreview";

export default function App() {
  const [collection, setCollection] = useState<PostmanCollection | null>(null);
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="mt-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">
          Postman Collection Previewer
        </h1>
        <FileUploader setCollection={setCollection} setError={setError} />
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        {collection && (
          <div className="mt-4 p-4 bg-white rounded-md shadow">
            <h2 className="font-bold text-xl mb-2">
              Collection: {collection.info.name}
            </h2>
            {collection.info.description && (
              <p className="mb-4">
                {typeof collection.info.description === "string"
                  ? collection.info.description
                  : collection.info.description?.content}
              </p>
            )}
            <CollectionPreview
              items={collection.item}
              parent_auth={collection.auth}
            />
          </div>
        )}
      </div>
    </div>
  );
}
