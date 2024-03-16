import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Button,
  ListBoxItem,
  Menu,
  MenuTrigger,
  Popover,
  Separator,
  ListBoxItemProps,
} from 'react-aria-components'
import {
  MagnifyingGlassIcon,
  LightningBoltIcon,
  HamburgerMenuIcon,
  CaretDownIcon,
  StarFilledIcon,
  GearIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons'
import { DarkModeDropdown, DarkModeToggle } from './dark-mode-toggle'
import { useUserData } from '@/hooks/queries/useUserData'

export const Navbar = () => {
  return (
    <nav className="w-screen p-4 bg-white dark:bg-black dark:border-white border-b-2 shadow-md border-black dark:shadow-sm dark:shadow-white">
      {/* larger device full nav */}
      <div className="hidden md:flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Link href="/" className="flex flex-row items-center">
            <Image
              src="/logo.svg"
              alt="NovaCards logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <h2 className="text-2xl font-bold">NOVACARDS</h2>
          </Link>
        </div>
        <div className="flex flex-row gap-10 items-center">
          <Link
            className="hover:bg-sky-100 dark:bg-opacity-30 px-2 py-1 rounded-md transition-all"
            href="/card-finder"
          >
            <MagnifyingGlassIcon
              className="inline-flex mr-2"
              width={20}
              height={20}
            />
            Card finder
          </Link>
          <Link
            className="hover:bg-sky-100 dark:bg-opacity-30 px-2 py-1 rounded-md transition-all flex flex-row items-center"
            href="/card-maker"
          >
            <Image
              src="/ai_sparkle.svg"
              alt="AI sparkle iccon"
              width={20}
              height={20}
              className="inline-flex mr-2"
            />
            Card maker
          </Link>
          <Link
            className="hover:bg-sky-100 dark:bg-opacity-30 px-2 py-1 rounded-md transition-all inline-flex items-center hover:animate-pulse"
            href="/premium"
          >
            <StarFilledIcon
              className="inline-flex mr-2  text-amber-500"
              width={20}
              height={20}
            />
            <span className="text-amber-500">Premium</span>
          </Link>
          <Link
            className="hover:bg-sky-100 dark:bg-opacity-30 px-2 py-1 rounded-md transition-all"
            href="/about-us"
          >
            About us
          </Link>
        </div>
        <div className="flex flex-row items-center">
          {user ? (
            <MenuTrigger>
              <Button
                aria-label="Menu"
                className="inline-flex items-center mr-5"
              >
                <Image
                  src={userData?.data.avatar_url || '/blank-avatar.png'}
                  alt="user avatar"
                  width="40"
                  height="40"
                  className="rounded-full border border-black"
                />
              </Button>
              <Popover className="p-1 w-56 overflow-auto border-2 border-black rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 entering:animate-in entering:fade-in entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95 fill-mode-forwards origin-top-left dark:bg-black dark:border-white dark:text-white">
                {userData && (
                  <Fragment>
                    <div className="ml-3 my-2">
                      <p className="font-semibold">{userData.data.full_name}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {userData.data.email}
                      </p>
                    </div>
                    <Separator className="bg-gray-300 h-[1px] mx-3 my-1" />
                  </Fragment>
                )}
                <Menu className="outline-none">
                  <MenuItem id="profile">
                    <Link
                      href="/profile"
                      className="w-full flex flex-row items-center justify-between"
                    >
                      Settings
                      <GearIcon className="h-4 w-4" />
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <div className="w-full flex flex-row items-center justify-between">
                      <span>Theme</span>
                      <DarkModeToggle />
                    </div>
                  </MenuItem>
                  <Separator className="bg-gray-300 h-[1px] mx-3 my-1" />
                  <MenuItem id="support">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdwg0c3CYOFjFyugummH6sie34hjy7WyygKOvn5ZMPPOT1hdw/viewform"
                      className="w-full flex flex-row items-center justify-between"
                    >
                      Support
                      <InfoCircledIcon className="h-4 w-4" />
                    </Link>
                  </MenuItem>
                  <Separator className="bg-gray-300 h-[1px] mx-3 my-1" />
                  <MenuItem id="logout">
                    <span
                      onClick={() => signOut()}
                      className="text-rose-700 w-full cursor-pointer"
                    >
                      Log out
                    </span>
                  </MenuItem>
                </Menu>
              </Popover>
            </MenuTrigger>
          ) : (
            <Link className="btn btn-sm btn-primary" href="/login">
              <span>Log in</span>
            </Link>
          )}
        </div>
      </div>
      {/* smaller device nav */}
      <div className="flex flex-row items-center justify-between md:hidden">
        <Link href="/" className="flex flex-row items-center">
          <Image
            src="/logo.svg"
            alt="NovaCards logo"
            width={40}
            height={40}
            className="mr-3"
          />
        </Link>
        <div className="flex flex-row items-center">
          <MenuTrigger>
            <Button
              aria-label="Menu"
              className="inline-flex items-center justify-center rounded-md bg-opacity-20 bg-clip-padding border-2 border-black dark:border-white px-3 py-2 text-white hover:bg-opacity-30 transition-colors cursor-default outline-none focus-visible:ring-2 focus-visible:ring-white/75 hover:bg-gray-200 mr-2"
            >
              <HamburgerMenuIcon className="text-black dark:text-white" />
            </Button>
            <Popover className="p-1 w-56 overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 entering:animate-in entering:fade-in entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95 fill-mode-forwards origin-top-left border-2 border-black">
              <Menu className="outline-none">
                <MenuItem id="card-finder">
                  <Link className="w-full" href="/card-finder">
                    Card finder <MagnifyingGlassIcon className="inline-flex" />
                  </Link>
                </MenuItem>
                <MenuItem id="card-maker">
                  <Link className="w-full" href="/card-maker">
                    Card maker <LightningBoltIcon className="inline-flex" />
                  </Link>
                </MenuItem>
                <MenuItem id="premium">
                  <Link className="w-full" href="/premium">
                    Premium <StarFilledIcon className="inline-flex" />
                  </Link>
                </MenuItem>
                <MenuItem id="about-us">
                  <Link className="w-full" href="/about-us">
                    About us
                  </Link>
                </MenuItem>
                <Separator className="bg-gray-300 h-[1px] mx-3 my-1" />
                {!user ? (
                  <MenuItem id="log-in">
                    <Link href="/login" className="w-full">
                      Log in
                    </Link>
                  </MenuItem>
                ) : (
                  <Fragment>
                    <MenuItem id="profile">
                      <Link
                        href="/profile"
                        className="w-full inline-flex items-center"
                      >
                        <Image
                          src={
                            user.user_metadata?.avatar_url ||
                            '/blank-avatar.png'
                          }
                          alt="user avatar"
                          width="30"
                          height="30"
                          className="rounded-full mr-2"
                        />
                        Profile
                      </Link>
                    </MenuItem>
                    <Separator className="bg-gray-300 h-[1px] mx-3 my-1" />
                    <MenuItem id="log-out">
                      <span
                        onClick={() => signOut()}
                        className="text-danger w-full cursor-pointer"
                      >
                        Log out
                      </span>
                    </MenuItem>
                  </Fragment>
                )}
              </Menu>
            </Popover>
          </MenuTrigger>
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
