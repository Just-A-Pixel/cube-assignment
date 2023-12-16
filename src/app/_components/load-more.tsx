"use client";

import fetchCustomers from "@/actions/fetch-customers";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./Spinner";
import CardList from "./CardList";
import { CustomerData, CustomerPanelData } from "@/types/types";

const LoadMore = ({
    setCustomerDetails,
}: {
    setCustomerDetails: React.Dispatch<React.SetStateAction<CustomerPanelData>>;
}) => {
    const [customers, setCustomers] = useState<CustomerData[]>([]);
    const [page, setPage] = useState(1);

    const { ref, inView } = useInView();

    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    const loadMoreCustomers = async () => {
        await delay(2000); // Rate limit the API
        const nextPage = page + 1;
        const newCustomers = (await fetchCustomers(nextPage)) ?? [];
        setCustomers((prevCustomers) => [...prevCustomers, ...newCustomers]);
        setPage(nextPage);
    };

    useEffect(() => {
        if (inView) {
            loadMoreCustomers();
        }
    }, [inView]);

    return (
        <>
            <CardList
                setCustomerDetails={setCustomerDetails}
                sampleCardData={customers}
            />
            <div
                className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
                ref={ref}
            >
                <Spinner />
            </div>
        </>
    );
};

export default LoadMore;
