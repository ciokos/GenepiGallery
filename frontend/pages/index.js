import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Form, Button, FormControl, Card, Container, Row, Col } from 'react-bootstrap'
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
          <div >
          <div class="embed-responsive embed-responsive-16by9">
          <img className="card-img-top embed-responsive-item" src={props.projects[x].image_url}></img>

          </div>
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
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#pricing"></Nav.Link>
          <Nav.Link href="/about">Genepi</Nav.Link>
        </Nav>
        <style jsx global>{`
        .img {
          width: 10px;
        }

        .navbar {
          justify-content: center;
        }

        .navbar-nav {
          margin-right: 0px !important;
        }
      `}</style>
      </Navbar>

      <Container className={styles.container}>
        {props.projects.map(function(element, i) {

          if(i%3 == 0)
          return(

            <Row>
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
          padding: 0px;
          margin-bottom: 12px;
          transition: margin-bottom 0.2s;
        }
        
        .card {
          margin: 10px;
          margin-bottom: 0px;
          cursor: pointer;
          height: 100%;
          transition: margin 0.2s, height 0.2s;
        }

        .col:hover {
          margin-bottom: 0px;
        }

        .col:hover .card {
          margin: 6px;
          height: 100%;
        }

        
      `}</style>
      </Container>

    </div>
  )
}
