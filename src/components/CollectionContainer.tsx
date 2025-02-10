import { useCollectionStore } from "@/store/useCollectionStore";
import CollectionPreview from "./CollectionPreview";

export default function CollectionContainer() {
  const collection = useCollectionStore((state) => state.collection);
  if (!collection) return null;

  return (
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
  );
}
