import { StaticImageData } from 'next/image';
import LaserResurfacing from '../../public/images/laser-resurfacing.svg';
import ChemicalPeels from '../../public/images/chemical-peels.svg';
import AcneBluelight from '../../public/images/acne-bluelight.svg';
import Thermage from '../../public/images/thermage.svg';
import Botox from '../../public/images/botox.svg';

// testing data types for treatments
export interface Treatment {
  title: string;
  image: StaticImageData; // Assuming you are using Next.js' Image component which uses StaticImageData
  slug: string;
}

// testing data for treatments
export const treatments_data: Treatment[] = [
    { title: "Laser Resurfacing", image: LaserResurfacing, slug: "treatment1" },
    { title: "Chemical Peels", image: ChemicalPeels, slug: "treatment2" },
    { title: "Acne Bluelight Therapy", image: AcneBluelight, slug: "treatment3" },
    { title: "Thermage", image: Thermage, slug: "treatment4" },
    { title: "Botox", image: Botox, slug: "treatment5" }
];