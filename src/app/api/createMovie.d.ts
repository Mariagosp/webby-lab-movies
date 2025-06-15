import type { MovieWithDetails } from "../../types/MovieType";
type CreateMoviePayload = {
    title: string;
    year: number;
    format: "VHS" | "DVD" | "Blu-Ray";
    actors: string[];
};
export declare const createMovie: import("@reduxjs/toolkit").AsyncThunk<MovieWithDetails, CreateMoviePayload, {
    rejectValue: string;
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export {};
