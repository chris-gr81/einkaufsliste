import SimpleCard from "@/components/ui/cards/SimpleCard";

function ItemSection() {
  return (
    <section className="flex flex-col gap-5 mt-6">
      <SimpleCard article="Bier" quantity="5" />
      <SimpleCard article="Wasser" quantity="6" />
      <SimpleCard article="Wein" quantity="2" />
    </section>
  );
}

export default ItemSection;
