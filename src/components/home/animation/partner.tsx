import Image from "next/image" 

const logos = [
    {
      name: 'Higher Education & Training',
      url: '/higher.png',
    },
    {
      name: 'Poeta',
      url: '/Poeta-logo9.png',
    },
    {
      name: 'Appetd',
      url: '/appetd-logo-02.png',
    },
    {
      name: 'Saqa',
      url: '/saqa.png',
    },
  ]
  
  const StaticLogoCloud = () => {
    return (
      <div className="w-full py-12">
        <div className="flex w-full flex-col items-center justify-center gap-2 px-4 md:px-8">
          <div className="py-6 font-medium uppercase">Our partners</div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 lg:grid-cols-5">
            {logos.map((logo, key) => (
              <Image
                key={key}
                src={logo.url}
                width={200}
                height={200}
                className="mt-10 h-10 w-28 px-2 brightness-0  text-black dark:invert"
                alt={`${logo.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default StaticLogoCloud