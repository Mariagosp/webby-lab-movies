type Props = {
  color?: string;
  onClick?: () => void;
  viewBoxSize?: number;
};

export const Close: React.FC<Props> = ({
  color = "black",
  onClick,
  viewBoxSize = 14,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      fill="none"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.71967 0.46967C1.01256 0.176777 1.48744 0.176777 1.78033 0.46967L7.25002 5.93936L12.7197 0.469719C13.0126 0.176825 13.4874 0.176825 13.7803 0.469718C14.0732 0.762612 14.0732 1.23749 13.7803 1.53038L8.31069 7.00003L13.7803 12.4696C14.0732 12.7625 14.0732 13.2374 13.7803 13.5303C13.4874 13.8232 13.0125 13.8232 12.7196 13.5303L7.25002 8.06069L1.78038 13.5303C1.48749 13.8232 1.01261 13.8232 0.719721 13.5303C0.426828 13.2374 0.426828 12.7626 0.719721 12.4697L6.18936 7.00003L0.71967 1.53033C0.426777 1.23744 0.426777 0.762563 0.71967 0.46967Z"
        fill={color}
      />
    </svg>
  );
};
