interface IconExchangeProps extends React.SVGProps<SVGSVGElement> {
  size: number;
}

export default function IconExchange({ size, ...props }: IconExchangeProps) {
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
        d="M2.5 14.9997C2.5 15.4417 2.67559 15.8656 2.98816 16.1782C3.30072 16.4907 3.72464 16.6663 4.16667 16.6663C4.60869 16.6663 5.03262 16.4907 5.34518 16.1782C5.65774 15.8656 5.83333 15.4417 5.83333 14.9997C5.83333 14.5576 5.65774 14.1337 5.34518 13.8212C5.03262 13.5086 4.60869 13.333 4.16667 13.333C3.72464 13.333 3.30072 13.5086 2.98816 13.8212C2.67559 14.1337 2.5 14.5576 2.5 14.9997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1667 4.99967C14.1667 5.4417 14.3423 5.86563 14.6549 6.17819C14.9675 6.49075 15.3914 6.66634 15.8334 6.66634C16.2754 6.66634 16.6994 6.49075 17.0119 6.17819C17.3245 5.86563 17.5001 5.4417 17.5001 4.99967C17.5001 4.55765 17.3245 4.13372 17.0119 3.82116C16.6994 3.5086 16.2754 3.33301 15.8334 3.33301C15.3914 3.33301 14.9675 3.5086 14.6549 3.82116C14.3423 4.13372 14.1667 4.55765 14.1667 4.99967Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8334 6.66699V10.8337C15.8334 11.9387 15.3944 12.9985 14.613 13.7799C13.8316 14.5613 12.7718 15.0003 11.6667 15.0003H9.16675M9.16675 15.0003L11.6667 12.5003M9.16675 15.0003L11.6667 17.5003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16675 13.3333V9.16667C4.16675 8.0616 4.60573 7.00179 5.38714 6.22039C6.16854 5.43899 7.22835 5 8.33341 5H10.8334M10.8334 5L8.33341 2.5M10.8334 5L8.33341 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
