"use client"; // This is a client component 👈🏽

import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className="h-full border-t border-black w-full dark:border-white dark:text-zinc-200 dark:bg-black">
            <div className="p-4 mx-auto max-w-6xl pb-8">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="Novacards logo"
                            height="30"
                            width="30"
                        />
                        <p className="text-zinc-700 text-sm dark:text-zinc-200">
                            © {new Date().getFullYear()} Novacards
                        </p>
                    </div>
                </div>
                <div className="flex-col flex lg:flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2 mt-3 text-zinc-700 dark:text-zinc-200">
                        <Link href="https://twitter.com/NovacardsAI">
                            <TwitterLogoIcon className="w-5 h-5" />
                        </Link>
                        <Link href="https://github.com/novacards">
                            <GitHubLogoIcon className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.instagram.com/novacards.ai/">
                            <InstagramLogoIcon className="w-5 h-5" />
                        </Link>
                    </div>
                    <div className="flex flex-row items-center gap-5 mt-3 text-zinc-700 text-sm dark:text-zinc-200 underline">
                        <Link href="https://www.buymeacoffee.com/Novacards.ai">
                            Support
                        </Link>
                        <Link href="/privacy">Privacy</Link>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdwg0c3CYOFjFyugummH6sie34hjy7WyygKOvn5ZMPPOT1hdw/viewform">
                            Contact
                        </Link>
                        <Link href="https://blog.novacards.ai">
                            Blog
                        </Link>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
