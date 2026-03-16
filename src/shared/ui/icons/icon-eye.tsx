interface IconEyeProps extends React.SVGProps<SVGSVGElement> {
  size: number;
}

export default function IconEye({ size, ...props }: IconEyeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_9986_7308)">
        <path
          d="M6.66675 7.99984C6.66675 8.35346 6.80722 8.6926 7.05727 8.94265C7.30732 9.19269 7.64646 9.33317 8.00008 9.33317C8.3537 9.33317 8.69284 9.19269 8.94289 8.94265C9.19294 8.6926 9.33341 8.35346 9.33341 7.99984C9.33341 7.64622 9.19294 7.30708 8.94289 7.05703C8.69284 6.80698 8.3537 6.6665 8.00008 6.6665C7.64646 6.6665 7.30732 6.80698 7.05727 7.05703C6.80722 7.30708 6.66675 7.64622 6.66675 7.99984Z"
          stroke="currentColor"
          strokeWidth="1.33"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8C12.4 10.6667 10.4 12 8 12C5.6 12 3.6 10.6667 2 8C3.6 5.33333 5.6 4 8 4C10.4 4 12.4 5.33333 14 8Z"
          stroke="currentColor"
          strokeWidth="1.33"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_9986_7308">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
