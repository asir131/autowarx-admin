


import { DualBarCharts } from "@/components/chart-area-interactive"
import { ExistingInventoryTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"

import Graph from "@/components/graph"
export default function Page() {
  return (
    < >
      <SectionCards />
      <Graph/>
      <div className="px-4 lg:px-6">
        <DualBarCharts />
      </div>
      <ExistingInventoryTable  />
    </>
  )
}