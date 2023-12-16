"use server";
import Dashboard from "./Dashboard";
import fetchCustomers from "@/actions/fetch-customers";

export default async function Home() {
    const sampleCardData = await fetchCustomers(1);
    return <Dashboard sampleCardData={sampleCardData} />;
}
