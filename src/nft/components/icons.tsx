import React from 'react'

import { themeVars } from '../css/sprinkles.css'

// ESLint reports `fill` is missing, whereas it exists on an SVGProps type
type SVGProps = React.SVGProps<SVGSVGElement> & {
  fill?: string
  height?: string | number
  width?: string | number
  gradientId?: string
}

export const VanaIcon = (props: SVGProps) => (
  <svg {...props} viewBox="0 0 218 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="218" height="72" fill="url(#pattern0_393_3)" />
    <defs>
      <pattern id="pattern0_393_3" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_393_3" transform="scale(0.00458716 0.0138889)" />
      </pattern>
      <image
        id="image0_393_3"
        width="218"
        height="72"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)

export const ChevronUpIcon = ({
  secondaryColor,
  secondaryWidth,
  secondaryHeight,
  ...props
}: SVGProps & { secondaryWidth?: string; secondaryHeight?: string; secondaryColor?: string }) => (
  <svg
    width={secondaryWidth || '29'}
    height={secondaryHeight || '28'}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_564_11230)">
      <path
        d="M7.2207 16.0615L13.9092 9.22363C14.1377 8.97754 14.4102 8.86328 14.7178 8.86328C15.0254 8.86328 15.3066 8.98633 15.5352 9.22363L22.2148 16.0615C22.4082 16.2549 22.5137 16.501 22.5137 16.791C22.5137 17.3799 22.0566 17.8369 21.4766 17.8369C21.1953 17.8369 20.9229 17.7314 20.7207 17.5205L14.7266 11.3594L8.71484 17.5205C8.52148 17.7227 8.24902 17.8369 7.95898 17.8369C7.37891 17.8369 6.92188 17.3799 6.92188 16.791C6.92188 16.5098 7.02734 16.2549 7.2207 16.0615Z"
        fill={secondaryColor || themeVars.colors.neutral2}
      />
    </g>
    <defs>
      <clipPath id="clip0_564_11230">
        <rect width="28" height="28" fill="white" transform="translate(0.716797)" />
      </clipPath>
    </defs>
  </svg>
)

export const EllipsisIcon = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10C10.8334 9.53978 10.4603 9.16669 10 9.16669C9.5398 9.16669 9.16671 9.53978 9.16671 10C9.16671 10.4603 9.5398 10.8334 10 10.8334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.8334 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10C16.6667 9.53978 16.2936 9.16669 15.8334 9.16669C15.3731 9.16669 15 9.53978 15 10C15 10.4603 15.3731 10.8334 15.8334 10.8334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16671 10.8334C4.62694 10.8334 5.00004 10.4603 5.00004 10C5.00004 9.53978 4.62694 9.16669 4.16671 9.16669C3.70647 9.16669 3.33337 9.53978 3.33337 10C3.33337 10.4603 3.70647 10.8334 4.16671 10.8334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const DiscordIconMenu = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.0325 6.95914C16.0748 6.51107 15.0508 6.18542 13.9802 6C13.8487 6.23771 13.6951 6.55743 13.5892 6.81177C12.4512 6.64062 11.3236 6.64062 10.2065 6.81177C10.1006 6.55743 9.94354 6.23771 9.81089 6C8.73916 6.18542 7.71399 6.51226 6.7563 6.96152C4.82465 9.8805 4.30101 12.727 4.56283 15.5331C5.844 16.4898 7.08562 17.071 8.30628 17.4513C8.60767 17.0365 8.87646 16.5956 9.10803 16.1309C8.66701 15.9633 8.24461 15.7565 7.84549 15.5164C7.95137 15.438 8.05494 15.356 8.15501 15.2716C10.5894 16.4102 13.2343 16.4102 15.6396 15.2716C15.7408 15.356 15.8444 15.438 15.9491 15.5164C15.5488 15.7577 15.1253 15.9645 14.6842 16.1321C14.9158 16.5956 15.1834 17.0377 15.486 17.4525C16.7078 17.0722 17.9506 16.491 19.2318 15.5331C19.539 12.2801 18.707 9.45977 17.0325 6.95914ZM9.43967 13.8074C8.70891 13.8074 8.10962 13.1251 8.10962 12.2944C8.10962 11.4636 8.69611 10.7802 9.43967 10.7802C10.1833 10.7802 10.7825 11.4624 10.7697 12.2944C10.7709 13.1251 10.1833 13.8074 9.43967 13.8074ZM14.3549 13.8074C13.6242 13.8074 13.0249 13.1251 13.0249 12.2944C13.0249 11.4636 13.6113 10.7802 14.3549 10.7802C15.0985 10.7802 15.6978 11.4624 15.685 12.2944C15.685 13.1251 15.0985 13.8074 14.3549 13.8074Z"
      fill="currentColor"
    />
  </svg>
)

