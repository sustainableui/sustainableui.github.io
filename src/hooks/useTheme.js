import {useEffect, useState} from "react";

const themes = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
    { name: 'System', value: 'system' },
]

function useTheme() {
    let [selectedTheme, setSelectedTheme] = useState()

    useEffect(() => {
        if (selectedTheme) {
            document.documentElement.setAttribute('data-theme', selectedTheme.value)
        } else {
            setSelectedTheme(
                themes.find(
                    (theme) =>
                        theme.value === document.documentElement.getAttribute('data-theme')
                )
            )
        }
    }, [selectedTheme])

    useEffect(() => {
        let handler = () =>
            setSelectedTheme(
                themes.find(
                    (theme) => theme.value === (window.localStorage.theme ?? 'system')
                )
            )

        window.addEventListener('storage', handler)

        return () => window.removeEventListener('storage', handler)
    }, [])

    const isDarkMode = selectedTheme?.value === 'dark' || selectedTheme?.value === 'system' && window?.matchMedia("(prefers-color-scheme: dark)").matches

    return {selectedTheme, setSelectedTheme, isDarkMode, themes}
}

export default useTheme