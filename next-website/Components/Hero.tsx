import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <>
    <section
    className="max-container padding-container flex flex-col gap-16 py-10 pb-2 md:gap-28 xl:flex-row mt-10"
    >
        <div className="hero-map"></div>

        {/* Left */}
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">

        <Image
        src='/camp.svg'
        alt='camp'
        width={50}
        height={50}
        
        />
        <h1 className="font-bold text-4xl lg:text-8xl ">Putuk Truno Camp Area</h1>
        <p className="text-[1rem] mt-6 text-gray-500 max-w-[520px]">We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>

        <div className=" my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
                {Array(5).fill(1).map((_,i)=>(
                    <Image
                    src='/star.svg'
                    key={i}
                    alt="star"
                    width={24}
                    height={24}
                    />
                ))}
            </div>
            <p className="text-xl font-bold">198K Excellent reviews</p>

            <div className="flex   max-sm:flex-col gap-3 w-full">
                <Button 
                type="button" 
                title="Download App" variant="btn_green"
                />

                <Button 
                type="button" 
                title="How it works?" variant="btn_white_text"
                icon="/play.svg"
                />

            </div>
        </div>

        </div>
        
        {/* right side */}
        <div className="relative flex flex-1 items-start ">

            <div className=" relative xl:absolute xl:-left-10 xl:-top-15 z-20 w-[280px] flex-col gap-8 rounded-xl bg-gray-800 px-7 py-4">
                <div className="flex flex-col gap-4">
                    <div className=" flexBetween">
                        <p className="text-sm text-gray-400">Location</p>
                        <Image src='close.svg' alt="close" width={24} height={24}/>
                    </div>

                    <p className="text-xl font-bold text-gray-200">Aguas Calientes</p>

                     <div className="flexBetween">
                        <div className="flex flex-col ">
                            <p className="text-sm text-gray-400">Distance</p>
                            <p className="text-xl font-bold text-white">173.28 mi</p>
                        </div>

                        <div className="flex flex-col ">
                            <p className="text-sm text-gray-400">Elevation</p>
                            <p className="text-xl font-bold text-white">2.040 km</p>
                        </div>
                     </div>

                </div>


            </div>

        </div>

    </section>
    </>
  )
}

export default Hero