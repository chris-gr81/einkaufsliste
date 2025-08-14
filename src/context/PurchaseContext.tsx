import type { PurchaseItem } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface PurchaseItemType {
  items: PurchaseItem[];
  addItem: (item: PurchaseItem) => void;
  deleteItem: (item: PurchaseItem) => void;
  itemToEnd: (item: PurchaseItem) => void;
  itemToStart: (item: PurchaseItem) => void;
}

const PurchaseContext = createContext<PurchaseItemType | undefined>(undefined);

export const PurchaseProvider = ({ children }: { children: ReactNode }) => {
  const initial = JSON.parse(localStorage.getItem("purchasor") || "[]");
  const [items, setItems] = useState<PurchaseItem[]>(initial);

  const addItem = (item: PurchaseItem) => {
    setItems((prev) => [item, ...prev]);
  };

  const deleteItem = (item: PurchaseItem) => {
    setItems([...getListWithoutItem(item)]);
  };

  const itemToEnd = (item: PurchaseItem) => {
    const newItems = getListWithoutItem(item);
    setItems([...newItems, item]);
  };

  const itemToStart = (item: PurchaseItem) => {
    const newItems = getListWithoutItem(item);
    setItems([item, ...newItems]);
  };

  const getListWithoutItem = (item: PurchaseItem): PurchaseItem[] => {
    return items.filter((i) => i.article !== item.article);
  };

  useEffect(() => {
    localStorage.setItem("purchasor", JSON.stringify(items));
  }, [items]);

  return (
    <PurchaseContext.Provider
      value={{ items, addItem, deleteItem, itemToEnd, itemToStart }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchase = () => {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error("useCart must be used within a PurchaseProvider");
  }
  return context;
};
