import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel"
import { PEOPLE_URL } from "@/constants";



const Camp = () => {
  return (
    <section className="max-container relative mt-30  padding-container">

    <Carousel className=" w-full ">
  <CarouselContent className="h-[300px]  xl:h-[480px] 📌 w-full ">

    {/* 📌 note crousel content is responsible to define the height of frousel so change the item content height according to your needs */}

    <CarouselItem className="basis-[calc(70%+1rem)] 📌 h-full w-full">

      {/*📌want to make last card slightly hideen in crousel ?   :- just play with the custom values of calc you will get it   */}

      <CampSite 
      imagee='/img-1.png'
      title='Putuk Truck Camp'
      location='Prigen, Pasur'/>
    </CarouselItem>
    <CarouselItem className="basis-[calc(70%+1rem)] h-full w-full">
      <CampSite 
      imagee='/img-2.png'
      title='Mountain View Camp'
      location='Somewhere in the Wilderness'/>
    </CarouselItem>
    <CarouselItem className="basis-[calc(70%+1rem)] h-full w-full">
      <CampSite 
      imagee='/img-1.png'
      title='Putuk Truck Camp'
      location='Prigen, Pasur' />
    </CarouselItem>
  </CarouselContent>
  
</Carousel>

    <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 ">
      <div className="bg-green-600 p-8 lg:max-w-[500px] xl:max-w[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl"
      >
        <h2 className="text-white text-4xl font-bold"
        >Feeling Lost And Not Knowing The Way?
        </h2>
        <p className="text-white mt-4">
          Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain


        </p>
        <Image
        src='/quote.svg'
        width={200}
        height={200}
        alt="quote"
        className="absolute right-10 bottom-0"
        />
      </div>
    </div>

    
    </section>


  );
};

export default Camp;

import { StaticImageData } from "next/image";

interface CampSiteProps {
  imagee: string | StaticImageData;
  title: string;
  location: string;
}

const CampSite: React.FC<CampSiteProps> = ({ imagee, title, location }) => {
  return (
    <div className="h-full w-full relative overflow-hidden rounded-2xl flex flex-col justify-between px-5 py-7">
      <Image src={imagee} fill alt={title} className="object-cover" />
      <div className="relative flex justify-start items-center gap-4">
        <div className="p-5 rounded-full bg-green-500 flexCenter">
          <Image src="/folded-map.svg" width={24} height={24} alt="img" />
        </div>
        <div>
          <h4 className="font-bold text-white text-2xl">{title}</h4>
          <p className="text-white">{location}</p>
        </div>
      </div>

      <div className="relative flex justify-start items-center gap-6">
        <div className="flex -space-x-3">
          {PEOPLE_URL.map((data, index) => (
            <Avatar key={index}>
              <AvatarImage src={data} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-xl font-bold text-white">50+ Joined</p>
      </div>
    </div>
  );
};
