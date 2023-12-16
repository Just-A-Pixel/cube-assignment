"use server";
import { CustomerData } from "@/types/types.js";
import sampleCardData from "./sampleCardData.js";

const fetchCustomers = async (page: number): Promise<CustomerData[]> => {
    const endIndex = page * 10%sampleCardData.length;
    const startIndex = Math.max(endIndex - 10, 0);
    const result = sampleCardData.slice(startIndex, endIndex);

    return result;
};

export default fetchCustomers;
