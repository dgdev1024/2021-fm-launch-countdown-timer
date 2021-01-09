import * as React from "react";

function SvgPatternHills(props) {
  return (
    <svg width={1440} height={197} {...props}>
      <defs>
        <path id="pattern-hills_svg__a" d="M0 0h1440v197H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="pattern-hills_svg__b" fill="#fff">
          <use xlinkHref="#pattern-hills_svg__a" />
        </mask>
        <g mask="url(#pattern-hills_svg__b)">
          <path
            fill="#211A29"
            d="M1440 50.205L1088.504 0 949.669 50.205 878 25.102 556 0 398.525 50.205l-95.807-25.103-51.328 16.761L45.704 0 0 17.701V160h1440z"
          />
          <path
            fill="#1A1823"
            d="M1394.296 1l94.649 69.336 50.047-49.449zm-257.014 41.576l51.328 27.76 80.6-5.426zM884 1l157.475 83.151 80.929-26.062zM351.496 1l138.835 83.151 49.321-28.526z"
          />
          <path
            fill="#2F2439"
            d="M0 84.151L351.496 1l138.835 83.151L562 42.576 884 1l157.475 83.151 95.807-41.575 51.328 27.76L1394.296 1 1440 30.317V266H0z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgPatternHills;
