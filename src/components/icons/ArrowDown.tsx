export const ArrowDown: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M7 8L14 0H12L7 5L2 0H0L7 8Z" fill="white" />
    </svg>
  );
};
