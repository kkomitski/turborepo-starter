import { Skeleton } from "../../../../components/ui/skeleton"
import React from "react"

type InstrumentsChartProps = {
    uplotContainerElem: React.RefObject<HTMLDivElement>
    chartLoading: Boolean
}

const InstrumentsChart = ({ uplotContainerElem, chartLoading }: InstrumentsChartProps) => {
    return (
        <div className="chart-container mx-auto flex h-[300px] w-full max-w-3xl flex-col justify-between">
            <div
                ref={uplotContainerElem}
                className={`uplot-container relative max-w-[1282px] ${chartLoading ? "hidden" : ""}`}
            ></div>
            <Skeleton className={`h-full w-full rounded-lg bg-white-90 ${chartLoading ? "" : "hidden"}`}></Skeleton>
        </div>
    )
}

export default InstrumentsChart
