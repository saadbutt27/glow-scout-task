import { OriginalObjectTreatment, OriginalObjectSpa, TreatmentDataType, SpaDataType } from "./types";

// Frontend API call to get all treatments
export const get_treatments = async (): Promise<TreatmentDataType[] | undefined> => {
    let filteredData: TreatmentDataType[] = [];
    
    try {
        const res = await fetch("http://128.199.30.51:5007/api/Treatment", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },      
        });
    
        if (!res.ok) throw new Error("error insertion");
    
        const result = await res.json();
        const treatments: OriginalObjectTreatment[] = result.data.data;
    
        filteredData = treatments.map(({ _id, title, description, image }) => ({
            _id,
            title,
            description,
            image,
        }));
    
        return filteredData;
    
    } catch (error) {
        console.log(error);
        return undefined
    }
};

// Frontend API call to get a single treatments
export const get_single_treatment = async (slug: string): Promise<TreatmentDataType | undefined> => {
    try {
      const response = await fetch(`http://128.199.30.51:5007/api/Treatment/${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const result = await response.json();
      const { _id, title, description, image } = result.data;
  
      const treatmentData: TreatmentDataType = {
        _id,
        title,
        description,
        image
      };
  
      return treatmentData;
    } catch (error) {
      console.error('Error fetching treatment data:', error);
      return undefined;
    }
};

// Frontend API call to get all spas
export const get_spas = async (): Promise<SpaDataType[] | undefined> => {
    let filteredData: SpaDataType[] = [];

    try {
      const res = await fetch("http://128.199.30.51:5007/api/Spas", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!res.ok) throw new Error("error insertion");
  
      const result = await res.json();
      const treatments: OriginalObjectSpa[] = result.data.data;
  
      filteredData = treatments.map(({ _id, name }) => ({
        _id,
        name
      }));
  
      return filteredData;
  
    } catch (error) {
      console.log(error);
      return undefined;
    }
} 

// Frontend API call to get a single spas
export const get_single_spa = async (slug: string): Promise<SpaDataType | undefined> => {
    try {
      const response = await fetch(`http://128.199.30.51:5007/api/Spas/${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const result = await response.json();
      const { _id, name } = result.data;
  
      const treatmentData: SpaDataType = {
        _id,
        name,
      };
  
      return treatmentData;
    } catch (error) {
      console.error('Error fetching spa data:', error);
      return undefined;
    }
};

