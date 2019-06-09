import React from 'react';


class MainCover extends React.Component {
    render = () => {
        return (
            <main className="sdra-main-cover">
                <section className="sdra-main-cover-content">
                    <section className="sdra-main-cover-logosection">
                        <img src="images/lungs.svg" alt="" className="sdra-main-cover-logo"/>
                    </section>
                    <section className="sdra-main-cover-text-container">
                        <h1 className="sdra-main-cover-title">SDRA</h1>
                        <h3 className="sdra-main-cover-subtitle">
                            <span className="emphasis">S</span>indrome de <span className="emphasis">D</span>ificultad <span className="emphasis">R</span>espiratoria <span className="emphasis">A</span>guda
                        </h3>
                        <p className="sdra-main-cover-text">Análisis del procesamiento de imágenes médicas pulmonares para el diagnóstico y tratamiento del SDRA</p>
                    </section>
                </section>
            </main>
        );
    };
}

export default MainCover;