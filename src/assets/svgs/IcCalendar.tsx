import type { SVGProps } from 'react';
const SvgIcCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g fill="#2C4A83" clipPath="url(#ic_calendar_svg__a)">
      <path d="M18.125 20H1.875A1.87 1.87 0 0 1 0 18.125v-15C0 2.088.838 1.25 1.875 1.25h16.25c1.038 0 1.875.837 1.875 1.875v15A1.87 1.87 0 0 1 18.125 20M1.875 2.5a.62.62 0 0 0-.625.625v15c0 .35.275.625.625.625h16.25c.35 0 .625-.275.625-.625v-15a.62.62 0 0 0-.625-.625z" />
      <path d="M5.625 5A.62.62 0 0 1 5 4.375V.625C5 .275 5.275 0 5.625 0s.625.275.625.625v3.75c0 .35-.275.625-.625.625m8.75 0a.62.62 0 0 1-.625-.625V.625c0-.35.275-.625.625-.625S15 .275 15 .625v3.75c0 .35-.275.625-.625.625m5 2.5H.625A.62.62 0 0 1 0 6.875c0-.35.275-.625.625-.625h18.75c.35 0 .625.275.625.625s-.275.625-.625.625" />
    </g>
    <defs>
      <clipPath id="ic_calendar_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcCalendar;
