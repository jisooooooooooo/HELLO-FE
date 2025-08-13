import type { SVGProps } from 'react';
const SvgIcProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    className={props.className}
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M14 0a14 14 0 0 1 14 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0m1.4 15.4h-2.8a8.4 8.4 0 0 0-7.725 5.096A11.19 11.19 0 0 0 14 25.2c3.764 0 7.094-1.857 9.125-4.704A8.4 8.4 0 0 0 15.4 15.4M14 4.2a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIcProfile;
