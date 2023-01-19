import dynamic from "next/dynamic";

export function Logomark(props) {
    return (
        <svg
            width={36}
            height={25}
            viewBox="0 0 103 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M94.554 45.083s-8.48-2.45-13.913-7.177c-40.236-35-62.26 1.422-62.04 2.088 0 0 5.776.008 10.11 1.944 27.505 12.289 48.327 6.325 48.327 6.325s-24.825 7.605-48.847-3.576c-5.304-2.47-14.354-1.111-22.522 1.873 0 0 2.823 2.272 3.841 3.358 3.599-1.356 7.348-2.092 11.141-1.924 10.98 28.178 37.539 24.65 45.784 21.537 19.473-7.356 28.119-24.448 28.119-24.448z"
                fill="#22C55E"
            />
        </svg>
    )
}

const LogoLight = dynamic(() => import('./LogoLight'))

const LogoDark = dynamic(() => import('./LogoDark'))


export function Logo() {
    const isDarkMode = true
    return isDarkMode ? <LogoLight/> : <LogoDark/>
}
