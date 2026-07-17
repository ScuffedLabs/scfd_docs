// components/docs/page-cards.tsx

import { source } from "@/lib/source";
import { Cards, Card } from "fumadocs-ui/components/card";

interface PageCardsProps {
    category?: "general" | "free" | "paid";
}

export function PageCards({ category = "general" }: PageCardsProps) {
    const pages = source.getPages();

    const filteredPages = pages
        .filter((page) => {
            const url = page.url;

            if (category === "free") {
                return url.startsWith("/docs/free/") && url.split("/").length === 4;
            }

            if (category === "paid") {
                return url.startsWith("/docs/paid/") && url.split("/").length === 4;
            }

            return (
                url.startsWith("/docs") &&
                !url.startsWith("/docs/free") &&
                !url.startsWith("/docs/paid") &&
                !url.startsWith("/docs/tips/") &&
                url !== "/docs"
            );
        })
        .sort((a, b) =>
            a.data.title.localeCompare(b.data.title),
        );

    return (
        <Cards>
            {filteredPages.map((page) => (
                <Card
                    key={page.url}
                    title={page.data.title}
                    href={page.url}
                >
                    {page.data.description}
                </Card>
            ))}
        </Cards>
    );
}
