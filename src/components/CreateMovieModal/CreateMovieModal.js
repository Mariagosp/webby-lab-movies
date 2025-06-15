import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './CreateMovieModal.scss';
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { movieSchema } from "../../utils/movieShema";
import { useAppDispatch } from "../../app/hooks/hooks";
import toast from "react-hot-toast";
import { createMovie } from "../../app/api/createMovie";
import { importMovie } from "../../api/importMovie.api";
import { fetchMovies } from '../../app/api/fetchMovies';
export const CreateMovieModal = ({ closeModal }) => {
    const dispatch = useAppDispatch();
    const [file, setFile] = useState(null);
    const initialNewMovieFormState = {
        title: "",
        releaseYear: new Date().getFullYear(),
        format: undefined,
        actors: [""],
    };
    const { register, handleSubmit, control, reset, formState: { errors }, getValues, setValue, } = useForm({
        defaultValues: initialNewMovieFormState,
        resolver: yupResolver(movieSchema),
    });
    const watchedActors = useWatch({ control, name: "actors" });
    const appendActor = () => {
        const current = getValues("actors");
        setValue("actors", [...current, ""]);
    };
    const removeActor = (indexToRemove) => {
        const current = getValues("actors");
        setValue("actors", current.filter((_, i) => i !== indexToRemove));
    };
    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file)
            return;
        const formData = new FormData();
        formData.append("movies", file);
        try {
            await importMovie(formData);
            closeModal();
            dispatch(fetchMovies({}));
            toast.success("Movie imported!");
        }
        catch (error) {
            toast.error(`Error while importing movie, ${error}`);
        }
    };
    const onSubmit = async (data) => {
        try {
            const dataToSend = {
                title: data.title,
                year: data.releaseYear,
                format: data.format,
                actors: data.actors,
            };
            await dispatch(createMovie(dataToSend)).unwrap();
            reset();
            closeModal();
            toast.success("Movie created!");
        }
        catch (err) {
            toast.error(`Error while creating a movie
        Please make sure you entered everything correctly`);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("p", { className: "modal__description", children: "Fill out the form below to add a new movie to your collection:" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "modal__form", children: [_jsxs("label", { className: "modal__form--label", children: ["Film Name", _jsx("input", { className: "modal__form--input", type: "text", placeholder: "e.g. The Matrix", ...register("title") }), errors.title && (_jsx("p", { className: "modal__form--error", children: errors.title.message }))] }), _jsxs("label", { className: "modal__form--label", children: ["Release Year", _jsx("input", { className: "modal__form--input", type: "number", placeholder: "e.g. 1999", ...register("releaseYear") }), errors.releaseYear && (_jsx("p", { className: "modal__form--error", children: errors.releaseYear.message }))] }), _jsxs("label", { className: "modal__form--label", children: ["Format", _jsxs("select", { className: "modal__form--select", ...register("format"), children: [_jsx("option", { value: "", disabled: true, selected: true, children: "Select format" }), _jsx("option", { value: "VHS", children: "\uD83D\uDCFC VHS" }), _jsx("option", { value: "DVD", children: "\uD83D\uDCBF DVD" }), _jsx("option", { value: "Blu-Ray", children: "\uD83D\uDD37 Blu-Ray" })] }), errors.format && (_jsx("p", { className: "modal__form--error", children: errors.format.message }))] }), _jsxs("label", { className: "modal__form--label", children: ["Actors", _jsxs("div", { className: "actors-inputs", children: [watchedActors.map((_, index) => (_jsxs("div", { className: "modal__actors-input", children: [_jsx("input", { className: "modal__form--input actor__input", placeholder: "e.g. Johnny Depp", type: "text", value: watchedActors[index], onChange: (e) => setValue(`actors.${index}`, e.target.value) }), watchedActors.length > 1 && (_jsx("button", { type: "button", onClick: () => removeActor(index), className: "modal__remove-actor", children: "\uD83D\uDDD1\uFE0F" }))] }, index))), _jsx("button", { className: "modal__add-actor", type: "button", onClick: appendActor, disabled: watchedActors.some((actor) => actor.trim() === ""), children: "+ Add Actor" })] })] }), _jsxs("div", { className: "modal__buttons", children: [_jsx("button", { type: "submit", className: "modal__submit", disabled: !watchedActors.some((actor) => actor.trim()) ||
                                    !!errors.title ||
                                    !!errors.releaseYear ||
                                    !!errors.format, children: "\u2795 Add Movie" }), _jsx("button", { type: "button", onClick: () => {
                                    reset();
                                    closeModal();
                                }, className: "modal__clear", children: "\uD83E\uDDF9 Clear" })] })] }), _jsx("h4", { className: "modal__subtitle", children: "Or" }), _jsxs("form", { onSubmit: handleUpload, className: "import__wrapper", children: [_jsx("input", { type: "file", accept: ".txt", onChange: (e) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setFile(e.target.files[0]);
                            }
                        } }), _jsx("button", { disabled: file === null, type: "submit", className: "modal__submit import__button", children: "Import movies" })] })] }));
};
