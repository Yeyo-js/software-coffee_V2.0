import { TendenciesCard } from "../../molecules/home/homeTendeciesCard";

function TendenciesCakes() {
  const tendenciesCoffee = [
    {
      img: '/TEN-COFFEE1.png',
      title: 'Postre 1',
      description:
        'Intenso y concentrado, es la base perfecta para muchas bebidas clásicas.',
    },
    {
      img: '/TEN-COFFEE2.png',
      title: 'Café Latte',
      description:
        'Su suave mezcla de espresso con leche lo hace cremoso y muy equilibrado.',
    },
    {
      img: '/TEN-COFFEE3.png',
      title: 'Postre 3',
      description:
        'Ligero y equilibrado, ideal para quienes prefieren un sabor suave.',
    },
    {
      img: '/TEN-COFFEE4.png',
      title: 'Café Mocha',
      description:
        'Dulce y chocolatoso, combina espresso con cacao y un toque de leche.',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex animate-scroll flex-nowrap">
        <div className="flex flex-nowrap gap-8 px-4">
          <TendenciesCard tendenciesCoffee={tendenciesCoffee} />
        </div>
        <div className="flex flex-nowrap gap-8 px-4">
          <TendenciesCard tendenciesCoffee={tendenciesCoffee} />
        </div>

      </div>
    </div>
  );
}

export { TendenciesCakes };
