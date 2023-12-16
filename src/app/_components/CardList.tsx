import React, { useState } from "react";
import Card from "./Card";
import { CardListProps, CustomerData } from "@/types/types";

const CardList = ({ setCustomerDetails, sampleCardData }: CardListProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number>();

    const handleClick = (
        index: number,
        data: CustomerData
    ) => {
        setSelectedIndex(index);
        setCustomerDetails(data);
    };

    return (
        <div className=" bg-slate-300">
            {sampleCardData.map((data, index) => (
                <Card
                    name={data.name}
                    title={data.title}
                    isActive={index === selectedIndex}
                    onClick={() => {
                        handleClick(index, data);
                    }}
                    key={data.id}
                />
            ))}
        </div>
    );
};

export default CardList;
