const SvgEffects1 = () => {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="520"
      height="576"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <g filter="url(#ill2-a)" opacity=".2">
        <path
          fill="url(#ill2-b)"
          fill-rule="evenodd"
          d="m88 88 344 212-166 188L88 88Z"
          clip-rule="evenodd"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="ill2-b"
          x1="242.5"
          x2="242.5"
          y1="88"
          y2="467"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#52525B" stop-opacity=".64"></stop>
          <stop offset="1" stop-color="#52525B" stop-opacity="0"></stop>
        </linearGradient>
        <filter
          id="ill2-a"
          width="520"
          height="576"
          x="0"
          y="0"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_129_124"
            stdDeviation="44"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export default SvgEffects1;
