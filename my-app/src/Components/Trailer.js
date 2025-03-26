import "./Styles/Style.css";

function Trailer() {
    return(
        <div className="Trailer">
            <div className="Poster">
                <div className="Titulos">
                    <h1>Novos Filmes</h1>
                    <p>Aqui estão os trailers dos novos filmes que serão lançados nesse ano</p>
                    <div className="Link">
                        <div className="Banner">
                            <h4>Um Filme Minecraft</h4>
                            <h5>3 de abril de 2025</h5>
                        </div>
                        <a href="https://www.youtube.com/watch?v=EVKYAAES6JQ">Assistir o trailer</a>
                    </div>
                    <div className="Link">
                        <div className="Banner">
                            <h4>Chico Bento e a Goiabeira Maraviósa</h4>
                            <h5>9 de janeiro de 2025</h5>
                        </div>
                        <a href="https://www.youtube.com/watch?v=7M0fKoXuQxc">Assistir o trailer</a>
                    </div>
                    <div className="Link">
                        <div className="Banner">
                            <h4>Como Treinares o Teu Dragão</h4>
                            <h5>13 de junho de 2025 (EUA)</h5>
                        </div>
                        <a href="https://www.youtube.com/watch?v=HIbwgbbJzSs">Assistir o trailer</a>
                    </div>
                    <div className="Link">
                        <div className="Banner">
                            <h4>Avatar 3</h4>
                            <h5>19 de dezembro de 2025 (EUA)</h5>
                        </div>
                        <a href="https://www.youtube.com/watch?v=YXtWPVFk5TQ">Assistir o trailer</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trailer;