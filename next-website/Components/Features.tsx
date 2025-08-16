import { FEATURES } from "@/constants"
import Image from "next/image"

const Features = () => {
  return (
    <section
      className="bg-[url('/feature-bg.png')] bg-cover bg-center flex-col flexCenter overflow-hidden py-24"
    >
      <div className=" max-container padding-container relative w-full flex justify-end">

        <div className=" flex flex-1 lg:min-h-[900px]">
          <Image
          src='/phone.png'
          alt="phone"
          width={440}
          height={1000}
          className="absolute top-[13%] z-10 hidden max-w-[1150px] rotate-[15deg] md:-left-16 lg:flex  xl:left-5"
          />
        </div>

        <div className="z-20 flex flex-col w-full lg:w-[60%]">
          <div className="relative">
            <Image
            src='/camp.svg'
            alt="camp"
            width={50}
            height={50}
            />
            <h2 className="font-bold text-7xl text-gray-600">Our Features</h2>
          </div>
          <ul  className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature)=>(
              <FeatureItem
              key={feature.title}
              icon={feature.icon}
              variant={feature.variant}
              description={feature.description}
              title = {feature.title}
              />
            ))}
          </ul>

          
        </div>

        

      </div>
    </section>
  )
}

export default Features

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  variant: string;
}

const FeatureItem = ({ title, icon, description,variant }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-500">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="font-bold text-4xl  mt-5 capitalize">
        {title}
      </h2>
      <p className=" mt-5 opacity-60 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}