interface IconChevronLeftProps extends React.SVGProps<SVGSVGElement> {
  size: number;
}

export default function IconChevronLeft({
  size,
  ...props
}: IconChevronLeftProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_9986_31007)">
        <path
          d="M12.5 5L7.5 10L12.5 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_9986_31007">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
