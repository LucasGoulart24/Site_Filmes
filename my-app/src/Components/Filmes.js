import Capa from "./Img/Filme.jpeg";
import Capa2 from "./Img/Filme2.jpg";
import Capa3 from "./Img/Filme3.jpg";
import Capa4 from "./Img/Filme4.jpeg";
import Capa5 from "./Img/Filme5.jpeg";
import Capa6 from "./Img/Filme6.jpeg";
import Capa7 from "./Img/Filme7.jpeg";
import Capa8 from "./Img/Filme8.jpeg";
import Capa9 from "./Img/Filme9.jpeg";
import Capa10 from "./Img/Filme10.jpeg";
import Capa11 from "./Img/Filme11.jpeg";
import Capa12 from "./Img/Filme12.jpeg";
import "./Styles/Style.css";

// Icones
import { FaStar } from "react-icons/fa6";

function Filmes() {
    return(
        <div className="Filmes">
            <div className="Card">
                <img src={Capa}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Ação/Aventura</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa2}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Infantil/Aventura</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa3}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Musical/Fantasia</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa4}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Ação/Ficção científica</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa5}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Terror/Mistério</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa6}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Ação/Ficção científica</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa7}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Terror/Suspense</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa8}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Ação/Ficção científica</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa9}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Ação/Ficção científica</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa10}></img>
                <div className="Textos">
                    <p>2024</p>
                    <p>Comédia</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa11}></img>
                <div className="Textos">
                    <p>2020</p>
                    <p>Ficção científica/Terror</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            <div className="Card">
                <img src={Capa12}></img>
                <div className="Textos">
                    <p>2020</p>
                    <p>Ação/Fantasia</p>
                </div>
                <div className="Estrelas">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
        </div>
    );
}

export default Filmes;