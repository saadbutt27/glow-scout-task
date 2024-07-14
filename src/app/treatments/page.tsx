import React from 'react';
import Wrapper from '@/components/reusable/Wrapper';
import TreatmentsClient from './components/TreatmentsClient';
import { get_treatments } from '@/lib/api_functions';
import { TreatmentDataType } from '@/lib/types'; 

export default async function Goals() {
  const filteredData: TreatmentDataType[] | undefined = await get_treatments();

  return (
    <main className="border-t-2 border-t-secondary">
      <Wrapper>
        <TreatmentsClient data={filteredData} />
      </Wrapper>
    </main>
  );
}
