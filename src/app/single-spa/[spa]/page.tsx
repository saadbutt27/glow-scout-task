import React from 'react'
import Wrapper from '@/components/reusable/Wrapper';
import SpaDetails from './components/SpaDetails';
import SpaTreatments from './components/SpaTreatments';
import SpaReviews from './components/SpaReviews';
import { get_single_spa } from '@/lib/api_functions';
import { SpaDataType } from '@/lib/types';


export default async function SingleSpa({
  params,
}: {
  params: { spa: string };
}) {
  const { spa } = params
  const single_spa: SpaDataType | undefined = await get_single_spa(spa);

  if (!single_spa) {
    return <div className="flex justify-center items-center m-5 font-semibold text-3xl">404 - Spa not found</div>;
  }

  return (
    <main className="border-t-2 border-t-secondary">
      {/* Blurred Divs */}
      <div className="absolute top-36 -right-10 w-96 h-72 bg-trinary rounded-t-full blur-xl -z-10 -rotate-90"></div>
      <div className="absolute top-[35rem] -left-10  w-96 h-72 rounded-t-full bg-trinary blur-xl -z-10 rotate-90"></div>
      <Wrapper>
        <div className="flex flex-col mt-10">
          <h1 className="text-4xl font-semibold">{single_spa.name.toUpperCase()}</h1>
          <SpaDetails name={single_spa.name} />
        </div>
        
        <hr className="border-t-[1px] border-solid border-t-secondary my-10" />

        <SpaTreatments />
        
        <hr className="border-t-[1px] border-solid border-t-secondary my-10" />
          
        <SpaReviews/>

       </Wrapper>
    </main>
  );
}
