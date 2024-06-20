"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"


export default function GeneralBreadcrumb({ list }: any) {
    const pathName = usePathname()
    const router = useRouter()
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {list.map((path: string, idx: number) => (
                    <div key={idx}>
                        <BreadcrumbItem >
                            <Button onClick={() => router.push(`/${path}`)}>{path}</Button>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </div>
                ))}

            </BreadcrumbList>
        </Breadcrumb>
    )
}
