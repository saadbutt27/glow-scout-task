export interface OriginalObjectTreatment {
    _id: string;
    title: string;
    description: string;
    image: string;
    spas: string[];
    price: string;
    goal: string;
    isFeatured: boolean;
    createdAt: string;
    updatedAt: string;
    id: string;
} 

export interface TreatmentDataType {
    _id: string;
    title: string;
    description: string;
    image: string;
}  

export interface SpaDataType {
    _id: string;
    name: string;
}

export interface OriginalObjectSpa {
    _id: string;
    name: string;
    email: string;
    role: string;
    loginType: string;
    isDeleted: boolean;
    showcaseImages: string[];
    customerId: string;
    subscription: string;
    tier: string;
    subscriptionId: string | null;
    rating: number;
    links: string[];
    createdAt: string;
    updatedAt: string;
    id: string; 
}

  
