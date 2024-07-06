/*********************************************************************************
 *  WEB422 – Assignment 4
 *
 *  I declare that this assignment is my own work in accordance with Seneca's
 *  Academic Integrity Policy:
 *
 *  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 *  Name: Vinicius Souza da Silva Student ID: 135067221 Date: 05/07/2024
 *
 ********************************************************************************/

import { Row, Col, Image } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
        fluid
        rounded
        alt="Metropolitan Museum of Art"
      />
      <Row>
        <Col md={6}>
          <p>
            The Metropolitan Museum of Art of New York City, colloquially "the
            Met", is the largest art museum in the Americas. Its permanent
            collection contains over two million works, divided among 17
            curatorial departments. The main building at 1000 Fifth Avenue,
            along the Museum Mile on the eastern edge of Central Park on
            Manhattan's Upper East Side, is by area one of the world's largest
            art museums. A much smaller second location, The Cloisters at Fort
            Tryon Park in Upper Manhattan, contains an extensive collection of
            art, architecture, and artifacts from medieval Europe.
          </p>
        </Col>
        <Col md={6}>
          <p>
            The Met's founding was in 1870 with its mission to encourage and
            develop the study of the fine arts, and the application of arts to
            manufacturing and practical life. The permanent collection consists
            of works of art from classical antiquity and ancient Egypt,
            paintings and sculptures from nearly all the European masters, and
            an extensive collection of American and modern art. The Met
            maintains extensive holdings of African, Asian, Oceanian, Byzantine,
            and Islamic art. The museum is home to encyclopedic collections of
            musical instruments, costumes, and accessories, as well as antique
            weapons and armor from around the world. Several notable interiors,
            ranging from 1st-century Rome through modern American design, are
            installed in its galleries.
          </p>
          <p>
            For more information, visit the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia page
            </a>
            .
          </p>
        </Col>
      </Row>
    </>
  );
}
