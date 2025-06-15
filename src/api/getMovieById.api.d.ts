import type { ActorsType, FormatType } from "../types/MovieType";
type ResponseData = {
    data: ResponseMovieType;
    status: number;
};
export type ResponseMovieType = {
    id: number;
    title: string;
    year: number;
    format: FormatType;
    actors: ActorsType[];
    createdAt: string;
    updatedAt: string;
};
export declare const getMovieById: (id: number) => Promise<ResponseData>;
export {};
