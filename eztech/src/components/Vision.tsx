import { Container, Row, Col } from "react-bootstrap";
import "./Vision.css";

const Vision = () => {
  return (
    <div className="d-flex vision-section-bg">
      <Container>
        <Row className="align-items-center justify-content-between">
          <div className="px-1 vision-shape" />
          <Col xs={12} md={12} lg={4} className="d-flex flex-column">
            <div className="fs-3 fw-bold mobile-margin">VISION</div>
            <div className="fs-6 justify mt-3 mb-3">
              A top-notch IT Solutions Provider leading the industry in satisfying 
              the needs of businesses and organizations in the country.
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="image-placeholder3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vision;