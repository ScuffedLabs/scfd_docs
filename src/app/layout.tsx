import Script from "next/script";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";

export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="flex min-h-screen flex-col">
                <RootProvider>{children}</RootProvider>

                <Script
                    defer
                    data-domain="docs.scuffedlabs.com"
                    src="https://plausible.scuffedlabs.com/js/script.file-downloads.outbound-links.revenue.js"
                    strategy="afterInteractive"
                />

                <Script id="plausible-init" strategy="afterInteractive">
                    {`
                        window.plausible = window.plausible || function() {
                            (window.plausible.q = window.plausible.q || []).push(arguments);
                        };
                    `}
                </Script>
            </body>
        </html>
    );
}
