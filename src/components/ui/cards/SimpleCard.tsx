import { Button } from "../button";
import { Card, CardContent } from "../card";
import { CheckCircleIcon } from "lucide-react";

interface SimpleCardProps {
  article: string;
  quantity: string;
}
function SimpleCard({ article, quantity }: SimpleCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between">
        <div>
          <div className="font-bold">{article}</div>
          <div className="text-sm text-neutral-500">Anzahl: {quantity}</div>
        </div>
        <Button variant="outline">
          <CheckCircleIcon />
          Abhaken
        </Button>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;
