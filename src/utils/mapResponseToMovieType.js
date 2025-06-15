import { iconKeys } from "./emojiIcons";
export const mapResponseToMovieType = (data) => {
    return data.map((movie) => ({
        id: movie.id,
        title: movie.title,
        releaseYear: movie.year,
        format: movie.format,
        icon: iconKeys[Math.floor(Math.random() * iconKeys.length)],
    }));
};
