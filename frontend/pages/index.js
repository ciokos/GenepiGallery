import React from 'react'
import { Navbar, Nav, Card, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import styles from'../styles/Home.module.css'


Home.getInitialProps = async function() {
  const res = await fetch('http://genepi-gallery-backend.herokuapp.com/projects');
  const data = await res.json();
  return {
    projects: data
  };
}

export default function Home(props) {

  const createCard = x => {
    if (props.projects[x] != undefined) {
      return(
        <Card onClick={() => {window.open(props.projects[x].url, "_blank")}}>
          <div className="embed-responsive embed-responsive-16by9">
            <img className="card-img-top embed-responsive-item" src={props.projects[x].image_url}></img>
          </div>
          <Card.Body>
              <Card.Title className="card-title">{props.projects[x].name}</Card.Title>
              <Card.Text className="card-text">{props.projects[x].description}</Card.Text>
          </Card.Body>
        </Card>
      )
    }
  }

  return (
    <div>
      <Head>
        <title>Genepi Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div id="wrapper">
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#pricing"></Nav.Link>
          <Nav.Link href="/about">Genepi</Nav.Link>
        </Nav>
        <style jsx global>{`
        .container {
          padding-bottom: 60px;
        }

        main {
          position: relative;
          min-height: 95vh;
        }

        html, #__next, #wrapper {
          height: 100%;
        }

        .img {
          width: 10px;
        }

        .navbar {
          justify-content: center;
        }

        .navbar-nav {
          margin-right: 0px !important;
        }

        #footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60px;
          background: #343a40;
      }

      #footer .footer-copyright {
          color: rgba(255,255,255,.5);
      }
      
      `}</style>
      </Navbar>

      <main>
        <Container className={styles.container}>
          {props.projects.map(function(element, i) {

            if(i%3 == 0)
            return(

              <Row key={i}>
                    <Col className="col-12 col-sm-12 col-md-4">
                      {createCard(i)}
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-4">
                      {createCard(i+1)}
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-4">
                      {createCard(i+2)}
                    </Col>
              </Row>
              )})}
          
          <style jsx global>{`
          .col {
            padding: 10px;
            transition: padding 0.2s;
          }
          
          .card {
            cursor: pointer;
            height: 100%;
          }

          .col:hover {
            padding: 6px;
          }

          .card-text {
            transition: padding 0.2s;
          }

          .col:hover .card-text {
            padding: 6px;
          }
        `}</style>
        </Container>

      <footer id="footer" className="container-fluid text-center text-md-left">
        <div className="footer-copyright text-center py-3">© 2020 Copyright: 
          <a href="https://www.google.com/">This link also redirects to Google</a>
        </div>
      </footer>
      </main>
      </div>
    </div>
  )
}
