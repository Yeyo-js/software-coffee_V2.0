import { Title } from "../../atoms/titles"

function ContTitles() {
  return (
    <div className="
  flex items-center 
  justify-center min-[420px]:justify-between
  px-4 py-3
  w-full
  sm:max-w-full
  bg-black text-white
  shadow-[0_8px_30px_black]
  gap-4
">


      <Title
        level="h3"
        text={'Todo lo bueno empieza con un café'}
        weight="normal"
        align="center"
        variant="primary"
      />

      <Title
        level="h3"
        text={'cafévital'}
        weight="normal"
        align="center"
        variant="primary"
        className="hidden min-[420px]:block"
      />
    </div>
  )
}

export { ContTitles }