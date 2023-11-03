import React from "react";
import "./Home.css";
import { Col, Container, Figure, Row } from "react-bootstrap";
import Button from "../../components/button/Button";
import CardAstro from "../../components/cards-astros/CardAstro";
import { LightSpeed, Zoom } from "react-reveal";
import Clapperboard from "../../components/cinema/Clapperboard";
import Honey from "../../components/honey/Honey";
import ModalVideo from "../../components/modal/ModalVideo";
import useVideoHome from "../../hooks/useVideoHome";


const Home = () => {
  const publicURL = process.env.PUBLIC_URL;
  
  const { showModalVideo, showVideo, togglePlay, videoRef } = useVideoHome();

  return (
    <div>
      <section className="blue-home">
        <LightSpeed left>
          <div className="video-home spacing-halls">
            <Row>
              <div className="video-halls" onClick={()=> {
                showModalVideo();
                togglePlay()
              }}>
                <video ref={videoRef} autoPlay muted loop className="mainVideo">
                  <source src={publicURL+"/video/video-hub1.mp4"} type="video/mp4" muted />
                </video>
                <div className="opacity-halls">
                  <img
                    src={publicURL+'/images/home/playIcon.svg'}
                    alt=""
                    className="playicon"
                  />
                </div>
              </div>
            </Row>
          </div>
        </LightSpeed>

        {/*Video modal*/}
        {
          showVideo && (
            <div >
               <ModalVideo show={true} />
            </div>
          )
        }
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
            <Row className="text-center" id="three-options">
              <Col xs={12} md={12} lg={4} xl={4}>
                <Figure className="text-center">
                  <img
                    className=" mw-100"
                    src={publicURL+"/images/home/person_1.svg"}
                    alt="Fluye en la U"
                  />
                </Figure>
              </Col>
              <Col xs={12} md={12} lg={4} xl={4}>
                <Figure className="text-center|">
                  <img
                    className=" mw-100"
                    src={publicURL+"/images/home/person_2.svg"}
                    alt="Manifestando aumentos"
                  />
                </Figure>
              </Col>
              <Col xs={12} md={12} lg={4} xl={4}>
                <Figure className="text-center">
                  <img
                    className=" mw-100"
                    src={publicURL+"/images/home/person_3.svg"}
                    alt="Amor y astros"
                  />
                </Figure>
              </Col>
            </Row>
          </Zoom>
          <LightSpeed right>
            <Row className="text-center">
              <p className="mt-3 text-white fs-5">
                Aquí hablar de tu jefe, conquistar a tu mejor amigx y querer
                cambiarse de carrera es el chisme diario. ¡Tú tranqui!
                <br />
                #RespiraYTomaUnImpulsoReal para comenzar ¡Clickea sin miedo!
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
                alt="Amor barra"
            />
            </Zoom>
            </div>
            
        <Container>
          {/* Barra Halls Purple */}
          
          
          <LightSpeed right>
            <Row className="justify-content-center align-center">
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
                    Dile no a los sitios más básicos del lugar. <br />
                    #RespiraYTomaUnImpulsoReal con Halls y sé el anfitrión más
                    cool entre tus amigos.
                  </p>
                  <Button
                    url={"/fluye-en-la-u"}
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
          <Row className="tiras-consejo">
            <Zoom>
              <div className="consejos-home">
                <div className="consejos-title">
                  <img
                    src={publicURL+"/images/home/consejos-title-sombra.png"}
                    alt="Consejos title sombra"
                    className="w-100"
                  />
                </div>
                <div className="object-scene">
                  <div id="scene2">
                  <img
                        className="mw-100"
                        src={publicURL+"/images/home/object-morado-1.svg"}
                        alt=""
                      />
                   
                  </div>
                </div>
              </div>
            </Zoom>
            <div className="txt-consejos-home">
              <div className="info-consejos-home">
                <p className="mt-3 text-white text-center fs-5">
                  No levantes la mano para ir al baño y haz lo imposible para
                  que el profe no sepa tu <br />
                  apellido, son solo algunos consejos para sobrevivir en la U.
                </p>
                <div className="text-center">
                  <Button
                    url={"/fluye-en-la-u"}
                    borderColor={"#CD9BFF"}
                    titleButton={"Leer más"}
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="green-home text-center">
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
            <Clapperboard isText={true} />
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
        <Row className="my-5">
          <LightSpeed left>
            <article>
              <img
                className="mw-100"
                src={publicURL + "/images/pages/red/mural-rompe-hielo.png"}
                alt="Mural rompe hielo"
              />
              <p className="mt-3 text-white fs-5">
                Ser el más extrovertido no asegura el éxito en la primera cita.
                Rompe el hielo <br />
                con Halls y estos tipcitos. ¿Funcionan? No tenemos pruebas, pero
                tampoco dudas. <br />
                #RespiraYTomaUnImpulsoReal y ponlos a prueba
              </p>
              <div className="text-center">
                <Button
                  url={"/fluye-en-la-u"}
                  borderColor={"#D8005D"}
                  titleButton={"Leer más"}
                />
              </div>
            </article>
          </LightSpeed>
        </Row>

        <br />

        {/*Astro Effect*/}
        <Row className="z-0 position-relative">
          <CardAstro />
        </Row>
        <br />
        <Row className="pb-5">
          <p className="mt-3 text-white fs-5">
            ¿Tienes más de un crush? Nada que un Halls no pueda resolver. <br />
            #RespiraYTomaUnImpulsoReal y descubre quién que te conviene. <br />
            ¿Aries, Tauro, Libra?
          </p>
          <div className="text-center">
            <Button
              url={"/fluye-en-la-u"}
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
