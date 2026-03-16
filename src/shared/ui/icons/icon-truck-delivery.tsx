interface IconTruckDeliveryProps extends React.SVGProps<SVGSVGElement> {
  size: number;
}

export default function IconTruckDelivery({
  size,
  ...props
}: IconTruckDeliveryProps) {
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
        d="M4.16675 14.1667C4.16675 14.6087 4.34234 15.0326 4.6549 15.3452C4.96746 15.6577 5.39139 15.8333 5.83341 15.8333C6.27544 15.8333 6.69937 15.6577 7.01193 15.3452C7.32449 15.0326 7.50008 14.6087 7.50008 14.1667C7.50008 13.7246 7.32449 13.3007 7.01193 12.9882C6.69937 12.6756 6.27544 12.5 5.83341 12.5C5.39139 12.5 4.96746 12.6756 4.6549 12.9882C4.34234 13.3007 4.16675 13.7246 4.16675 14.1667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 14.1667C12.5 14.6087 12.6756 15.0326 12.9882 15.3452C13.3007 15.6577 13.7246 15.8333 14.1667 15.8333C14.6087 15.8333 15.0326 15.6577 15.3452 15.3452C15.6577 15.0326 15.8333 14.6087 15.8333 14.1667C15.8333 13.7246 15.6577 13.3007 15.3452 12.9882C15.0326 12.6756 14.6087 12.5 14.1667 12.5C13.7246 12.5 13.3007 12.6756 12.9882 12.9882C12.6756 13.3007 12.5 13.7246 12.5 14.1667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16675 14.167H2.50008V10.8337M1.66675 4.16699H10.8334V14.167M7.50008 14.167H12.5001M15.8334 14.167H17.5001V9.16699M17.5001 9.16699H10.8334M17.5001 9.16699L15.0001 5.00033H10.8334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.5H5.83333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
