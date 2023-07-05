import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Form, Card, Col, Button, Modal } from "react-bootstrap";
import server from "../server";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RedeemIcon from "@mui/icons-material/Redeem";
import { CopyToClipboard } from "react-copy-to-clipboard";
import bni from "../assets/bni.png";
import bri from "../assets/bri.png";
function MyVerticallyCenteredModal(props) {
  const [copyDion, setCopyDion] = useState(false);

  const [copyKasih, setCopyKasih] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Wedding gift
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={bni}
          style={{
            width: "8rem",
          }}
        />
        <Stack direction={"row"} spacing={2}>
          <Form.Control disabled value="0983724616" />
          <CopyToClipboard text="0983724616">
            <Button
              variant="dark"
              disabled={copyDion ? true : false}
              onClick={() => {
                setCopyDion(true);
                setTimeout(() => {
                  setCopyDion(false);
                }, 1000);
              }}
            >
              <ContentCopyIcon />
            </Button>
          </CopyToClipboard>
        </Stack>
        <div
          style={{
            marginTop: "0.5rem",
          }}
        >
          <span>a.n Dion Disemenggar</span>
        </div>
        {copyDion && (
          <div
            align="center"
            style={{
              marginTop: "0.5rem",
            }}
          >
            <span style={{ color: "green" }}>Berhasil Dicopy</span>
          </div>
        )}
        <hr
          style={{
            border: "3px solid",
            borderRadius: "7px",
          }}
        />
        <img
          src={bri}
          style={{
            width: "6rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        />
        <Stack direction={"row"} spacing={2}>
          <Form.Control disabled value="550501031850534" />
          <CopyToClipboard text="550501031850534">
            <Button
              variant="dark"
              disabled={copyKasih ? true : false}
              onClick={() => {
                setCopyKasih(true);
                setTimeout(() => {
                  setCopyKasih(false);
                }, 1000);
              }}
            >
              <ContentCopyIcon />
            </Button>
          </CopyToClipboard>
        </Stack>
        <div
          style={{
            marginTop: "0.5rem",
          }}
        >
          <span>a.n Kasih Firdaus</span>
        </div>
        {copyKasih && (
          <div
            align="center"
            style={{
              marginTop: "0.5rem",
            }}
          >
            <span style={{ color: "green" }}>Berhasil Dicopy</span>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const FourthSlide = (props) => {
  const { kepada } = props;
  const [modalShow, setModalShow] = useState(false);

  const [komentar, setKomentar] = useState();
  const [sukses, setSukses] = useState("");
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState({
    nama: "",
    type: "",
    komentar: "",
  });
  const [required, setRequired] = useState({
    nama: "",
    komentar: "",
  });
  const [error, setError] = useState();
  const getKomentar = async () => {
    try {
      const { data } = await server({
        url: "allKomentar",
        method: "GET",
      });
      setKomentar(data);
    } catch (err) {
      setError(err.response.data);
    }
  };
  useEffect(() => {
    getKomentar();
    if (kepada !== null) {
      if (kepada.type !== "Individual") {
        setBody({ ...body, type: kepada?.nama });
      } else {
        setBody({ ...body, nama: kepada?.nama, type: kepada?.type });
      }
    }
  }, []);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div align="center">
        <Col
          lg={6}
          md={10}
          sm={12}
          xs={12}
          style={{
            padding: "1rem",
          }}
        >
          <Button
            onClick={() => setModalShow(true)}
            variant="dark"
            style={{
              marginBottom: "1rem",
            }}
          >
            <RedeemIcon /> Wedding gift
          </Button>
          {error && (
            <span
              style={{
                color: "red",
              }}
            >
              Maaf Terjadi Kesalahan
            </span>
          )}
          {kepada !== null && (
            <Form
              style={{
                textAlign: "left",
              }}
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    const value = e.target.value;
                    setBody({ ...body, nama: e.target.value });
                    if (value) {
                      setRequired({ ...required, nama: "" });
                    }
                  }}
                  value={body.nama}
                  placeholder={kepada.type === "Individual" ? kepada.nama : ""}
                  disabled={kepada.type === "Individual" ? true : false}
                />
                {required.nama && (
                  <span style={{ color: "red" }}>
                    * nama tidak boleh kosong
                  </span>
                )}
              </Form.Group>
              {kepada.type !== "Individual" && (
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Grup</Form.Label>
                  <Form.Control value={kepada.nama} disabled />
                </Form.Group>
              )}

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Pesan</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={body.komentar}
                  onChange={(e) => {
                    const value = e.target.value;
                    setBody({ ...body, komentar: e.target.value });
                    if (value) {
                      setRequired({ ...required, komentar: "" });
                    }
                  }}
                />
                {required.komentar && (
                  <span style={{ color: "red" }}>
                    * Pesan tidak boleh kosong
                  </span>
                )}
              </Form.Group>
              <Button
                disabled={loading}
                onClick={() => {
                  setLoading(true);
                  if (!body.nama) {
                    setRequired({ ...required, nama: true });
                  } else if (!body.komentar) {
                    setRequired({ ...required, komentar: true });
                  } else {
                    if (kepada.type === "Individual") {
                      setBody({
                        ...body,
                        komentar: "",
                      });
                    } else {
                      setBody({
                        ...body,
                        nama: "",
                        komentar: "",
                      });
                    }
                    setRequired({ nama: "", komentar: "" });
                    server({
                      url: "komentar",
                      method: "POST",
                      headers: {
                        access_token: localStorage.getItem("to"),
                      },
                      data: body,
                    })
                      .then(() => {
                        setSukses(true);
                        setError(false);
                      })
                      .then(() => {
                        getKomentar();
                      })
                      .catch(() => {
                        setSukses(false);
                        setError(true);
                      });
                  }

                  setLoading(false);
                }}
                variant="dark"
              >
                Simpan
              </Button>
            </Form>
          )}
          <br />
          {sukses && (
            <span
              style={{
                color: "green",
              }}
            >
              Pesan anda berhasil di tambahkan
            </span>
          )}
          <Card
            style={{
              marginTop: "1rem",
              borderRadius: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              marginBottom: "4rem",

              textAlign: "left",
            }}
          >
            <Card.Header>Ucapan Selamat</Card.Header>
            <Card.Body
              style={{
                overflow: "auto",
                minHeight: "5rem",
                maxHeight: "50rem",
              }}
            >
              <Stack spacing={2} marginTop={1}>
                {komentar?.map((el) => (
                  <Card
                    key={el.id}
                    style={{
                      borderRadius: 15,
                    }}
                  >
                    <Card.Header>
                      <span>
                        <b>{el.nama}</b>{" "}
                        {el.type !== "Individual" && `"${el.type}"`}
                      </span>
                    </Card.Header>

                    <Card.Body>{el.komentar}</Card.Body>
                  </Card>
                ))}
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default FourthSlide;
