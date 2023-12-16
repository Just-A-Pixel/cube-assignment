import { CardProps } from "@/types/types";

const Card = ({
    name = "Name Unknown",
    title = "Title Unknown",
    isActive,
    onClick,
}: CardProps) => {
    return (
        <div
            className={` p-6 cursor-pointer border 
                ${isActive ? "bg-selected" : "bg-white"}
            `}
            onClick={onClick}
        >
            <h1>{name}</h1>
            <p className=" text-primary">{title}</p>
        </div>
    );
};

export default Card;
