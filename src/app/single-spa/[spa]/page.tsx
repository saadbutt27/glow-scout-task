import React from 'react'
import Image from 'next/image';
import Wrapper from '@/components/reusable/Wrapper';
import Button from '@/components/reusable/Button';

interface SpaDataType {
  _id: string;
  name: string;
}

const getData = async (slug: string): Promise<SpaDataType | undefined> => {
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


export default async function SingleSpa({
  params,
}: {
  params: { spa: string };
}) {
  const { spa } = params
  const single_spa: SpaDataType | undefined = await getData(spa);

  if (!single_spa) {
    return <div>404 - Treatment not found</div>;
  }

  return (
    <main className="border-t-2 border-t-secondary">
      <Wrapper>
        <h1 className="text-3xl font-bold">{single_spa.name.toUpperCase()}</h1>
       </Wrapper>
    </main>
  );
}
