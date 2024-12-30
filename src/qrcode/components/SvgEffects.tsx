const SvgEffects = () => {
  return (
      <svg
        className="pointer-events-none absolute left-1/2 -z-10 -translate-x-full"
        xmlns="http://www.w3.org/2000/svg"
        width="472"
        height="422"
        fill="none"
        aria-hidden="true"
        role="presentation"
      >
        <g filter="url(#illf-a)" opacity=".32">
          <path
            fill="url(#ill-b)"
            fillRule="evenodd"
            d="m64-42 344 212-166 188L64-42Z"
            clipRule="evenodd"
          ></path>
        </g>
        <g filter="url(#illf-c)" opacity=".32">
          <path
            fill="url(#ill-d)"
            fillRule="evenodd"
            d="m64-42 344 212-200-67L64-42Z"
            clipRule="evenodd"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="ill-b"
            x1="218.5"
            x2="218.5"
            y1="-42"
            y2="337"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#52525B" stopOpacity=".64"></stop>
            <stop offset="1" stopColor="#52525B" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="ill-d"
            x1="218.5"
            x2="218.5"
            y1="-42"
            y2="337"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#52525B" stopOpacity=".64"></stop>
            <stop offset="1" stopColor="#52525B" stopOpacity="0"></stop>
          </linearGradient>
          <filter
            id="illf-a"
            width="472"
            height="528"
            x="0"
            y="-106"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_115_9"
              stdDeviation="32"
            ></feGaussianBlur>
          </filter>
          <filter
            id="illf-c"
            width="472"
            height="340"
            x="0"
            y="-106"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_115_9"
              stdDeviation="32"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
  );
};

export default SvgEffects;
