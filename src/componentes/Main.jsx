import Contato from "./contato";
import Depoimentos from "./depoimentos";
import Inicio from "./Inicio";
import Portfolio from "./portfolio";
import Servicos from "./Servicos";

export default function Main(){
    return(
        <main>
            <Inicio />
            <Servicos />
            <Portfolio />
            <Depoimentos />
            <Contato />
        </main>
    )
}