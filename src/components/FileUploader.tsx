import React from "react";
import { PostmanCollection } from "@/interfaces/postman";

interface FileUploaderProps {
  setCollection: React.Dispatch<React.SetStateAction<PostmanCollection | null>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export default function FileUploader({
  setCollection,
  setError,
}: FileUploaderProps) {
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const target = e.target as FileReader;
      if (target && typeof target.result === "string") {
        try {
          const parsed = JSON.parse(target.result) as PostmanCollection;
          setCollection(parsed);
          setError("");
        } catch (err) {
          console.error("Error parsing JSON", err);
          setError(
            "The file is not a valid JSON or does not have the expected Postman collection format."
          );
          setCollection(null);
        }
      }
    };
    reader.onerror = (err: ProgressEvent<FileReader>) => {
      console.error("File reading error: ", err);
      setError("Error reading the file.");
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-dashed border-4 border-gray-300 rounded-md p-8 text-center mb-4 bg-white hover:bg-gray-50"
      >
        <p className="text-gray-600">
          Drag & drop your Postman collection file here, or click below to
          select from your computer.
        </p>
      </div>
      <input
        type="file"
        accept="application/json"
        onChange={handleFileSelect}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
    </div>
  );
}
