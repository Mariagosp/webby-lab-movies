import "./Header.scss";
import { Input } from "../Input/Input";
import { ArrowUp } from "../icons/ArrowUp";
import { ArrowDown } from "../icons/ArrowDown";
import { Close } from "../icons/Close";

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
        {/* <img src="../../assets/plus.svg" alt="" className='plus' /> */}
        <div className="container">
          {sortBy === null ? (
            <ArrowUp onClick={() => handleSortClick(null)} />
          ) : sortBy === "asc" ? (
            <ArrowDown onClick={() => handleSortClick('asc')} />
          ) : (
            <Close color="white" onClick={() => handleSortClick('desc')} />
          )}

          <button className="plus" title="Want to add a movie?" onClick={onOpenModalClick}></button>
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

// const newMovie = {
//   title: query,
//   releaseYear: 2014,
//   format: 'DVD',
//   actores: ['Jennifer Aniston'],
// }
// dispatch(addMovie(newMovie))
