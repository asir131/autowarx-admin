import { TrendingDown, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  const cardData = [
    {
      value: "120K",
      label: "Total User",
      trend: null
    },
    {
      value: "120",
      label: "New User",
      trend: null
    },
    {
      value: "23K",
      label: "Total Listed",
      trend: null
    },
    {
      value: "102",
      label: "New Listed",
      trend: null
    },
    {
      value: "1000.00$",
      label: "Earning",
      trend: null
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4 mx-2">
      {cardData.map((card, index) => (
        <Card key={index} className="border border-[#B1B1B1] rounded-lg py-8 text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl   text-gray-900">
              {card.value}
            </CardTitle>
            <CardDescription className="opacity-55 text-lg text-gray-500">
              {card.label}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}