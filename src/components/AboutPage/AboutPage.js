import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Subtitle from "../UI/Subtitle/Subtitle";
import './AboutPage.css'
import ButtonFullFilled from "../UI/ButtonFullFilled/ButtonFullFilled";
import profileImage from "../../assets/img/profile-image.png";

const AboutPage = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Row className="justify-content-md-center">
        <Subtitle></Subtitle>
      </Row>
      <Row>
        <Col sm={4}><img className="profile-image" src={profileImage} alt="profile image"/></Col>
        <Col sm={8}>
            <Row className="who-i-am">Who I Am?</Row>
            <Row>
              <p className="description-who-i-am">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                tellus semper lacus varius suscipit. Suspendisse pulvinar, justo
                id scelerisque efficitur, quam augue pharetra metus, ultricies
                finibus elit ipsum vitae. Cupiditate recusandae laudantium esse,
                harum animi aspernatur quisquam et delectus ipsum quam alias
                quaerat? Quasi hic quidem illum
              </p>
            </Row>
          <Row>
            <ButtonFullFilled></ButtonFullFilled>
          </Row>
        </Col>
      </Row>
    </Container>
  );
});

export default AboutPage;
