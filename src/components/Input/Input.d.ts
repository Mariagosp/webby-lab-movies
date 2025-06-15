import "./Input.scss";
type Props = {
    query: string;
    handleSetInput: (value: string) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleClearQuery: () => void;
};
export declare const Input: React.FC<Props>;
export {};
