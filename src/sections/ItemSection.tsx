import SimpleCard from "@/components/ui/cards/SimpleCard";
import { usePurchase } from "@/context/PurchaseContext";

function ItemSection() {
  const { items } = usePurchase();
  console.log(items);
  return (
    <section className="flex flex-col gap-5 mt-6">
      {items.map((element, index) => {
        return (
          <SimpleCard
            key={index}
            article={element.article}
            quantity={element.quantity}
          />
        );
      })}
    </section>
  );
}

export default ItemSection;
