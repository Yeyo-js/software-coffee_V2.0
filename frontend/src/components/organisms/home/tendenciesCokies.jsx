import { TendenciesCard } from "../../molecules/home/homeTendeciesCard";

function TendenciesCokies() {
  const tendenciesCoffee = [
    {
      img: '/TEN-COFFEE1.png',
      title: 'Café Espresso',
      description:
        'Intenso y concentrado, es la base perfecta para muchas bebidas clásicas.',
    },
    {
      img: '/TEN-COFFEE2.png',
      title: 'Café Latte',
      description:
        'Suave y cremoso, mezcla armoniosa de espresso con abundante leche.',
    },
    {
      img: '/TEN-COFFEE3.png',
      title: 'Café Americano',
      description:
        'Ligero y equilibrado, ideal para quienes prefieren un sabor menos fuerte.',
    },
    {
      img: '/TEN-COFFEE4.png',
      title: 'Café Mocha',
      description:
        'Dulce y chocolatoso, combina espresso con cacao y un toque de leche.',
    },
  ];

  // Duplicación para scroll infinito
  const duplicatedCoffee = [...tendenciesCoffee, ...tendenciesCoffee];

  return (
    <div className="relative w-full overflow-hidden py-6">
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

      {/* Carrusel continuo */}
      <div className="flex flex-nowrap gap-8 animate-scroll px-4">
        <TendenciesCard tendenciesCoffee={duplicatedCoffee} />
      </div>
    </div>
  );
}

export { TendenciesCokies };
