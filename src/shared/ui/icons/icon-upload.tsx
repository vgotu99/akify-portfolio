interface IconUploadProps extends React.SVGProps<SVGSVGElement> {
  size: number;
}

export default function IconUpload({ size, ...props }: IconUploadProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_9986_35020)">
        <path
          d="M4.66675 19.833V22.1663C4.66675 22.7852 4.91258 23.3787 5.35017 23.8163C5.78775 24.2538 6.38124 24.4997 7.00008 24.4997H21.0001C21.6189 24.4997 22.2124 24.2538 22.65 23.8163C23.0876 23.3787 23.3334 22.7852 23.3334 22.1663V19.833"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.16675 10.5003L14.0001 4.66699L19.8334 10.5003"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 4.66699V18.667"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_9986_35020">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
