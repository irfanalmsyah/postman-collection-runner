import { useState } from "react";
import FileUploader from "@/components/FileUploader";
import CollectionContainer from "./components/CollectionContainer";

export default function App() {
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="mt-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">
          Postman Collection Previewer
        </h1>
        <FileUploader setError={setError} />
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        <CollectionContainer />
      </div>
    </div>
  );
}
