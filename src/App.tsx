import "./App.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks/hooks";
import { Header } from "./components/Header/Header";
import { MovieList } from "./components/MovieList/MovieList";
import Modal from "./components/Modal/Modal";
import { Toaster } from "react-hot-toast";
import { fetchMovies } from "./app/api/fetchMovies";
import { CreateMovieModal } from "./components/CreateMovieModal/CreateMovieModal";
import Loader from "./components/Loader/Loader";

function App() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"asc" | "desc" | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const movies = useAppSelector((state) => state.movies.movies);
  const isLoading = useAppSelector((state) => state.movies.isLoading);
  const error = useAppSelector((state) => state.movies.error);
  const dispatch = useAppDispatch();

  const handleSortClick = (value: "asc" | "desc" | null) => {
    if (value === "asc") {
      setSortBy("desc");
      return;
    }
    if (value === "desc") {
      setSortBy(null);
      return;
    }
    if (value === null) {
      setSortBy("asc");
      return;
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    try {
      const order = sortBy
        ? (sortBy.toUpperCase() as "ASC" | "DESC")
        : undefined;

      const sort = order ? "title" : undefined;

      dispatch(fetchMovies({ search: query, order, sort }));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, [query, sortBy]);

  return (
    <>
      <Header
        query={query}
        setQuery={setQuery}
        handleSortClick={handleSortClick}
        sortBy={sortBy}
        onOpenModalClick={openModal}
      />

      <main className="main">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <h3>{error}</h3>
        ) : movies.length === 0 ? (
          <h3 className="main__empty-title">No movies found... Yet :)</h3>
        ) : (
          <MovieList movies={movies} />
        )}
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add a new film">
        <CreateMovieModal closeModal={closeModal} />
      </Modal>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
