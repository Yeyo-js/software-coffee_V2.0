import { Title } from "../../atoms/titles"

function Schedules () {
    const title = 'Horarios de Antención'
    return(
        <section>
            <Title
                level="h3"
                text={title}
                align="center"
                weight="bold"
            />
        </section>
    )
}

export {Schedules}