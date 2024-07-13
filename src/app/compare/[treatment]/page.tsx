import React from 'react'
import Image from 'next/image';
import Wrapper from '@/components/reusable/Wrapper';
import Button from '@/components/reusable/Button';
import UploadImage from '../UploadImage';

interface TreatmentDataType {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const getData = async (slug: string): Promise<TreatmentDataType | undefined> => {
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


export default async function CompareTreatment({
  params,
}: {
  params: { treatment: string };
}) {
  const { treatment } = params
  const compare_treatment: TreatmentDataType | undefined = await getData(treatment);

  if (!compare_treatment) {
    return <div>404 - Treatment not found</div>;
  }

  return (
    <main className="border-t-2 border-t-secondary">
      <Wrapper>
        <div className="relative flex flex-col items-center gap-y-2 mt-10">
        <div className="absolute top-0 left-0 bg-trinary blur-lg rounded-full w-96 h-96 -translate-x-44 translate-y-[28rem] -z-10"></div>
        <h1 className="text-4xl">Compare Treatments</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.</p>
          <div className="mt-5 flex justify-between items-start flex-1 gap-x-8">
            <div className="flex-1">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-96 h-56">
                  <Image
                    className="rounded-lg"
                    src={compare_treatment.image}
                    alt={compare_treatment.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h2 className="text-3xl">{compare_treatment.title}</h2>
                <div className="mt-8 w-96 border-[1px] border-secondary text-secondary px-4 pt-4 pb-20 rounded-lg">
                  <p className="text-xl font-semibold mb-2">Description</p>
                  <p>{compare_treatment.description}“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur  elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur  elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur  elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipisci elit. Lorem ipsum dolor sit amet, consectetur adipisci elit. Ut ut nibh faucibus.”</p>
                </div>
              </div>
            </div>  
            <span className="w-[2px] h-screen bg-[#351120] bg-opacity-20"></span>
            <UploadImage />
          </div>
          <Button text="Next"/>
        </div>
       </Wrapper>
    </main>
  );
}
