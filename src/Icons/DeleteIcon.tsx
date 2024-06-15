export const DeleteIcon = ({
  color = "#000000",
  size = "16",
}: {
  color?: string;
  size?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3.5C2 3.22386 2.22386 3 2.5 3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H2.5C2.22386 4 2 3.77614 2 3.5Z"
        fill={color}
        strokeWidth="1.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 6C6.77614 6 7 6.22386 7 6.5V10.5C7 10.7761 6.77614 11 6.5 11C6.22386 11 6 10.7761 6 10.5V6.5C6 6.22386 6.22386 6 6.5 6Z"
        fill={color}
        strokeWidth="1.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 6C9.77614 6 10 6.22386 10 6.5V10.5C10 10.7761 9.77614 11 9.5 11C9.22386 11 9 10.7761 9 10.5V6.5C9 6.22386 9.22386 6 9.5 6Z"
        fill={color}
        strokeWidth="1.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 3C3.77614 3 4 3.22386 4 3.5V13H12V3.5C12 3.22386 12.2239 3 12.5 3C12.7761 3 13 3.22386 13 3.5V13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14H4C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V3.5C3 3.22386 3.22386 3 3.5 3Z"
        fill={color}
        strokeWidth="1.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.43934 1.43934C5.72065 1.15804 6.10218 1 6.5 1H9.5C9.89783 1 10.2794 1.15804 10.5607 1.43934C10.842 1.72064 11 2.10217 11 2.5V3.5C11 3.77614 10.7761 4 10.5 4C10.2239 4 10 3.77614 10 3.5V2.5C10 2.36739 9.94732 2.24021 9.85355 2.14645C9.75979 2.05268 9.63261 2 9.5 2H6.5C6.36739 2 6.24022 2.05268 6.14645 2.14645C6.05268 2.24021 6 2.36739 6 2.5V3.5C6 3.77614 5.77614 4 5.5 4C5.22386 4 5 3.77614 5 3.5V2.5C5 2.10217 5.15804 1.72064 5.43934 1.43934Z"
        fill={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};