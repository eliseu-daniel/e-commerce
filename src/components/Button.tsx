type ButtonProps = {
    text: string;
    tipo: "button" | "submit" | "reset";
    onClick?: () => void;
}

export default function Button({tipo, text, onClick}:ButtonProps){
    return (
        <button type={tipo} onClick={onClick} >
            {text}
        </button>
    )
}