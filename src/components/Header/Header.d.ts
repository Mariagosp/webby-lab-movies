import "./Header.scss";
type Props = {
    query: string;
    setQuery: (value: string) => void;
    handleSortClick: (value: "asc" | "desc" | null) => void;
    sortBy: "asc" | "desc" | null;
    onOpenModalClick: () => void;
};
export declare const Header: React.FC<Props>;
export {};
