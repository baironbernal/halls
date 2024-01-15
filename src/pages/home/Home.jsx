import React from "react";
import "./Home.css";
import "../../styles/keyframes.css";
import { Col, Container, Figure, Row } from "react-bootstrap";
import Button from "../../components/button/Button";
import CardAstro from "../../components/cards-astros/CardAstro";
import { LightSpeed, Zoom } from "react-reveal";
import Clapperboard from "../../components/cinema/Clapperboard";
import Honey from "../../components/honey/Honey";
import ModalVideo from "../../components/modal/ModalVideo";

const Home = () => {
  const publicURL = process.env.PUBLIC_URL;
  
  return (
    <div>
      <section className="blue-home">
        <ModalVideo/>
      <a href="#three-options">
      <div className="icon-mouse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="27"
            viewBox="0 0 16 27"
          >
            <g
              id="Grupo_1019"
              data-name="Grupo 1019"
              transform="translate(-952 -1023)"
            >
              <g
                id="Rectángulo_253"
                data-name="Rectángulo 253"
                transform="translate(952 1023)"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              >
                <rect width="16" height="27" rx="8" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="26"
                  rx="7.5"
                  fill="none"
                />
              </g>
              <circle
                id="Elipse_192"
                data-name="Elipse 192"
                cx="2"
                cy="2"
                r="2"
                transform="translate(958 1027)"
                fill="#fff"
              >
                <animate
                  attributeName="cy"
                  values="2;6;2"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
      </a>

        
        <Container>
          {/* Barra Halls blue */}
          <Zoom>
            <div className="title-option">
              <img
                src={publicURL+ '/images/home/title_respiraconhalls.svg'}
                alt="#Respiraytomaunimpulsoreal"
                className="mw-100"
              />
            </div>
          </Zoom>
          {/* People Logos */}
          <Zoom>
            <Row className="text-center position-relative" id="three-options">
                <div className="container-fluid overlay">
                  <img src={publicURL + "/images/home/pepitas-initials.png"} 
                  alt="Floating Images" 
                  className="pepitas floating-image mw-100 w-100" /> 
              </div>
              <Col xs={12} md={12} lg={4} xl={4} className="position-relative z-1">
                <Figure className="text-center">
                  <a href="/colombia/fluye-en-la-u">
                  <img
                    className=" mw-100"
                    src={publicURL+"/images/home/person_1.svg"}
                    alt="Fluye en la U"
                  />
                  </a>
                </Figure>
              </Col>
              <Col xs={12} md={12} lg={4} xl={4} className="position-relative z-1">
                <Figure className="text-center">
                  <a href='/colombia/manifestando-aumentos'>
                    <img
                    className=" mw-100"
                    src={publicURL+"/images/home/person_2.svg"}
                    alt="Manifestando aumentos"
                    />
                  </a>
                </Figure>
              </Col>
              <Col xs={12} md={12} lg={4} xl={4} className="position-relative z-1">
                <Figure className="text-center">
                <a href="/colombia/amor-drama-y-astros">
                  <img
                    className=" mw-100"
                    src={publicURL+"/images/home/person_3.svg"}
                    alt="Amor y astros"
                  />
                  </a>
                </Figure>
              </Col>
            </Row>
          </Zoom>
          <LightSpeed right>
            <Row className="text-center">
              <p className="mt-3 text-white fs-5">
              Aquí nos gusta el chisme, por eso hablamos de tu jefe, de conquistar a tu mejor amix y de la carrera
                a la que te quieres cambiar.
                <br />
                <b>#RespiraYTomaUnImpulsoreal clickea sin miedo y ¡empecemos!</b>
              </p>
            </Row>
          </LightSpeed>
        </Container>

        <br />
        <br />
      </section>

      <section className="purple-home">
            <div className="purple--barra w-100 py-5 text-center">
            <Zoom>
            <img
                 src={publicURL + "/images/pages/purple/fluye-barra.svg"}
                className="mw-100"
                alt="Amor barra"/>
            </Zoom>
            </div>
        <Container>
          {/* Barra Halls Purple */}
          <LightSpeed right>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} md={12} lg={7} xl={7}>
                <div className="images-spots w-100">
                  <img
                    src={publicURL+"/images/home/spot_images.svg"}
                    className="mw-100"
                    alt="Spot parchaditos"
                  />
                  <div className="halls-menta-1">
                    <div id="scene">
                        <img
                          className="mw-100"
                          src={publicURL + '/images/home/mentas-morada-1.svg'}
                          alt="Mentas moradas"
                        />
                      
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} md={12} lg={5} xl={5}>
                <div className="text-spots">
                  <h1>
                    ¿Nuevo <span>en la zona?</span>
                  </h1>
                  <p className="mt-3 text-white fs-5">
                    Dile no, a los sitios más básicos del lugar. <br />
                    #RespiraYTomaUnImpulsoReal con Halls y sé el anfitrión más
                    cool de tus amigos.
                  </p>
                  <Button
                    url={"fluye-en-la-u"}
                    borderColor={"#CD9BFF"}
                    titleButton={"Leer más"}
                  />
                  <div className="halls-menta-2">
                    <div id="scene1">
                    <img
                          src={publicURL+"/images/home/mentas-morada-2.svg"}
                          alt="Mentas moradas 2"
                        />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </LightSpeed>

          <Row className="mt-5 text-center w-100 position-relative z-3">
            <h1
              id="respiraytoma"
              className="m-0 fc-pink-primary ff-gotham-bold fs-1"
            >
              #RespiraYTomaUnImpulsoReal
            </h1>
            <p className="fs-4 text-white">
              con Halls y rómpela en el semestre.
            </p>
          </Row>
          <Row className="tiras-consejo position-relative">
                <div className="position-absolute overlay">
                    <img src={publicURL + "/images/home/pepitas-cuerdas.png"} 
                    alt="Floating Images" 
                    className="pepitas floating-image mw-100 w-100" /> 
                </div>
            <Zoom>
              <div className="consejos-home">
                <div className="consejos-title position-relative">
                  <img
                    src={publicURL+"/images/home/consejos-title-sombra.png"}
                    alt="Consejos title sombra"
                    className="w-100"
                  />
                </div>
              </div>
            </Zoom>            
          </Row>
          <Row>
          <div className="txt-consejos-home">
              <div className="info-consejos-home position-relative z-1">
                <p className="text-white text-center fs-5">
                  No levantes la mano para ir al baño y haz lo imposible para
                  que el profe no sepa tu <br />
                  apellido, son solo algunos consejos para sobrevivir en la U.
                </p>
                <div className="text-center">
                  <Button
                    url={"fluye-en-la-u"}
                    borderColor={"#CD9BFF"}
                    titleButton={"Leer más"}
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="green-home text-center position-relative">
            <div className="green--barra w-100 py-5">
                <Zoom>
                <img
                    src={publicURL+"/images/pages/green/manifestando-barra.svg"}
                    className="mw-100"
                    alt="Amor barra"/>
                </Zoom>
              </div>
            <Container>
              {/* Honey Component */}
              <Honey/>
            </Container>
            
            <Row className="position-relative">
              <div className="container-fluid overlay ">
                  <img src={publicURL + "/images/home/pepitas-cine.png"} 
                  alt="Floating Images" 
                  className="pepitas floating-image mw-100 w-100" /> 
              </div>
              <Clapperboard isText={true} />
            </Row>
      </section>
      <section className="red-home text-center">
            
              <div className="red--barra w-100 py-5">
              <Zoom>
              <img
                  src={publicURL+ "/images/pages/red/amor-barra.svg"}
                  className="mw-100"
                  alt="Amor barra"/>
                  </Zoom>
              </div>
            
        <Container>
        
        {/*Break the ice*/}
        <Row className="my-5 position-relative">
        <div className="container-fluid overlay ">
                  <img src={publicURL + "/images/pages/red/bg-pepitas.png"} 
                  alt="Floating Images" 
                  className="pepitas floating-image mw-100 w-100" /> 
              </div>
          <Zoom>
            <article>
              <img
                className="mw-100"
                src={publicURL + "/images/pages/red/mural-rompe-hielo.png"}
                alt="Mural rompe hielo"
              />
              <p className="mt-3 text-white fs-5 position-relative z-1">
                Ser el más extrovertido no asegura el éxito en la primera cita.
                Rompe el hielo <br />
                con Halls y estos tipcitos. ¿Funcionan? No tenemos pruebas, pero
                tampoco dudas. <br />
                #RespiraYTomaUnImpulsoReal y ponlos a prueba
              </p>
              <div className="text-center">
                <Button
                  url={"amor-drama-y-astros"}
                  borderColor={"#D8005D"}
                  titleButton={"Leer más"}
                />
              </div>
            </article>
          </Zoom>
        </Row>

        <br />

        {/*Astro Effect*/}
        <Row className="z-0 position-relative">
          <CardAstro />
        </Row>
        <br />
        <Row className="pb-5">
          <p className="mt-3 text-white fs-5 position-relative z-1">
            ¿Tienes más de un crush? Nada que un Halls no pueda resolver. <br />
            #RespiraYTomaUnImpulsoReal y descubre quién que te conviene. <br />
            ¿Aries, Tauro, Libra?
          </p>
          <div className="text-center">
                <Button
                  url={"colombia/amor-drama-y-astros"}
                  borderColor={"#D8005D"}
                  titleButton={"Leer más"}
                />
          </div>
        </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
