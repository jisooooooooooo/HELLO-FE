import type { SVGProps } from 'react';
const SvgIcHomeCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 89 89"
    {...props}
  >
    <g clipPath="url(#ic_home_calendar_svg__a)">
      <g filter="url(#ic_home_calendar_svg__b)">
        <path
          fill="#2C4A83"
          d="M79.73 14.833h-9.89v7.417a5.439 5.439 0 0 1-10.878 0v-7.417h-28.8v7.417a5.439 5.439 0 0 1-10.879 0v-7.417H9.394a4.4 4.4 0 0 0-4.45 4.475v55.328a4.4 4.4 0 0 0 4.327 4.475h70.458a4.4 4.4 0 0 0 4.326-4.475V19.308a4.4 4.4 0 0 0-2.647-4.111c-.53-.23-1.1-.354-1.679-.364M24.721 64.278h-4.944v-4.945h4.944zm0-12.361h-4.944v-4.945h4.944zm0-12.361h-4.944V34.61h4.944zm14.834 24.722H34.61v-4.945h4.945zm0-12.361H34.61v-4.945h4.945zm0-12.361H34.61V34.61h4.945zm14.833 24.722h-4.945v-4.945h4.945zm0-12.361h-4.945v-4.945h4.945zm0-12.361h-4.945V34.61h4.945zm14.833 24.722h-4.944v-4.945h4.944zm0-12.361h-4.944v-4.945h4.944zm0-12.361h-4.944V34.61h4.944z"
        />
      </g>
      <path
        fill="#74A6FF"
        d="M24.722 24.722a2.47 2.47 0 0 0 2.472-2.472V7.417a2.472 2.472 0 1 0-4.944 0V22.25a2.47 2.47 0 0 0 2.472 2.472M64.278 24.722a2.47 2.47 0 0 0 2.472-2.472V7.417a2.472 2.472 0 0 0-4.944 0V22.25a2.47 2.47 0 0 0 2.472 2.472"
      />
    </g>
    <defs>
      <clipPath id="ic_home_calendar_svg__a">
        <path fill="#fff" d="M0 0h89v89H0z" />
      </clipPath>
      <filter
        id="ic_home_calendar_svg__b"
        width={87.112}
        height={72.278}
        x={0.944}
        y={14.833}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_334_1471" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_334_1471" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgIcHomeCalendar;
