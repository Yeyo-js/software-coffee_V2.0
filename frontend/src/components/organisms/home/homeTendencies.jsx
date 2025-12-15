import { NavLink, Outlet } from "react-router-dom";
import { Title } from "../../atoms/titles";
import { TendenciesDescription } from "../../molecules/home/hometendenciesDesc";

function Tendencies() {
  const menuTendencies = [
    { text: 'Cafés', href: 'coffee' },
    { text: 'Galletas', href: 'cookies' },
    { text: 'Postres', href: 'cakes' },
  ];
  const title = 'Nuestras tendencias'

  return (
    <section
      className="
    w-full sm:w-screen md:w-[92%] mx-auto 
    flex flex-col items-center justify-center mt-20
    gap-4 sm:gap-5 md:gap-6 
    bg-[#D9DCDD] 
    pb-8 sm:pb-9 md:pb-10 
    pt-5 sm:pt-6 md:pt-7 
    mb-4 sm:mb-5 md:mb-6
    shadow-[0_3px_15px_rgba(0,0,0,0.70)]
    px-4 sm:px-0 md:px-0
  "
    >
      <div className="flex flex-col gap-2">
        <Title
          text={title}
          level="h2"
          weight="bold"
          className=" border-b-3 border-[#A66A06]" />
        <hr className="h-0.5 text-[#A66A06] bg-[#A66A06] w-32 sm:w-36 md:w-40 mx-auto" />
      </div>

      <nav className="w-full flex justify-center">
        <ul className="flex gap-4 sm:gap-8 md:gap-13 flex-wrap justify-center">
          {menuTendencies.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.href}
                replace
                className={({ isActive }) =>
                  `py-1.5 sm:py-2 px-3 sm:px-4 md:px-2 rounded transition-all duration-300 text-sm sm:text-base ${isActive
                    ? 'bg-[#A66A06] text-white font-semibold'
                    : 'text-gray-700 hover:bg-[#A66A06] hover:text-white'
                  }`
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <section
        className="
          mt-4 sm:mt-5 md:mt-6
          w-full sm:w-screen md:w-[96%] lg:w-[96%]
          min-h-[300px] sm:min-h-[350px] md:h-80
          flex flex-nowrap gap-4 sm:gap-5 md:gap-6
          overflow-x-auto
          px-2 py-2
          rounded
          scroll-smooth
          snap-x snap-mandatory
  "
      >
        <Outlet />
      </section>
      <TendenciesDescription />

    </section>
  );
}

export { Tendencies };