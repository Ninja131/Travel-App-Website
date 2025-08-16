import Image from "next/image"

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container w-full pb-24">
        <Image
        src='/camp.svg'
        width={50}
        height={50}
        alt="camp"
        />
        <p className="uppercase font-semibold text-green-500">
          we are here for you
        </p>
        <div className="flex flex-col justify-between gap-5 lg:gap-10 lg:flex-row">
          <h2 className="text-7xl font-bold text-gray-600 xl:max-w-[500px]">Guide You to Easy Path</h2>
          <p className="text-gray-500 xl:max-w-[450px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>

        </div>

      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
        src='/boat.png'
        alt="boat"
        width={1440}
        height={580}
        className="w-full object-cover object-center xl:rounded-3xl"
        />


        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
          src='/meter.svg'
          alt="meter"
          height={16}
          width={158}
          className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="opacity-50">Destination</p>
                <p className="font-bold text-green-500">48 min</p>
              </div>
              <p className="font-bold text-xl ">Aguas Calientes</p>

            </div>

            <div className="flex w-full flex-col">
             
                <p className="opacity-50">Start track</p>
              <p className="font-bold text-xl ">Wonorejo Pasuruan</p>

            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide