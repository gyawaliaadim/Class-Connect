import type { Metadata } from "next";
// import {
//   ColorSchemeScript,
//   mantineHtmlProps,
//   MantineProvider,
// } from "@mantine/core";
// import theme from "./theme";
// import "./globals.css";
import { Suspense } from 'react'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Loading from "@/app/(public)/loading";
export const metadata: Metadata = {
  title: "Class Connect",
  description: "Next App Mantine Tailwind Template",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en"
    // // {...mantineHtmlProps}

    // >
    //   <head>
    //     {/* <ColorSchemeScript /> */}
    //   </head>

    <div className=" flex-1 antialiased bg-white dark:bg-black flex flex-col min-h-screen">
      {/* <MantineProvider theme={theme}> */}
      <NavBar className="" />
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
      <Footer />
      {/* </MantineProvider> */}
    </div>
  );
}
