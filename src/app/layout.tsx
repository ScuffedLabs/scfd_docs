import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";

export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script defer data-domain="docs.scuffedlabs.com" src="https://plausible.scuffedlabs.com/js/script.file-downloads.outbound-links.revenue.js"></script>
                <script>window.plausible = window.plausible || function() {(window.plausible.q = window.plausible.q || []).push(arguments)}</script>
            </head>
            <body className="flex flex-col min-h-screen">
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}
