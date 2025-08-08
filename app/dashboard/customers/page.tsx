import Table from "@/app/ui/customers/table"
import { Metadata } from "next"
import { fetchFilteredCustomers } from "@/app/lib/data"
import { TableRowSkeleton } from "@/app/ui/skeletons"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: 'Customers'
}

export default async function Page({searchParams,}: {searchParams?: {query?: string}}){

    const query = searchParams?.query || ''

    const customers = await fetchFilteredCustomers(query)

    return(
        <Suspense fallback={<TableRowSkeleton/>}>
            <Table customers={customers}/>
        </Suspense>
    ) 
}