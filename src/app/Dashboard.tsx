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

    return (
        <div className=" flex h-screen">
            <div className="w-2/5 overflow-scroll">
                <CardList
                    setCustomerDetails={setCustomerDetails}
                    sampleCardData={sampleCardData}
                />
                <LoadMore setCustomerDetails={setCustomerDetails} />
            </div>

            <div className=" w-3/5 bg-slate-100 text-black">
                <CustomerDetailsPanel
                    name={customerDetails.name}
                    title={customerDetails.title}
                    address={customerDetails.address}
                />
            </div>
        </div>
    );
};

export default Dashboard;
