import "./Header.scss";
import { Input } from "../Input/Input";
import ArrowUp from '../../assets/arrowUp.svg?react'
import ArrowDown from "../../assets/arrowDown.svg?react";
import Close  from "../../assets/close.svg?react";
import Plus from '../../assets/plus.svg?react'

type Props = {
  query: string;
  setQuery: (value: string) => void;
  handleSortClick: (value: "asc" | "desc" | null) => void;
  sortBy: "asc" | "desc" | null;
  onOpenModalClick: () => void
};

export const Header: React.FC<Props> = ({
  query,
  setQuery,
  handleSortClick,
  sortBy,
  onOpenModalClick
}) => {
  const handleClearQuery = () => {
    setQuery("");
  };

  const handleSetInput = (value: string) => {
    setQuery(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery("");
  };

  return (
    <>
      <header className="header">
        <h2 className="header__title">MoviesList</h2>
        <div className="container">
          {sortBy === null ? (
            <ArrowUp onClick={() => handleSortClick(null)} />
          ) : sortBy === "asc" ? (
            <ArrowDown onClick={() => handleSortClick('asc')} />
          ) : (
            <Close color="white" onClick={() => handleSortClick('desc')} />
          )}

          <Plus onClick={onOpenModalClick} className="header__plus" />
          <Input
            query={query}
            handleSetInput={handleSetInput}
            handleSubmit={handleSubmit}
            handleClearQuery={handleClearQuery}
          />
        </div>
      </header>
    </>
  );
};
