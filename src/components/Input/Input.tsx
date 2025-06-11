import { Close } from "../icons/Close";
import "./Input.scss";

type Props = {
  query: string;
  handleSetInput: (value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClearQuery: () => void;
};

export const Input: React.FC<Props> = ({
  query,
  handleSetInput,
  handleSubmit,
  handleClearQuery,
}) => {
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="icon"></div>
        <input
          type="text"
          placeholder="Search"
          className="input"
          value={query}
          onChange={(e) => handleSetInput(e.target.value)}
        />
        <div className="close" onClick={handleClearQuery}>
          <Close viewBoxSize={19} />
        </div>
      </form>
    </>
  );
};
