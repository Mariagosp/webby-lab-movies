import './CreateMovieModal.scss';
import { type FC } from "react";
import type { FormatType } from "../../types/MovieType";
export type NewMovieFormState = {
    title: string;
    releaseYear: number;
    format: FormatType;
    actors: string[];
};
type Props = {
    closeModal: () => void;
};
export declare const CreateMovieModal: FC<Props>;
export {};
