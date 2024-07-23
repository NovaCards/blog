"use client"; // This is a client component 👈🏽

import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
    ListBoxItem,
    ListBoxItemProps,
} from 'react-aria-components'
import {
    MagnifyingGlassIcon,
    ReaderIcon,
    HomeIcon
} from '@radix-ui/react-icons'

export const Navbar = () => {
    return (
        <nav className="max-w-full w-screen p-4 bg-white dark:bg-black dark:border-white border-b shadow-md border-black dark:shadow-sm dark:shadow-white">
            {/* larger device full nav */}
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <Link href="/" className="flex flex-row items-center">
                        <Image
                            src="/logo.svg"
                            alt="NovaCards logo"
                            width={25}
                            height={25}
                            className="mr-3"
                        />
                        <h2 className="text-2xl font-bold">NovaCards</h2>
                    </Link>
                </div>
                <div className="flex flex-row gap-3 md:gap-10 items-center">
                    <Link
                        className="hover:bg-sky-100 dark:hover:bg-gray-800 dark:bg-opacity-30 px-2 py-1 rounded-md transition-all"
                        href="https://novacards.ai"
                    >
                        <span className="flex flex-row items-center">
                            <HomeIcon
                                className="inline-flex mr-2"
                                width={20}
                                height={20}
                            />
                            <span className='hidden md:inline'>Main Site</span>
                        </span>
                    </Link>
                    <Link
                        className="hover:bg-sky-100 dark:hover:bg-gray-800 dark:bg-opacity-30 px-2 py-1 rounded-md transition-all"
                        href="/"
                    >
                        <span className="flex flex-row items-center">
                            <ReaderIcon
                                className="inline md:inline-flex mr-2"
                                width={20}
                                height={20}
                            />
                            <span className='hidden md:inline'>Blog Home</span>
                        </span>
                    </Link>

                </div>
            </div>
        </nav>

    )
}

function MenuItem(props: ListBoxItemProps) {
    return (
        <ListBoxItem
            {...props}
            className="group flex w-full items-center rounded-md px-3 py-1.5 box-border outline-none cursor-default focus:bg-gray-200 dark:text-white dark:hover:bg-gray-800"
        />
    )
}
