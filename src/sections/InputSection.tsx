import type { PurchaseItem } from "@/types/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePurchase } from "@/context/PurchaseContext";

function InputSection() {
  const { items, addItem } = usePurchase();
  const [isButton, setIsButton] = useState(true);
  const [item, setItem] = useState<PurchaseItem>({ article: "", quantity: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    if (id === "articleInput") {
      setItem((prev) => ({ ...prev, article: value }));
    }
    if (id === "quantityInput") {
      setItem((prev) => ({ ...prev, quantity: value }));
    }
  };

  const handleSubmit = () => {
    if (items.some((i) => i.article === item.article)) {
      alert("doppelt");
      return;
    }
    addItem(item);
    setItem({ article: "", quantity: "" });
  };

  useEffect(() => {
    item.article !== "" && item.quantity !== ""
      ? setIsButton(false)
      : setIsButton(true);
  }, [item]);

  return (
    <section>
      <div className="flex flex-row gap-2 mb-2">
        <Input
          className="w-6/7"
          id="articleInput"
          value={item.article}
          onChange={handleChange}
        />
        <Input
          className="w-1/7"
          id="quantityInput"
          type="number"
          value={item.quantity}
          onChange={handleChange}
        />
      </div>
      <Button
        className="w-full"
        type="button"
        disabled={isButton}
        onClick={handleSubmit}
      >
        Eintrag hinzufügen
      </Button>
    </section>
  );
}

export default InputSection;
