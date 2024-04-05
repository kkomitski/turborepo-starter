export type SeriesData = {
    c: number
    h: number
    l: number
    o: number
    t: string
}

export type ShareBasketListing = {
    apiCode: string
    comparisonApiCode: string
    comparisonName: string
    url: string
    name: string
    data?: object
    chartData?: Array<Object>
    mainPricePerValue?: string
    comparisonPricePerValue?: string
}

export type FeedTypes = {
    endpoint: "prices" | "price"
    instrumentCode: string
    period: string
    amount: number
}
