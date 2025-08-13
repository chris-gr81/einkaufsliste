import { PurchaseProvider } from "./context/PurchaseContext";
import InputSection from "./sections/InputSection";
import ItemSection from "./sections/ItemSection";

function App() {
  return (
    <PurchaseProvider>
      <main className="w-full max-w-lg mx-auto px-4">
        <div>
          <h2 className="text-3xl text-center font-bold mt-20 mb-10">
            Einkaufsliste
          </h2>
          <InputSection />
          <ItemSection />
        </div>
      </main>
    </PurchaseProvider>
  );
}

export default App;
