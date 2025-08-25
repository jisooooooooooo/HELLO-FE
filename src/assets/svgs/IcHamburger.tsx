import type { SVGProps } from 'react';
const SvgIcHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path stroke="#212525" strokeLinecap="round" strokeWidth={2} d="M1 9h16M1 17h16M1 1h16" />
  </svg>
);
export default SvgIcHamburger;
