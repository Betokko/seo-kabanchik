"use client";

import {Fragment} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export function Breadcrumbs() {
    const pathname = usePathname();

    // Разделяем путь на сегменты
    const pathSegments = pathname.split("/").filter(Boolean);

    return (
        <Breadcrumb>
            <BreadcrumbList>

            <BreadcrumbItem>
                <BreadcrumbLink asChild >
                    <Link href="/">Home</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>

            {pathSegments.map((segment, index) => {
                const href = "/" + pathSegments.slice(0, index + 1).join("/");
                const isLast = index === pathSegments.length - 1;

                return (
                    <Fragment key={href}>
                        <BreadcrumbItem>
                            {isLast ? (
                                <span>{decodeURIComponent(segment)}</span>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link href={href}>{decodeURIComponent(segment)}</Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {(pathSegments.length - 1 !== index) && <BreadcrumbSeparator/>}
                    </Fragment>
                );
            })}
            </BreadcrumbList>

        </Breadcrumb>
    );
}
