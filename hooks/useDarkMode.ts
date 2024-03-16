import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode))
      return
    }

    // Detect system dark mode setting
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

    // Listener for system changes
    // @ts-ignore
    const updateDarkMode = (e) => {
      setIsDarkMode(e.matches)
    }

    prefersDarkScheme.addEventListener('change', updateDarkMode)

    // Cleanup
    return () => {
      prefersDarkScheme.removeEventListener('change', updateDarkMode)
    }
  }, [isDarkMode])

  useEffect(() => {
    // Apply dark mode class to body
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Save to local storage
  }, [isDarkMode])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode))
  }

  return { isDarkMode, toggleDarkMode }
}
