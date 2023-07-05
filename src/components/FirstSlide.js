import React from "react";
import background3 from "../assets/background3.jpeg";
import { useSpring, animated } from "react-spring";
import { Col, Card, Row } from "react-bootstrap";
import { Typography } from "@mui/material";

const FirstSlide = () => {
  const animaseSatu = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
    config: { duration: 1000 },
  });
  const animaseDua = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1500,
    config: { duration: 1500 },
  });
  const animaseTiga = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2500,
    config: { duration: 1500 },
  });
  return (
    <div align="center">
      <Col lg={6} md={10} sm={12} xs={12}>
        <Card
          style={{
            marginTop: "3rem",
            backgroundImage: `url(${background3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 15,
            backgroundColor: "#ffe0b2",
            paddingTop: "2rem",
            paddingBottom: "4rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <animated.div style={animaseSatu}>
            <Card.Title
              style={{
                textAlign: "center",
                marginTop: "2rem",
                fontFamily: "'Comforter', cursive",
                fontSize: "3.4rem",
              }}
            >
              Dion & Kasih
            </Card.Title>
          </animated.div>

          <Card.Body>
            <animated.div style={animaseDua}>
              <Card
                style={{
                  marginTop: "2rem",
                  textAlign: "center",
                  backgroundColor: "rgba(245, 245, 245, 0.7)",
                  borderRadius: 15,
                }}
              >
                <Card.Body>
                  <Typography
                    fontSize={{
                      md: 20,
                      xs: 15,
                    }}
                  >
                    “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
                    menciptakan untukmu pasangan-pasangan dari jenismu sendiri,
                    supaya kamu cenderung dan merasa tenteram kepadanya, dan
                    dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya
                    pada yang demikian itu benar-benar terdapat tanda-tanda bagi
                    kaum yang berfikir.” <br />
                    (QS Ar-Rum : 21)
                  </Typography>
                </Card.Body>
              </Card>
            </animated.div>
            <animated.div style={animaseTiga}>
              <Card
                style={{
                  textAlign: "center",
                  backgroundColor: "rgba(245, 245, 245, 0.7)",
                  borderRadius: 15,
                  marginTop: "3rem",
                }}
              >
                <Card.Body>
                  <Typography
                    fontSize={{
                      md: 20,
                      xs: 15,
                    }}
                  >
                    Maha suci Allah SWT yang telah menciptakan makhluk-Nya
                    berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai
                    kasih sayang yang Kau ciptakan di antara putra-putri kami:
                  </Typography>
                </Card.Body>
              </Card>
            </animated.div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default FirstSlide;
