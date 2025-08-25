import type { SVGProps } from 'react';
const SvgIcUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 26.25v-2.5a5 5 0 0 0-5-5H10a5 5 0 0 0-5 5v2.5M15 13.75a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
    />
  </svg>
);
export default SvgIcUser;
