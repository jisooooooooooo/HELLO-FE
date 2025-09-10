import type { SVGProps } from 'react';
const SvgIcSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.333 23.333s2.5 3.334 6.667 3.334 6.667-3.334 6.667-3.334M25 15h.017M15 15h.017m21.65 5c0 9.205-7.462 16.667-16.667 16.667S3.333 29.205 3.333 20 10.795 3.333 20 3.333 36.667 10.795 36.667 20m-10.834-5a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0m-10 0a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0"
    />
  </svg>
);
export default SvgIcSmile;
