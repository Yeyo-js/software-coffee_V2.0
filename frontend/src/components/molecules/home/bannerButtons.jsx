import { Link } from "../../atoms/links"

function BannerButtons() {
  return (
    <div className="flex  sm:flex-row gap-5 sm:gap-4 md:gap-6 lg:gap-16 w-auto sm:w-auto">
          <Link
            text={'Ver Carta'}
            href="/letter"
            variant="primary"
          />
          <Link
            text={'Reservar'}
            href="/bookings"
            variant="primary"
          />
        </div>
    )
}

export { BannerButtons }