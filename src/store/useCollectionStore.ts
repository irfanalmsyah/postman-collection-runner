import { PostmanCollection } from "@/interfaces/postman";
import { create } from "zustand";

interface CollectionStore {
  collection: PostmanCollection | null;
  setCollection: (collection: PostmanCollection) => void;
}

export const useCollectionStore = create<CollectionStore>((set) => ({
  collection: null,
  setCollection: (collection) => set({ collection }),
}));
