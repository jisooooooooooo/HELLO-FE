import type { SVGProps } from 'react';
const SvgIcPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fill="#fff"
      d="M13 8H8v5a1 1 0 1 1-2 0V8H1a1 1 0 0 1 0-2h5V1a1 1 0 0 1 2 0v5h5a1 1 0 1 1 0 2"
    />
  </svg>
);
export default SvgIcPlus;
