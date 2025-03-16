import Capa from "./Img/Filme.jpeg";
import Capa2 from "./Img/Filme2.jpg";
import Capa3 from "./Img/Filme3.jpg";
import Capa4 from "./Img/Filme4.jpeg";
import Capa5 from "./Img/Filme5.jpeg";
import "./Styles/Style.css";

function Filmes() {
    return(
        <div className="Filmes">
            <div className="Card">
                <img src={Capa}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Ação/Aventura</p>
                </div>
            </div>
            <div className="Card">
                <img src={Capa2}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Infantil/Aventura</p>
                </div>
            </div>
            <div className="Card">
                <img src={Capa3}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Musical/Fantasia</p>
                </div>
            </div>
            <div className="Card">
                <img src={Capa4}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Ação/Ficção científica</p>
                </div>
            </div>
            <div className="Card">
                <img src={Capa5}></img>
                <div className="Textos">
                    <p>2020</p>
                    <p>Ação/Fantasia</p>
                </div>
            </div>
        </div>
    )
}

export default Filmes;