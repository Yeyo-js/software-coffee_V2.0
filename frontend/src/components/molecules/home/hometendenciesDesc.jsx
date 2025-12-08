import { Paragraph } from "../../atoms/paragraph"

function TendenciesDescription() {
  return (
    <div className="flex gap-6 sm:gap-8 md:gap-10 w-full justify-center px-4">
        <Paragraph 
          text={'Descubre los cafés, galletas y postres que están conquistando a todos con su sabor irresistible.'}
          variant="secondary"
          size="medium"
          align="center"
          className=" w-full sm:w-[90%] md:w-[80%] lg:w-200"/>
          
    </div>
    )
}

export { TendenciesDescription }