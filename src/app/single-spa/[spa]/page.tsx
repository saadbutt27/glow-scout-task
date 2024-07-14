import React from 'react'
import Wrapper from '@/components/reusable/Wrapper';
import SpaDetails from './components/SpaDetails';
import SpaTreatments from './components/SpaTreatments';
import SpaReviews from './components/SpaReviews';
import { get_single_spa } from '@/lib/api_functions';
import { SpaDataType } from '@/lib/types';


// This is a server components and a page created using Next.js dynamic routing
// These pages are created on runtime, because we do not know which treatment user wants to compare, ahead of time
// This compoents accepts spa id from params(parameter which it gets from url), and based on that fetches data from
// backend to dynamicaly render the page
export default async function SingleSpa({
  params,
}: {
  params: { spa: string };
}) {
  // Get spa id from params
  const { spa } = params

  // Calling a fucntion to hit the API to get a single spa
  const single_spa: SpaDataType | undefined = await get_single_spa(spa);

  // Renders if spa not found
  if (!single_spa) {
    return <div className="flex justify-center items-center m-5 font-semibold text-3xl">404 - Spa not found</div>;
  }
  // Renders if spa is found
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
