import { Typography } from "@mui/material";
import { Button, Col } from "react-bootstrap";
import dion from "../assets/dion.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import InstagramIcon from "@mui/icons-material/Instagram";

import kasih2 from "../assets/kasih2.jpeg";
const SecondSlide = () => {
  return (
    <div align="center">
      <Col lg={6} md={10} sm={12} xs={12}>
        <div
          align="center"
          style={{
            marginTop: "10rem",
            backgroundColor: "#f5f5f4",
            borderRadius: "3rem",
            position: "relative",
            zIndex: "10",
            paddingBottom: "3rem",
          }}
        >
          <ScrollAnimation animateIn="animate__fadeInLeft">
            <img
              src={dion}
              style={{
                borderRadius: "3rem",
              }}
            />
          </ScrollAnimation>

          <Col md={6} xs={10}>
            <ScrollAnimation animateIn="animate__fadeIn">
              <div
                style={{
                  marginTop: "3vw",
                  paddingTop: "2rem",
                }}
              >
                <Typography
                  fontFamily={"'Supermercado One', cursive"}
                  fontSize={{
                    md: 23,
                    xs: 18,
                  }}
                >
                  Dion Disemenggar Penanda Kwarta Putra
                </Typography>
                <hr style={{ border: "2px solid" }} />
                <Typography
                  fontFamily={"'Supermercado One', cursive"}
                  fontSize={{
                    md: 22,
                    xs: 17,
                  }}
                >
                  Putra Dari:
                </Typography>
                <Typography
                  fontFamily={"'Supermercado One', cursive"}
                  fontSize={{
                    md: 20,
                    xs: 15,
                  }}
                >
                  Alm. Bapak Yulmazri Mazni
                </Typography>
                <Typography
                  fontFamily={"'Supermercado One', cursive"}
                  fontSize={{
                    md: 20,
                    xs: 15,
                  }}
                >
                  Almh. Ibu Asmemi Niarti
                </Typography>
                <Typography
                  fontSize={{
                    md: 20,
                    xs: 15,
                  }}
                >
                  <Button
                    variant="dark"
                    onClick={() => {
                      const link = "https://www.instagram.com/dionmazri/";
                      window.open(link, "_blank");
                    }}
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    <InstagramIcon /> dionmazri
                  </Button>
                </Typography>
              </div>
            </ScrollAnimation>
          </Col>

          <ScrollAnimation animateIn="animate__fadeInRight">
            <img
              src={kasih2}
              style={{
                borderRadius: "3rem",
                marginTop: "4rem",
              }}
            />
          </ScrollAnimation>

          <Col md={3} xs={10}>
            <ScrollAnimation animateIn="animate__fadeIn">
              <div
                style={{
                  marginTop: "3vw",
                  paddingTop: "2rem",
                }}
              >
                <Typography
                  fontFamily={"'Supermercado One', cursive"}
                  fontSize={{
                    md: 23,
                    xs: 18,
                  }}
                >
                  Kasih Firdaus
                </Typography>
                <hr style={{ border: "2px solid" }} />
                <Typography
                  fontFamily={"'Supermercado One', cursive"}
                  fontSize={{
                    md: 22,
                    xs: 17,
                  }}
                >
                  Putri Dari:
                </Typography>
                <Typography
                  fontFamily={"'Supermercado One', cursive"}
                  fontSize={{
                    md: 20,
                    xs: 15,
                  }}
                >
                  Bapak Firdaus
                </Typography>
                <Typography
                  fontFamily={"'Supermercado One', cursive"}
                  fontSize={{
                    md: 20,
                    xs: 15,
                  }}
                >
                  Ibu Neng Sunarti
                </Typography>
                <Typography
                  fontSize={{
                    md: 20,
                    xs: 15,
                  }}
                >
                  <Button
                    variant="dark"
                    onClick={() => {
                      const link = "https://www.instagram.com/alvarheo/";
                      window.open(link, "_blank");
                    }}
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    <InstagramIcon /> alvarheo
                  </Button>
                </Typography>
              </div>
            </ScrollAnimation>
          </Col>
        </div>
      </Col>
    </div>
  );
};

export default SecondSlide;
