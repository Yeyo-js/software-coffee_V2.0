import { Button } from "../../atoms/buttons"

function Buttons({ handleSubmit }) {
  return (
    <div
      className="
        flex 
        flex-nowrap 
        justify-around
        gap-4
        mt-6 
        w-full
        no-scrollbar
      "
    >
      <Button
        variant="secondary"
        text={'Reservar'}
        onClick={handleSubmit}
        
      />

      <Button
        variant="secondary"
        text={'Ver Horarios'}
      />
    </div>
  )
}

export { Buttons }
