import type { SVGProps } from 'react';
const SvgIcMike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 24"
    {...props}
  >
    <g clipPath="url(#ic_mike_svg__a)">
      <path
        fill="#fff"
        d="M9 0a4.5 4.5 0 0 0-4.5 4.5V12a4.501 4.501 0 0 0 9 0V4.5C13.5 2.016 11.484 0 9 0M3 10.125C3 9.502 2.498 9 1.875 9S.75 9.502.75 10.125V12a8.25 8.25 0 0 0 7.125 8.175v1.575h-2.25c-.623 0-1.125.502-1.125 1.125S5.002 24 5.625 24h6.75c.623 0 1.125-.502 1.125-1.125s-.502-1.125-1.125-1.125h-2.25v-1.575A8.25 8.25 0 0 0 17.25 12v-1.875c0-.623-.502-1.125-1.125-1.125S15 9.502 15 10.125V12a6 6 0 1 1-12 0z"
      />
    </g>
    <defs>
      <clipPath id="ic_mike_svg__a">
        <path fill="#fff" d="M0 0h18v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcMike;
