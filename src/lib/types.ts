// An interface for types of original object returning from API call for treatments
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

// An interface for types of required object of treatments
export interface TreatmentDataType {
    _id: string;
    title: string;
    description: string;
    image: string;
}  

// An interface for types of required object of spas
export interface SpaDataType {
    _id: string;
    name: string;
}

// An interface for types of original object returning from API call for spas
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

  
