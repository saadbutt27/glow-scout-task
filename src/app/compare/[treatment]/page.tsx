import React from 'react'
import Image from 'next/image';
import Wrapper from '@/components/reusable/Wrapper';
import Button from '@/components/reusable/Button';
import UploadImage from '../UploadImage';
import { get_single_treatment } from '@/lib/api_functions';
import { TreatmentDataType } from '@/lib/types';
import Link from 'next/link';


export default async function CompareTreatment({
  params,
}: {
  params: { treatment: string };
}) {
  const { treatment } = params
  const compare_treatment: TreatmentDataType | undefined = await get_single_treatment(treatment);

  if (!compare_treatment) {
    return <div className="flex justify-center items-center m-5 font-semibold text-3xl">404 - Treatment not found</div>;
  }

  return (
    <main className="border-t-2 border-t-secondary">
      <Wrapper>
        <div className="flex flex-col items-center gap-y-2 mt-10">
        {/* Blurred Divs */}
        <div className="absolute top-36 -right-10 w-96 h-72 bg-trinary rounded-t-full blur-xl -z-10 -rotate-90"></div>
        <div className="absolute top-[35rem] -left-10  w-96 h-72 rounded-t-full bg-trinary blur-xl -z-10 rotate-90"></div>
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
          <Link href="#">
            <Button text="Next"/>
          </Link>
        </div>
       </Wrapper>
    </main>
  );
}
