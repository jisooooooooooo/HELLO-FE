import type { SVGProps } from 'react';
const SvgIcLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23.75 13.75H6.25a2.5 2.5 0 0 0-2.5 2.5V25a2.5 2.5 0 0 0 2.5 2.5h17.5a2.5 2.5 0 0 0 2.5-2.5v-8.75a2.5 2.5 0 0 0-2.5-2.5M8.75 13.75v-5a6.25 6.25 0 0 1 12.5 0v5"
    />
  </svg>
);
export default SvgIcLock;
