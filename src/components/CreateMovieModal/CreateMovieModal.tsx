import './CreateMovieModal.scss';
import { useState, type FC } from "react";
import type { FormatType } from "../../types/MovieType";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { movieSchema } from "../../utils/movieShema";
import { useAppDispatch } from "../../app/hooks/hooks";
import toast from "react-hot-toast";
import { createMovie } from "../../app/api/createMovie";
import { importMovie } from "../../api/importMovie.api";
import { fetchMovies } from '../../app/api/fetchMovies';

export type NewMovieFormState = {
  title: string;
  releaseYear: number;
  format: FormatType;
  actors: string[];
};

type Props = {
  closeModal: () => void;
};

export const CreateMovieModal: FC<Props> = ({ closeModal }) => {
  const dispatch = useAppDispatch();

  const [file, setFile] = useState<File | null>(null);

  const initialNewMovieFormState: NewMovieFormState = {
    title: "",
    releaseYear: new Date().getFullYear(),
    format: undefined as unknown as FormatType,
    actors: [""],
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<NewMovieFormState>({
    defaultValues: initialNewMovieFormState,
    resolver: yupResolver(movieSchema),
  });

  const watchedActors = useWatch({ control, name: "actors" });

  const appendActor = () => {
    const current = getValues("actors");
    setValue("actors", [...current, ""]);
  };

  const removeActor = (indexToRemove: number) => {
    const current = getValues("actors");
    setValue(
      "actors",
      current.filter((_, i) => i !== indexToRemove)
    );
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("movies", file);

    try {
      await importMovie(formData);
      closeModal();
      dispatch(fetchMovies({}));

      toast.success("Movie imported!");
    } catch (error) {
      toast.error(`Error while importing movie, ${error}`);
    }
  };

  const onSubmit: SubmitHandler<NewMovieFormState> = async (
    data: NewMovieFormState
  ) => {
    try {
      const dataToSend = {
        title: data.title,
        year: data.releaseYear,
        format: data.format,
        actors: data.actors,
      };

      console.log("dataToSend", dataToSend);

      await dispatch(createMovie(dataToSend)).unwrap();

      reset();
      closeModal();

      toast.success("Movie created!");
    } catch (err) {
      toast.error(`Error while creating a movie
        Please make sure you entered everything correctly`);
      closeModal()
    }
  };

  return (
    <>
      <p className="modal__description">
        Fill out the form below to add a new movie to your collection:
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="modal__form">
        <label className="modal__form--label">
          Film Name
          <input
            className="modal__form--input"
            type="text"
            placeholder="e.g. The Matrix"
            {...register("title")}
          />
          {errors.title && (
            <p className="modal__form--error">{errors.title.message}</p>
          )}
        </label>

        <label className="modal__form--label">
          Release Year
          <input
            className="modal__form--input"
            type="number"
            placeholder="e.g. 1999"
            {...register("releaseYear")}
          />
          {errors.releaseYear && (
            <p className="modal__form--error">{errors.releaseYear.message}</p>
          )}
        </label>

        <label className="modal__form--label">
          Format
          <select className="modal__form--select" {...register("format")}>
            <option value="" disabled selected>
              Select format
            </option>
            <option value="VHS">📼 VHS</option>
            <option value="DVD">💿 DVD</option>
            <option value="Blu-Ray">🔷 Blu-Ray</option>
          </select>
          {errors.format && (
            <p className="modal__form--error">{errors.format.message}</p>
          )}
        </label>

        <label className="modal__form--label">
          Actors
          <div className="actors-inputs">
            {watchedActors.map((_, index) => (
              <div key={index} className="modal__actors-input">
                <input
                  className="modal__form--input actor__input"
                  placeholder="e.g. Johnny Depp"
                  type="text"
                  value={watchedActors[index]}
                  onChange={(e) => setValue(`actors.${index}`, e.target.value)}
                />
                {watchedActors.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeActor(index)}
                    className="modal__remove-actor"
                  >
                    🗑️
                  </button>
                )}
              </div>
            ))}
            <button
              className="modal__add-actor"
              type="button"
              onClick={appendActor}
              disabled={watchedActors.some((actor) => actor.trim() === "")}
            >
              + Add Actor
            </button>
          </div>
        </label>

        <div className="modal__buttons">
          <button
            type="submit"
            className="modal__submit"
            disabled={
              !watchedActors.some((actor) => actor.trim()) ||
              !!errors.title ||
              !!errors.releaseYear ||
              !!errors.format
            }
          >
            ➕ Add Movie
          </button>
          <button
            type="button"
            onClick={() => {
              reset();
              closeModal();
            }}
            className="modal__clear"
          >
            🧹 Clear
          </button>
        </div>
      </form>
      <h4 className="modal__subtitle">Or</h4>
      <form onSubmit={handleUpload} className="import__wrapper">
        <input
          type="file"
          accept=".txt"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <button
          disabled={file === null}
          type="submit"
          className="modal__submit import__button"
        >
          Import movies
        </button>
      </form>
    </>
  );
};
