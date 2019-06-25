import React from 'react';

class IntroductionSection extends React.Component {
    render = () => {
        return (
            <section className="sections">
                <section className="big-section">
                    <section className="double-section icon-text primary-section">
                        <section className="section-icon primary">
                            <img src="images/icon_main_objective.png" alt=""/>
                        </section>
                        <section>
                            <h1 className="title">Objetivo general</h1>
                            <p>Desarrollar un sistema que integre distintas herramientas de procesamiento de imágenes médicas que cumplan algoritmos de segmentación y que brinde información relevante para la toma de decisiones en los diagnósticos y tratamiento del SDRA</p>
                        </section>
                    </section>
                </section>
                <section className="big-section">
                    <section className="double-section text-icon">
                        <section>
                            <h1 className="title">Objetivos especificos</h1>
                            <ul className="list">
                                <li>Realizar una investigación de las herramientas de procesamiento de imágenes médicas actualmente en el mercado.</li>
                                <li>Clasificar las herramientas según su metodología y proceso.</li>
                                <li>Especificar los requerimientos técnicos y de usuario necesarios para la integración, interfaces, comunicación, y de priorización de las diferentes herramientas.</li>
                                <li>Diseñar una arquitectura para un sistema de integración de las herramientas de segmentación de imágenes médicas.</li>
                                <li>Desarrollar una interfaz que permita la integración de las herramientas halladas en la investigación.</li>
                                <li>Realizar pruebas sobre el sistema para validar los requerimientos técnicos y de usuario especificados anteriormente.</li>
                            </ul>
                        </section>
                        <section className="section-icon">
                            <img src="images/icon_specific_objective.png" alt=""/>
                        </section>
                    </section>
                </section>
                <section className="big-section">
                    <h1 className="title">Proceso</h1>
                    <section className="sections">
                        <section className="double-section icon-text">
                            <section className="section-icon">
                                <img src="images/icon_settings.png" alt=""/>
                            </section>
                            <section>
                                <h3 className="subtitle">Configuración e investigación</h3>
                                <p>En esta fase se busca realizar una indagación sobre las principales herramientas para la segmentación de imágenes médicas que lideran actualmente el mercado, esto con el fin de tener una lista de opciones sobre la cual se pueda realizar comparaciones con respecto a su usabilidad, su interoperabilidad, su asequibilidad y a los algoritmos implementados por cada herramienta.</p>
                            </section>
                        </section>
                        <section className="double-section icon-text">
                            <section className="section-icon">
                                <img src="images/icon_design.png" alt=""/>
                            </section>
                            <section>
                                <h3 className="subtitle">Análisis de requerimientos y diseño</h3>
                                <p>En esta fase se plantea diseñar y analizar los requerimientos con los cuales el sistema deberá contar, ya sea su infraestructura, lenguaje, interfaz, UX y UI. Teniendo en cuenta los recursos con los cuales el usuario final contará, y como seria la manera mas optima y facil tal que el usuario pueda interactuar con el sistema, todo esto basándonos en los resultados previos de la investigación, y de esta manera determinar que herramientas específicas se usarán, y cómo se usarán.</p>
                            </section>
                        </section>
                        <section className="double-section icon-text">
                            <section className="section-icon">
                                <img src="images/icon_develop.png" alt=""/>
                            </section>
                            <section>
                                <h3 className="subtitle">Desarrollo y plan de pruebas</h3>
                                <p>En esta fase se comenzará con el desarrollo del sistema especificado en la fase anterior, teniendo en cuenta todos los requerimientos de sistema, software, y usuario. Se desarrollará un plan de pruebas específico para el desarrollo del sistema el cual se llevará a la par del desarrollo del sistema mismo. Además también habrá un plan de pruebas que se irá aplicando desde la fase 1 del proceso de desarrollo.</p>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="big-section">
                    <h1 className="title">Impacto esperado</h1>
                    <section className="double-section icon-text">
                        <section className="section-icon">
                            <img src="images/possibility.png" alt="" className="section-icon"/>
                        </section>
                        <section>
                            <h3 classname="subtitle">Impacto a corto plazo</h3>
                            <p>El primer beneficiado con la realización del proyecto será el estudio que se realiza actualmente a manos de la Universidad de Lyon en Francia en torno al SDRA, brindando la posibilidad de que el estudio avance con mayor rapidez, al poseer una herramienta que genere variedad de resultados y permita analizar fácilmente cada uno de estos, aportando información relevante al estudio.</p>
                        </section>
                    </section>
                    <section className="double-section text-icon">
                        <section>
                            <h3 classname="subtitle">Impacto a mediano plazo</h3>
                            <p>Se espera que el prototipo sea una base para futuros proyectos esto con el fin de brindar oportunidades de mejora sobre el proyecto o como también bases para nuevos proyectos sobre computación gráfica y procesamiento de imágenes.</p>
                        </section>
                        <section className="section-icon">
                            <img src="images/structure.png" alt="" className="section-icon"/>
                        </section>
                    </section>
                    <section className="double-section icon-text">
                        <section className="section-icon">
                            <img src="images/medicalsystem.png" alt="" className="section-icon"/>
                        </section>
                        <section>
                            <h3 classname="subtitle">Impacto a largo plazo</h3>
                            <p>Ser un sistema de apoyo en tiempo real, asequible y de prioridad, para el tratamiento y diagnóstico del SDRA. Con el apoyo al estudio o la posible continuación del proyecto por parte de nuevos estudiantes, se espera que la herramienta final apoye a los especialistas  a la hora de tratar a un paciente con este síndrome, facilitando el diagnóstico y posiblemente salvando la vida de muchos pacientes.</p>
                        </section>
                    </section>
                </section>
                <section className="big-section">
                    <h1 className="title">Trabajo de grado</h1>
                    <section className="multiple-h-section">
                        <article className="sdra-member">
                            <img src="images/leo.png" alt=""/>
                            <h5>Leonardo Flórez Valencia</h5>
                            <h6>Director de trabajo de grado</h6>
                        </article>
                        <article className="sdra-member">
                            <img src="images/javeriana.png" alt="" className="no-circle"/>
                            <h5>Pontificia universidad Javeriana</h5>
                            <h6>Institución educativa</h6>
                        </article>
                        <article className="sdra-member">
                            <img src="images/investigation.png" alt=""/>
                            <h5>BASPI</h5>
                            <h6>Grupo de investigación</h6>
                        </article>
                    </section>
                </section>
                <section className="big-section">
                    <h1 className="title">Grupo de desarrollo</h1>
                    <section className="multiple-h-section">
                        <article className="sdra-member">
                            <img src="images/juanma.png" alt=""/>
                            <h5>Juan Manuel Sánchez Lozano</h5>
                            <h6>Ingeniero de sistemas</h6>
                        </article>
                        <article className="sdra-member">
                            <img src="images/luis.jpeg" alt=""/>
                            <h5>Luis David Zárate Castillo</h5>
                            <h6>Ingeniero de sistemas</h6>
                        </article>
                        <article className="sdra-member">
                            <img src="images/alejo.png" alt=""/>
                            <h5>Cesar Alejandro Guayara Rodriguez</h5>
                            <h6>Ingeniero de sistemas</h6>
                        </article>
                        <article className="sdra-member">
                            <img src="images/erika.jpeg" alt=""/>
                            <h5>Erika Harker Gutierrez</h5>
                            <h6>Ingeniera de sistemas</h6>
                        </article>
                        <article className="sdra-member">
                            <img src="images/juanmi.png" alt=""/>
                            <h5>Juan Miguel Gómez Ganem</h5>
                            <h6>Ingeniero de sistemas</h6>
                        </article>
                    </section>
                </section>
                <section className="big-section">
                    <h1 className="title">Documentos</h1>
                    <section className="grid">
                        <a href="documents/poster.png" target="_blank" className="sdra-document">
                            <img src="images/png.png" alt=""/>
                            <h5>Poster</h5>
                            <h6>Feria de posters</h6>
                        </a>
                        <a href="documents/propuesta.pdf" target="_blank" className="sdra-document">
                            <img src="images/pdf.png" alt=""/>
                            <h5>Propuesta</h5>
                            <h6>Propuesta de trabajo de grado</h6>
                        </a>
                        <a href="documents/spmp.pdf" target="_blank" className="sdra-document">
                            <img src="images/pdf.png" alt=""/>
                            <h5>SPMP</h5>
                            <h6>Planeación del proyecto</h6>
                        </a>
                        <a href="documents/srs.pdf" target="_blank" className="sdra-document">
                            <img src="images/pdf.png" alt=""/>
                            <h5>SRS</h5>
                            <h6>Requerimientos del proyecto</h6>
                        </a>
                        <a href="documents/sad.pdf" target="_blank" className="sdra-document">
                            <img src="images/pdf.png" alt=""/>
                            <h5>SAD</h5>
                            <h6>Software Architecture Document</h6>
                        </a>
                        <a href="documents/memoria.pdf" target="_blank" className="sdra-document">
                            <img src="images/pdf.png" alt=""/>
                            <h5>Memoria</h5>
                            <h6>Documento memoria del TG</h6>
                        </a>
                        <a href="documents/manual.pdf" target="_blank" className="sdra-document">
                            <img src="images/pdf.png" alt=""/>
                            <h5>Manual de usuario</h5>
                            <h6>Manual de instalación y uso</h6>
                        </a>
                        <a href="documents/presentacion.pdf" target="_blank" className="sdra-document">
                            <img src="images/presentation.png" alt=""/>
                            <h5>Presentación</h5>
                            <h6>Presentación de la sustentación</h6>
                        </a>
                        <a href="documents/2d.mp4" target="_blank" className="sdra-document">
                            <img src="images/video.png" alt=""/>
                            <h5>Demo 2D</h5>
                            <h6>Video de imagen en 2D</h6>
                        </a>
                        <a href="documents/3d.mp4" target="_blank" className="sdra-document">
                            <img src="images/video.png" alt=""/>
                            <h5>Demo 3D</h5>
                            <h6>Video de imagen en 3D</h6>
                        </a>
                        <a href="https://github.com/florez-l/QuimeraTK" target="_blank" rel="noopener noreferrer" className="sdra-document">
                            <img src="images/github.png" alt=""/>
                            <h5>QuimeraTK</h5>
                            <h6>Repositorio Github privado</h6>
                        </a>
                        <a href="https://github.com/juanmsl/sdra-project-portal" target="_blank" rel="noopener noreferrer" className="sdra-document">
                            <img src="images/github.png" alt=""/>
                            <h5>Pagina web</h5>
                            <h6>Repositorio Github</h6>
                        </a>
                    </section>
                </section>
            </section>
        );
    };
}

export default IntroductionSection;