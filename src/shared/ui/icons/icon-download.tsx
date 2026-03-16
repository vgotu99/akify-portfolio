interface IconDownloadProps extends React.SVGProps<SVGSVGElement> {
  size: number;
}

export default function IconDownload({ size, ...props }: IconDownloadProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M3.33301 14.1667V15.8333C3.33301 16.2754 3.5086 16.6993 3.82116 17.0118C4.13372 17.3244 4.55765 17.5 4.99967 17.5H14.9997C15.4417 17.5 15.8656 17.3244 16.1782 17.0118C16.4907 16.6993 16.6663 16.2754 16.6663 15.8333V14.1667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83301 9.16666L9.99967 13.3333L14.1663 9.16666"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 3.33334V13.3333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
