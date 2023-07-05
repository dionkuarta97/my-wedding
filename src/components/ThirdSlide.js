import { Typography } from "@mui/material";
import { Col, Button } from "react-bootstrap";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const ThirdSlide = () => {
  return (
    <div align="center">
      <Col lg={6} md={10} sm={12} xs={12}>
        <div
          align="center"
          style={{
            marginTop: "-10rem",
            backgroundColor: "#1c1917",
            paddingTop: "17rem",
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottomLeftRadius: "3rem",
            borderBottomRightRadius: "3rem",
            color: "#FFFFFF",
          }}
        >
          <h1
            style={{
              fontFamily: "'Supermercado One', cursive",
            }}
          >
            Akad Nikah
          </h1>
          <Col xs={8}>
            <hr
              style={{
                border: "3px solid #FFFFFF",
                borderRadius: "7px",
              }}
            />
          </Col>
          <Typography
            fontSize={{
              md: 25,
              xs: 20,
            }}
          >
            JUMAT
          </Typography>
          <Typography
            mb={3}
            fontSize={{
              md: 25,
              xs: 20,
            }}
          >
            18 MARET 2022
          </Typography>
          <AccessTimeIcon sx={{ fontSize: 50 }} />
          <Typography
            mt={3}
            mb={2}
            fontSize={{
              md: 25,
              xs: 20,
            }}
          >
            09.30 WIB
          </Typography>
          <Col xs={8}>
            <Typography>
              Kediaman mempelai wanita Jorong Koto Malintang Nagari Bukik
              Limbuku
            </Typography>
          </Col>
          <Button
            variant="light"
            style={{
              marginTop: "1rem",
            }}
            onClick={() => {
              const link =
                "https://www.google.com/maps/place/Lokasi+Pesta/@-0.1960722,100.6823011,19z/data=!3m1!4b1!4m13!1m7!3m6!1s0x2e2ab3cf2308c91f:0x120e1ec8f682b0e6!2sBukik+Limbuku,+Kec.+Harau,+Kabupaten+Lima+Puluh+Kota,+Sumatera+Barat!3b1!8m2!3d-0.1906229!4d100.6956979!3m4!1s0x2e2ab37b23c1bb05:0xe49bce4ac32ef3f0!8m2!3d-0.1960736!4d100.6828528?hl=id";
              window.open(link, "_blank");
            }}
          >
            <MyLocationIcon /> Lihat Lokasi
          </Button>
          <h1
            style={{
              marginTop: "8rem",
              fontFamily: "'Supermercado One', cursive",
            }}
          >
            Resepsi
          </h1>
          <Col xs={8}>
            <hr
              style={{
                border: "3px solid #FFFFFF",
                borderRadius: "7px",
              }}
            />
          </Col>
          <Typography
            fontSize={{
              md: 25,
              xs: 20,
            }}
          >
            SABTU
          </Typography>
          <Typography
            mb={3}
            fontSize={{
              md: 25,
              xs: 20,
            }}
          >
            19 MARET 2022
          </Typography>
          <AccessTimeIcon sx={{ fontSize: 50 }} />
          <Typography
            mt={3}
            mb={2}
            fontSize={{
              md: 25,
              xs: 20,
            }}
          >
            09.00 WIB
          </Typography>
          <Col xs={8}>
            <Typography>
              Kediaman mempelai wanita Jorong Koto Malintang Nagari Bukik
              Limbuku
            </Typography>
          </Col>
          <Button
            variant="light"
            style={{
              marginTop: "1rem",
            }}
            onClick={() => {
              const link =
                "https://www.google.com/maps/place/Lokasi+Pesta/@-0.1960722,100.6823011,19z/data=!3m1!4b1!4m13!1m7!3m6!1s0x2e2ab3cf2308c91f:0x120e1ec8f682b0e6!2sBukik+Limbuku,+Kec.+Harau,+Kabupaten+Lima+Puluh+Kota,+Sumatera+Barat!3b1!8m2!3d-0.1906229!4d100.6956979!3m4!1s0x2e2ab37b23c1bb05:0xe49bce4ac32ef3f0!8m2!3d-0.1960736!4d100.6828528?hl=id";
              window.open(link, "_blank");
            }}
          >
            <MyLocationIcon /> Lihat Lokasi
          </Button>
        </div>
      </Col>
    </div>
  );
};

export default ThirdSlide;
