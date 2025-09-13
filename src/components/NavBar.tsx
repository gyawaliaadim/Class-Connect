"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from 'next-auth/react'
import { useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
interface NavBarProps {
    className?: string;
}

export default function NavBar({ className = "" }: NavBarProps) {
    const { data: session, status } = useSession()
    const [authenticated, setAuthenticated] = useState(false)
    const router = useRouter();
    const pathname = usePathname();

    const { setColorScheme } = useMantineColorScheme();
    const computed = useComputedColorScheme("light", { getInitialValueInEffect: true });

    useEffect(() => {
        if (status == "authenticated") {
            setAuthenticated(true)
        }
        else {
            setAuthenticated(false)
        }
        console.log(computed)
    }, [status])


    const navLinkClasses = (href: string) =>
        `flex items-center justify-center py-2 px-3 rounded-sm transition-colors  font-extrabold
    hover:text-yellow-700 ${pathname === href ? "dark:text-yellow-500 text-yellow-900" : "dark:text-white text-black"
        }`;


    const AuthenticateButton = () => {
        return (
            <button
                onClick={() => authenticated ? signOut() : router.push("/signin")}
                className="transition-colors  duration-300 ease-in-out flex xs:h-12 xs:w-30 h-10 w-20 items-center justify-center rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-center text-[15px] xs:text-[20px] font-bold text-black cursor-pointer"
            >
                {authenticated ?
                    "Sign out"
                    :
                    "Sign in"
                }
            </button>
        )
    }
    const ThemeIcon = () => {

        return (
            <>
                <div className="p-2 rounded-lg bg-gray-300 cursor-pointer  hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-800 transition-colors  duration-300 ease-in-out"
                    onClick={() => setColorScheme(computed === "light" ? "dark" : "light")}>
                    {computed === "light" ?
                        <Image

                            src={`/assets/light_theme.svg`}
                            alt="Theme toggle icon"
                            height={30}
                            width={30}
                        />
                        :
                        <Image
                            src={`/assets/dark_theme.svg`}
                            alt="Theme toggle icon"
                            height={30}
                            width={30}
                        />
                    }
                </div>
            </>
        )
    }
    return (
        <nav
            className={`sticky top-0 z-50 flex w-full justify-around text-black dark:text-white bg-white dark:bg-black p-2 xs:p-5 shadow-2xl dark:shadow-2xl shadow-yellow-200 dark:shadow-gray-700 ${className}`}
        >
            {/* Logo */}
            <div>
                <Image
                    src="/assets/logo.svg"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                />
            </div>

            {/* Navigation Links */}
            <ul className="flex w-[200px] justify-around">
                <li>
                    <Link
                        href="/"
                        className={navLinkClasses("/")}
                        aria-current={pathname === "/" ? "page" : undefined}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className={navLinkClasses("/about")}
                        aria-current={pathname === "/about" ? "page" : undefined}

                    >
                        About
                    </Link>
                </li>
            </ul>

            {/* Actions */}
            <div className="flex items-center justify-center gap-1 xs:gap-5">

                <AuthenticateButton />

                <ThemeIcon />


            </div>
        </nav>
    );
}
