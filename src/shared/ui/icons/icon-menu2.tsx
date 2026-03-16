interface IconMenu2Props extends React.SVGProps<SVGSVGElement> {
  size: number;
}
export default function IconMenu2({ size, ...props }: IconMenu2Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_9986_31077)">
        <path
          d="M3.33331 5H16.6666"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33331 10H16.6666"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33331 15H16.6666"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_9986_31077">
          <rect width={size} height={size} fill="transparent" />
        </clipPath>
      </defs>
    </svg>
  );
}
