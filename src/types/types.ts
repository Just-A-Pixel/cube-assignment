export interface CustomerData {
    id: string;
    name: string;
    title: string;
    address: string;
    createdAt: string;
    updatedAt: string;
}
export interface CardProps {
    title: string;
    name: string;
    isActive: boolean;
    onClick: () => void;
}

export interface CardListProps {
    setCustomerDetails: (data: CustomerPanelData) => void;
    sampleCardData: CustomerData[];
}

export interface CustomerPanelData {
    name: string;
    title: string;
    address: string;
}

export interface MainPanelProps {
    title: string;
    body: string;
}

export interface ImageData {
    message: string[];
    status: string;
}
