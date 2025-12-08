import { MyTemplate } from "../templates/myTemplate"
import { Banner } from "../organisms/booking/banner"
import { Form } from "../organisms/booking/FormReservs"
import { Regulations } from "../organisms/booking/regualations"
import { Schedules } from "../organisms/booking/schedules"

function BookingPage() {
  return (
    <MyTemplate>
      <Banner/>
      <Form/>
      <Regulations/>
      <Schedules/>
    </MyTemplate>
  )
}

export { BookingPage }