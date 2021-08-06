/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Thaer Al Jomhawi{" "}
                        <span>Full Stack Web Developer</span>
                      </h1>
                      <p className="lead text-white">
                        I get excited about programming because I know the end products will save me from doing the same tasks repeatedly.
                        When working on large scale projects, it is extremely satisfying to see the data correctly flow between the systems and the users appreciate the end products.
                        I feel empowered when all the data are nicely consolidated and they are easy to use to answer your questions.
                      </p>

                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-diamond" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Gemholica Website
                          </h6>
                          <p className="description mt-3">
                            Code201 final project
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Css
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://asac-teamhexagon.github.io/Gemstone-Project/"
                            onClick={e => e.preventDefault()}
                          >
                            Go to Website
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Code 301 Project
                          </h6>
                          <p className="description mt-3">
                            Soon !
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              React JS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Node JS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#Thaer"
                            onClick={e => e.preventDefault()}
                          >
                            Go to Website
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Code 401 Project
                          </h6>
                          <p className="description mt-3">
                            Soon!
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Soon
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Soon
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Soon
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#Thaer"
                            onClick={e => e.preventDefault()}
                          >
                            Go to website
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-circle-08" />
                    </div>
                    <h3>My Background</h3>
                    <p>
                    Thaer Al Jomhawi, 26 years old, studied chemical engineering at BAU, graduated in 2017.
                     Worked as a Validation Engineer at the pharmaceutical industry field for four years.
                    Now I am A Full Stack Web Developer in the ASAC Software Development course .
                    </p>
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

        </main>
        
      </>
    );
  }
}

export default Landing;
