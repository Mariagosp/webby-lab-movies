import * as yup from "yup";
export declare const movieSchema: yup.ObjectSchema<{
    title: string;
    releaseYear: number;
    format: NonNullable<"VHS" | "DVD" | "Blu-Ray" | undefined>;
    actors: string[];
}, yup.AnyObject, {
    title: undefined;
    releaseYear: undefined;
    format: undefined;
    actors: "";
}, "">;
