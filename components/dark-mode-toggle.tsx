import {
  Button,
  Label,
  ListBox,
  Popover,
  Select,
  SelectValue,
  Switch,
  ListBoxItem,
} from 'react-aria-components'
import type { ListBoxProps, ListBoxRenderProps } from 'react-aria-components'
import { ChevronDownIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useDarkMode } from '@/hooks/useDarkMode'

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  return (
    <div className="flex flex-row items-center">
      <Switch
        onChange={() => {
          toggleDarkMode()
        }}
        isSelected={isDarkMode}
        className="group flex gap-2 items-center text-black font-semibold text-lg"
      >
        <div className="flex h-[28px] w-[46px] shrink-0 cursor-default rounded-full shadow-inner bg-clip-padding border border-solid border-black p-[3px] box-border transition duration-200 ease-in-out bg-white group-pressed:bg-white group-selected:bg-white group-selected:group-pressed:bg-white outline-none group-focus-visible:ring-2 ring-black">
          <span className="flex flex-row items-center justify-center h-[20px] w-[20px] transform rounded-full bg-white border border-black shadow transition duration-200 ease-in-out translate-x-0 group-selected:translate-x-[100%] group-selected:bg-black">
            {isDarkMode ? (
              <MoonIcon className="text-white" />
            ) : (
              <SunIcon className="text-black" />
            )}
          </span>
        </div>
      </Switch>
    </div>
  )
}

export const DarkModeDropdown = () => {
  return (
    <Select>
      <Label>Favorite Animal</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem>Aardvark</ListBoxItem>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Kangaroo</ListBoxItem>
          <ListBoxItem>Panda</ListBoxItem>
          <ListBoxItem>Snake</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  )
}
