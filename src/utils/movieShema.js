import * as yup from "yup";
export const movieSchema = yup.object({
    title: yup.string().required("Enter the film name"),
    releaseYear: yup
        .number()
        .min(1900, "Year must be after 1900")
        .max(new Date().getFullYear(), "Year cannot be in the future")
        .required("Enter release year"),
    format: yup
        .string()
        .oneOf(["VHS", "DVD", "Blu-Ray"], "Choose a valid format")
        .required("Select a format"),
    actors: yup
        .array()
        .of(yup.string().required("Actor cannot be empty"))
        .min(1, "Add at least one actor")
        .required("Add at least one actor"),
});
