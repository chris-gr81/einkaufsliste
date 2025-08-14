import { usePurchase } from "@/context/PurchaseContext";
import { Button } from "../button";
import { Card, CardContent } from "../card";
import { CheckCircleIcon, Trash2, Undo2 } from "lucide-react";
import type { PurchaseItem } from "@/types/types";
import { toast } from "sonner";

interface SimpleCardProps {
  item: PurchaseItem;
}

function SimpleCard({ item }: SimpleCardProps) {
  const { itemToEnd, itemToStart, deleteItem } = usePurchase();

  const handleDone = () => {
    item.isMarked = true;
    itemToEnd(item);
  };

  const handleUndo = () => {
    item.isMarked = false;
    itemToStart(item);
  };

  const handleDelete = () => {
    deleteItem(item);
    toast(<span className="font-bold">Produkt gelöscht</span>, {
      description: `${item.article} wurde aus der Einkaufsliste entfernt.`,
    });
  };
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between">
        <div>
          <div
            className={`font-bold ${
              item.isMarked && "text-neutral-500 line-through"
            }`}
          >
            {item.article}
          </div>
          <div className="text-sm text-neutral-500">
            Anzahl: {item.quantity}
          </div>
        </div>
        {item.isMarked ? (
          <div className="flex w-36 justify-between">
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 />
            </Button>
            <Button variant="secondary" onClick={handleUndo}>
              <Undo2 />
              Zurück
            </Button>
          </div>
        ) : (
          <Button className="w-36" variant="outline" onClick={handleDone}>
            <CheckCircleIcon />
            Abhaken
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default SimpleCard;
