import React from "react";
import Subtitle from "../UI/Subtitle/Subtitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChartBarFlat from "../UI/ChartBarFlat/ChartBarFlat";

const SkillsPage = () => {
  const skills = [
    { id: 1, description: "HTML", percentage: 90 },
    { id: 2, description: "CSS", percentage: 80 },
    { id: 3, description: "JavaScript", percentage: 40 },
    { id: 4, description: "PHP", percentage: 50 },
    { id: 5, description: "Python", percentage: 10 },
    { id: 6, description: "Mysql", percentage: 50 },
  ];

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Subtitle text="My Skills"></Subtitle>
      </Row>
      <Row>
        <Col>
          <p className="description-who-i-am">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            tellus semper lacus varius suscipit. Suspendisse pulvinar, justo id
            scelerisque efficitur, quam augue pharetra metus, ultricies finibus
            elit ipsum vitae. Cupiditate recusandae laudantium esse, harum animi
            aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic
            quidem illum
          </p>
        </Col>
        <Col>
          <ul>
            {skills.map((skill) => (
              <ChartBarFlat
                key={skill.id}
                percentage={skill.percentage}
                description={skill.description}
              >
                {skill.description}
              </ChartBarFlat>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsPage;
