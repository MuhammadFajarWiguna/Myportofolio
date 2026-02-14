import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../FaqPages/FaqComponent";

const SyaratKetPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2">Syarat & Ketentuan</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque voluptatibus hic maiores consequatur aperiam ducimus similique, corporis pariatur tempora possimus exercitationem fugit aspernatur nemo dolores
                doloremque. In, provident vitae. Quae laudantium veritatis quo quas.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Lorem</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, temporibus adipisci fugit veniam iusto neque debitis placeat iure, dolor porro libero. Blanditiis aliquam illum similique.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores laboriosam sunt id dolorum libero blanditiis expedita ratione quod. Rem natus eius perspiciatis neque, magni aut!</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Lorem</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ut repellendus rerum repudiandae facilis non animi, libero dolor aliquid assumenda ipsa. Expedita fuga iste deserunt!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam quam quas, ducimus iure magni amet? Blanditiis aliquam omnis obcaecati dolorem autem, nihil impedit dolorum.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Lorem</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorum quis aliquid atque eum consectetur cupiditate omnis eos repellat voluptatibus consequuntur ab, labore porro! Quae.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent/>
    </div>
  );
};

export default SyaratKetPage;
