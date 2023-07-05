import { useSpring, animated } from "react-spring";

import background2 from "../assets/background2.jpeg";
import Box from "@mui/material/Box";
import { Button, Col, Card } from "react-bootstrap";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import server from "../server";
import { Typography } from "@mui/material";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}
const FirstScreen = (props) => {
  let query = useQuery();
  const to = query.get("to");
  const [error, setError] = useState(false);
  const [kepada, setKepada] = useState(null);
  const { onClick, undangan } = props;
  const navigate = useNavigate();
  const props1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
    config: { duration: 1000 },
  });
  const props2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 1000,
  });
  const props3 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 3000,
  });

  const getUndangan = async () => {
    try {
      const { data } = await server({
        url: "read",
        method: "POST",
        data: {
          to,
        },
      });
      setKepada(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error]);

  useEffect(() => {
    getUndangan();
  }, []);

  return (
    <>
      <div
        align="center"
        style={{
          position: "absolute",
          width: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          msTransform: "translate(-50%, -50%)",
        }}
      >
        <Col lg={6} md={10} sm={12} xs={12}>
          <Card
            style={{
              backgroundImage: `url(${background2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#ffe0b2",
              paddingTop: "2.2rem",
              paddingBottom: "4rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <animated.div align="center" style={props2}>
              <h1
                style={{
                  marginTop: "1rem",
                  fontFamily: "'Supermercado One', cursive",
                  color: "whitesmoke",
                }}
              >
                The wedding of
              </h1>
            </animated.div>
            <div style={{ marginTop: "2rem", marginBottom: "19rem" }}>
              <animated.div align="center" style={props1}>
                <p
                  style={{
                    fontFamily: "'Comforter', cursive",
                    color: "whitesmoke",
                    fontSize: "3rem",
                  }}
                >
                  <b>Dion & Kasih</b>
                </p>
              </animated.div>
            </div>
            <animated.div style={props3} align="center">
              {undangan && (
                <>
                  <span
                    style={{
                      fontFamily: "'Supermercado One', cursive",
                      color: "whitesmoke",
                      fontSize: "1.5rem",
                    }}
                  >
                    Kepada YTH :
                  </span>
                  <Col lg={6} md={6} sm={8} xs={8}>
                    <Card
                      style={{
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        borderRadius: 15,
                        color: "whitesmoke",
                      }}
                    >
                      <Card.Body>
                        <Typography
                          fontSize={{
                            md: 20,
                            xs: 17,
                          }}
                        >
                          {kepada?.nama_undangan}
                        </Typography>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )}

              <Button
                variant="dark"
                onClick={() => {
                  onClick();
                  localStorage.setItem("to", to);
                  if (kepada) {
                    navigate("/wedding", { state: { kepada } });
                  } else {
                    navigate("/wedding", { state: { kepada: null } });
                  }
                }}
                style={{ marginTop: "2rem" }}
              >
                <EmailIcon /> Buka Undangan
              </Button>
            </animated.div>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default FirstScreen;
