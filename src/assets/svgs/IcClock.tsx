import type { SVGProps } from 'react';
const SvgIcClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.25 3.75 2.5 7.5m25 0-3.75-3.75m-16.25 20L5 26.25m17.5-2.5 2.5 2.5m-10-15v5l2.5 2.5m-2.5 7.5a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
    />
  </svg>
);
export default SvgIcClock;
