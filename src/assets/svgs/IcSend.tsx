import type { SVGProps } from 'react';
const SvgIcSend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 29 29"
    {...props}
  >
    <g clipPath="url(#ic_send_svg__a)">
      <path
        fill="#007AFF"
        fillRule="evenodd"
        d="m2.885 4.916 1.43 8.225h8.826a1.36 1.36 0 0 1 0 2.718H4.315l-1.43 8.225L25.247 14.5zM1.792 14.5.115 4.86a2.43 2.43 0 0 1 3.353-2.652L27.76 12.62a2.047 2.047 0 0 1 0 3.762L3.468 26.791a2.43 2.43 0 0 1-3.353-2.65z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="ic_send_svg__a">
        <path fill="#fff" d="M0 0h29v29H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcSend;
