import type { PurchaseItem } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface PurchaseItemType {
  items: PurchaseItem[];
  addItem: (item: PurchaseItem) => void;
}

const PurchaseContext = createContext<PurchaseItemType | undefined>(undefined);

export const PurchaseProvider = ({ children }: { children: ReactNode }) => {
  const initial = JSON.parse(localStorage.getItem("purchasor") || "[]");
  const [items, setItems] = useState<PurchaseItem[]>(initial);

  const addItem = (item: PurchaseItem) => {
    setItems((prev) => [...prev, item]);
  };

  useEffect(() => {
    localStorage.setItem("purchasor", JSON.stringify(items));
  }, [items]);

  return (
    <PurchaseContext.Provider value={{ items, addItem }}>
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
