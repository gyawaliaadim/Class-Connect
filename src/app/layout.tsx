"use client"
import type { Metadata } from "next";
import {
    ColorSchemeScript,
    mantineHtmlProps,
    MantineProvider,
} from "@mantine/core";
import theme from "./theme";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";


// export const metadata: Metadata = {
//     title: "Class Connect",
//     description: "Next App Mantine Tailwind Template",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en"
            {...mantineHtmlProps}

        >
            <head>
                {/* <ColorSchemeScript
                    defaultColorScheme="auto"
                /> */}
            </head>
            <SessionWrapper>

                <body className="bg-white dark:bg-black">
                    <MantineProvider
                        defaultColorScheme="auto"
                        theme={theme}>

                        <div className="bg-white dark:bg-black">

                            {children}
                        </div>
                    </MantineProvider>

                </body>
            </SessionWrapper>
        </html>
    );
}
