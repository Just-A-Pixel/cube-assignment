import React, { useState } from "react";
import Card from "./Card";
import { CardListProps, CustomerData } from "@/types/types";

const CardList = ({ setCustomerDetails, sampleCardData, setSelectedIndex, selectedIndex }: CardListProps) => {

    const handleClick = (data: CustomerData) => {
        setSelectedIndex(data.id);
        setCustomerDetails(data);
        console.log();
    };

    return (
        <div className=" bg-slate-300">
            {sampleCardData.map((data) => (
                <Card
                    name={data.name}
                    title={data.title}
                    isActive={data.id === selectedIndex}
                    onClick={() => {
                        handleClick(data);
                    }}
                    key={data.id}
                />
            ))}
        </div>
    );
};

export default CardList;
