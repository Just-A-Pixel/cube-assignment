import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { CustomerPanelData, ImageData } from "@/types/types";
import Spinner from "./Spinner";

const url = "https://dog.ceo/api/breeds/image/random/9";
const imageUpdateInterval = 10000; //ms

const CustomerDetailsPanel = ({ title, name, address }: CustomerPanelData) => {
    const [imageData, setImageData] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const setIntervalImmediately = (
        func: { (): void; (): void },
        interval: number
    ): NodeJS.Timeout => {
        func();
        return setInterval(func, interval);
    };

    const fetchRandomImage = async () => {
        let response: AxiosResponse<ImageData, any> | null = null;
        setIsLoading(true);
        try {
            response = await axios.get(url);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);

        if (response && response?.data.status === "success")
            setImageData(response.data.message);
    };

    useEffect(() => {
        if (title === "") return;
        const interval = setIntervalImmediately(() => {
            fetchRandomImage();
        }, imageUpdateInterval);

        return () => {
            clearInterval(interval);
        };
    }, [title, name]);

    return (
        <div className=" p-8 md:p-16 flex flex-col ">
            <h1 className="mb-4 text-center"> {name}</h1>
            {title && (
                <p className=" text-primary text-center">
                    {" "}
                    <b>Title: </b>
                    {title}
                </p>
            )}

            {address && (
                <p className="text-primary text-center">
                    <b>Address: </b>
                    {address}
                </p>
            )}
            <div className="grid grid-cols-3 mt-16 mx-auto">
                {imageData.map((data: string, index) => {
                    return (
                        <div
                            key={index}
                            className=" w-[210px] h-[210px] m-6 border relative rounded-lg shadow-lg"
                        >
                            {isLoading ? (
                                <div className=" relative flex justify-center items-center w-full h-full  ">
                                    <Spinner />
                                </div>
                            ) : (
                                <Image
                                    fill={true}
                                    src={data}
                                    alt="Image of a random dog"
                                    className=" object-cover rounded-lg "
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CustomerDetailsPanel;
