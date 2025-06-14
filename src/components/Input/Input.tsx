// import { Close } from "../icons/Close";
import "./Input.scss";
import Close from '../../assets/close.svg?react'
import Search from '../../assets/Search.svg?react'

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
        <Search className="form__icon"/>
        <input
          type="text"
          placeholder="Search"
          className="form__input"
          value={query}
          onChange={(e) => handleSetInput(e.target.value)}
        />
        <div className="form__close" onClick={handleClearQuery}>
          <Close />
        </div>
      </form>
    </>
  );
};
