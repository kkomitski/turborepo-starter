import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <>
            <div className="grid gap-6 md:grid-cols-2">
                {[...Array(4)].map((x, i) => (
                    <div
                        key={i}
                        className="flex min-h-[225px] flex-col justify-between rounded-2xl bg-white p-6 drop-shadow-xl"
                    >
                        <div>
                            <Skeleton className="mb-6 h-12 w-12 rounded-full bg-gray-200" />
                            <div className="mb-1 flex justify-between gap-x-12">
                                <Skeleton className="h-5 w-2/3 rounded-full bg-gray-200" />
                                <Skeleton className="h-5 w-1/3 rounded-full bg-gray-200" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
                            <Skeleton className="h-12 w-24 rounded-full bg-gray-200" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
