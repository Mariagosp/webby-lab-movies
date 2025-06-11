import "./App.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks/hooks";
import { Header } from "./components/Header/Header";
import moviesList from "../public/movies.json";
import { addMovie, addNewMovie, setMovies } from "./app/store/moviesSlice";
import { MovieList } from "./components/MovieList/MovieList";
import Modal from "./components/Modal/Modal";
import { Plus } from "./components/icons/Plus";
import type { MovieType } from "./types/MovieType";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { movieSchema } from "./utils/movieShema";
import type { InferType } from "yup";

const getMovies = () => {
  return moviesList;
};

export type NewMovieFormState = InferType<typeof movieSchema>;
function App() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"asc" | "desc" | null>(null);
  const movies = useAppSelector((state) => state.movies.movies);
  const dispatch = useAppDispatch();

  const filteredMovies = [...movies]
    .filter((movie) => {
      const lowerCaseQuery = query.trim().toLowerCase();

      const titleMatches = movie.title.toLowerCase().includes(lowerCaseQuery);

      const actorsMatch = movie.actors.some((actor) =>
        actor.toLowerCase().includes(lowerCaseQuery)
      );

      return titleMatches || actorsMatch;
    })
    .sort((movie1, movie2) => {
      if (sortBy === "asc") {
        return movie1.title.localeCompare(movie2.title);
      }

      if (sortBy === "desc") {
        return movie2.title.localeCompare(movie1.title);
      }

      return 0;
    });

  useEffect(() => {
    const moviesLists = getMovies();
    dispatch(setMovies(moviesLists));
  }, []);

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // interface NewMovieFormState {
  //   title: string;
  //   releaseYear: number;
  //   format: "VHS" | "DVD" | "Blu-ray" | undefined;
  //   actors: string[];
  // }

  const initialNewMovieFormState: NewMovieFormState = {
    title: "",
    releaseYear: new Date().getFullYear(),
    format: "DVD",
    actors: [],
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<NewMovieFormState>({
    defaultValues: initialNewMovieFormState,
    resolver: yupResolver(movieSchema),
  });

  const onSubmit = (data: NewMovieFormState) => {
    // const newMovie = {
    //   title: data.title,
    //   releaseYear: data.releaseYear,
    //   format: data.format || 'DVD',
    //   actors: data.actors || ['none'],
    // };

    const newMovie = {
      ...data,
      actors: data.actors.filter((a): a is string => typeof a === "string"),
    };
    dispatch(addMovie(newMovie));
    reset();
    closeModal();
  };

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
        <MovieList movies={filteredMovies} />
      </main>

      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p>Here you can add a new film. You just need to fill some inputs</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="modal__info">
              Film name:
              <input
                className="modal__input"
                type="text"
                {...register("title")}
              />
              {errors.title && <p className="error">{errors.title.message}</p>}
            </label>
            <label className="modal__info">
              Release year:
              <input
                className="modal__input"
                type="number"
                {...register("releaseYear")}
              />
              {errors.releaseYear && (
                <p className="error">{errors.releaseYear.message}</p>
              )}
            </label>
            <label className="modal__info">
              Format:
              <select className="modal__select" {...register("format")}>
                <option value="" disabled>
                  Select format
                </option>
                <option value="VHS">VHS</option>
                <option value="DVD">DVD</option>
                <option value="Blu-ray">Blu-ray</option>
              </select>
              {errors.format && (
                <p className="error">{errors.format.message}</p>
              )}
            </label>
            <label>
              Actors (comma separated):
              <Controller
                name="actors"
                control={control}
                render={({ field }) => (
                  <input
                    value={field.value?.join(", ") || ""}
                    onChange={(e) => {
                      const actorsArray = e.target.value
                        .split(",")
                        .map((a) => a.trim())
                        .filter(Boolean);
                      field.onChange(actorsArray);
                    }}
                  />
                )}
              />
              {errors.actors && <p>{errors.actors.message}</p>}
            </label>
            <button type="submit">Submit</button>
            <button onClick={() => reset()}>Clear</button>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default App;
