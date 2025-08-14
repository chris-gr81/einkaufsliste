import SimpleCard from "@/components/ui/cards/SimpleCard";
import { usePurchase } from "@/context/PurchaseContext";

function ItemSection() {
  const { items } = usePurchase();

  return (
    <section className="flex flex-col gap-5 mt-6">
      {items.map((element) => {
        return <SimpleCard key={element.article} item={element} />;
      })}
    </section>
  );
}

export default ItemSection;
