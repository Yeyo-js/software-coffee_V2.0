import { useState } from "react";
import { FiCheckCircle, FiX  } from "react-icons/fi";
import { Title } from "../../atoms/titles";
import { Button } from "../../atoms/buttons";
import { CartTitle } from "../../molecules/modals/modalCartTitle";

function CartShop({ setCartShopOpen }) {

  const [isClose, setIsClose] = useState(false);
  const [ordered, setOrdered] = useState(false); // 👈 Nuevo estado

  const CloseModal = () => {
    setIsClose(true);
    setTimeout(() => {
      setCartShopOpen(false);
    }, 400);
  };

  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) {
      CloseModal();
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleOrder = () => {
    setOrdered(true); 
  };


  return (
    <div
      className={`fixed inset-0 bg-black/50 z-998 transition-opacity duration-400 
        ${isClose ? "opacity-0" : "opacity-100"}`}
      onClick={handleBgClick}
    >
      <section
        className="absolute text-black z-999 p-3 rounded top-20 right-6 bg-white w-200 flex flex-col gap-5 items-center justify-center"
        onClick={handleModalClick}
      >
        <CartTitle CloseModal={CloseModal}/>
        <div className="h-40 w-190 flex flex-col items-center rounded justify-center text-gray-300 border border-gray-400 gap-3">
          {ordered && (
            <FiCheckCircle
              size={55}
              className="text-green-500 animate-check"
            />
          )}
          <Title 
            className="text-gray-300"
            level="h5"
            text={ordered ? "Pedido realizado con éxito" : "No hay productos en carrito"}
          />
        </div>
        <Button 
          type="submit"
          text={'Pedir'}
          className="px-8"
          onClick={handleOrder}/>
      </section>

      <style>
        {`
          .animate-check {
            animation: pop 0.5s ease-out forwards;
          }

          @keyframes pop {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            60% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export { CartShop };
