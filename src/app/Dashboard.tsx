"use client";
import React, { useState } from "react";
import CardList from "./_components/CardList";
import CustomerDetailsPanel from "./_components/CustomerDetailsPanel";
import LoadMore from "./_components/load-more";
import { CustomerData, CustomerPanelData } from "@/types/types";

const Dashboard = ({ sampleCardData }: { sampleCardData: CustomerData[] }) => {
    const [customerDetails, setCustomerDetails] = useState<CustomerPanelData>({
        name: "",
        title: "",
        address: "",
    });
    const [selectedIndex, setSelectedIndex] = useState<string>("");

    return (
        <>
            <h1 className=" text-center my-4">Cube Assignment</h1>
            <div className=" flex h-screen">
                <div className="w-2/5 overflow-scroll">
                    <CardList
                        setCustomerDetails={setCustomerDetails}
                        sampleCardData={sampleCardData}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                    />
                    <LoadMore
                        setCustomerDetails={setCustomerDetails}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                    />
                </div>

                <div className=" w-3/5 bg-slate-100 text-black">
                    <CustomerDetailsPanel
                        name={customerDetails.name}
                        title={customerDetails.title}
                        address={customerDetails.address}
                    />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
