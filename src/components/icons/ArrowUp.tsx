export const ArrowUp: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 0L0 8H2L7 3L12 8H14L7 0Z" fill="white" />
    </svg>
  );
};
