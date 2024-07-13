import React from 'react';
import Wrapper from '@/components/reusable/Wrapper';
import TreatmentsClient from './components/TreatmentsClient';

interface OriginalObject {
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

interface TreatmentDataType {
  _id: string;
  title: string;
  description: string;
  image: string;
}

export default async function Goals() {
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
    const treatments: OriginalObject[] = result.data.data;

    filteredData = treatments.map(({ _id, title, description, image }) => ({
      _id,
      title,
      description,
      image,
    }));

    // console.log(filteredData);

  } catch (error) {
    console.log(error);
  }

  return (
    <main className="border-t-2 border-t-secondary">
      <Wrapper>
        <TreatmentsClient data={filteredData} />
      </Wrapper>
    </main>
  );
}
