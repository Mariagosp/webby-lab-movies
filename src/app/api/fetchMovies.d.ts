export type ResponseMovieType = {
    id: number;
    title: string;
    year: number;
    format: string;
    createdAt: string;
    updatedAt: string;
};
export declare const fetchMovies: import("@reduxjs/toolkit").AsyncThunk<Omit<import("../../types/MovieType").MovieType, "actors">[], {
    search?: string;
    order?: "ASC" | "DESC" | null;
    sort?: string;
    limit?: number;
    offset?: number;
}, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