export const TwitterIconMenu = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.955 7.34849C18.4393 7.57725 17.885 7.73179 17.3033 7.80132C17.897 7.44542 18.3531 6.88184 18.5678 6.21026C18.012 6.53989 17.3966 6.77916 16.7415 6.90812C16.217 6.34918 15.4695 6 14.6424 6C13.0542 6 11.7665 7.28758 11.7665 8.87576C11.7665 9.10117 11.7919 9.32068 11.841 9.53116C9.45084 9.41124 7.33181 8.26628 5.91338 6.52636C5.66583 6.95109 5.52397 7.44507 5.52397 7.97213C5.52397 8.96989 6.03168 9.85012 6.80335 10.3658C6.33194 10.3509 5.8885 10.2215 5.50077 10.0061C5.50044 10.0181 5.50044 10.0302 5.50044 10.0423C5.50044 11.4356 6.49176 12.5979 7.80738 12.8623C7.56607 12.928 7.312 12.9631 7.04973 12.9631C6.86442 12.9631 6.6843 12.9451 6.50866 12.9116C6.87465 14.054 7.93669 14.8855 9.19518 14.9086C8.21094 15.68 6.97095 16.1398 5.62352 16.1398C5.39139 16.1398 5.16248 16.1261 4.9375 16.0996C6.21022 16.9156 7.72187 17.3917 9.34594 17.3917C14.6357 17.3917 17.5284 13.0096 17.5284 9.20917C17.5284 9.08449 17.5256 8.9605 17.52 8.83708C18.0819 8.43169 18.5694 7.92524 18.955 7.34849H18.955Z"
      fill="currentColor"
    />
  </svg>
)

export const GithubIconMenu = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.25C8.27062 5.25 5.25 8.34703 5.25 12.1707C5.25 15.2332 7.18219 17.8198 9.86531 18.7368C10.2028 18.7973 10.3294 18.5897 10.3294 18.408C10.3294 18.2437 10.3209 17.6987 10.3209 17.1191C8.625 17.4391 8.18625 16.6952 8.05125 16.3059C7.97531 16.1069 7.64625 15.4927 7.35938 15.3283C7.12312 15.1986 6.78562 14.8785 7.35094 14.8698C7.8825 14.8612 8.26219 15.3716 8.38875 15.5792C8.99625 16.626 9.96656 16.3318 10.3547 16.1502C10.4138 15.7003 10.5909 15.3975 10.785 15.2245C9.28312 15.0515 7.71375 14.4546 7.71375 11.8074C7.71375 11.0548 7.97531 10.4319 8.40563 9.94745C8.33812 9.77443 8.10187 9.06505 8.47312 8.11345C8.47312 8.11345 9.03844 7.93178 10.3294 8.82283C10.8694 8.66711 11.4431 8.58925 12.0169 8.58925C12.5906 8.58925 13.1644 8.66711 13.7044 8.82283C14.9953 7.92313 15.5606 8.11345 15.5606 8.11345C15.9319 9.06505 15.6956 9.77443 15.6281 9.94745C16.0584 10.4319 16.32 11.0461 16.32 11.8074C16.32 14.4632 14.7422 15.0515 13.2403 15.2245C13.485 15.4408 13.6959 15.856 13.6959 16.5048C13.6959 17.4305 13.6875 18.1745 13.6875 18.408C13.6875 18.5897 13.8141 18.806 14.1516 18.7368C16.8178 17.8198 18.75 15.2245 18.75 12.1707C18.75 8.34703 15.7294 5.25 12 5.25Z"
      fill="currentColor"
    />
  </svg>
)

export const CheckMarkIcon = (props: SVGProps) => (
  <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.6693 5.33789L7.5026 14.3175L3.33594 10.2358"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
