import type { SVGProps } from 'react';
const SvgIcBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#000"
      d="m3.4 8.575 4.9 4.9q.3.3.287.7-.012.4-.313.7-.3.275-.7.288a.91.91 0 0 1-.7-.288l-6.6-6.6a.9.9 0 0 1-.213-.325 1.167 1.167 0 0 1 .002-.75.86.86 0 0 1 .212-.325l6.6-6.6A.93.93 0 0 1 7.563 0q.413 0 .712.275.3.3.3.713a.97.97 0 0 1-.3.712L3.4 6.575h11.175q.425 0 .713.288.288.289.287.712 0 .424-.288.713a.96.96 0 0 1-.712.287z"
    />
  </svg>
);
export default SvgIcBack;
