import React from 'react'
import { Navbar, Nav, Form, Button, FormControl, Card, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import styles from'../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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
        <Row>
          <Col>
            <Card>
                <img className="card-img-top" src="/img1.jpg"></img>
                <Card.Body>
                    <Card.Title class="card-title">Amazing Data One</Card.Title>
                    <Card.Text class="card-text">Lorem ipsum dolor sit amet, adipisicing elit. Eos rerum dolorum, est voluptatem modi accusantium perspiciatis ...</Card.Text>
                </Card.Body>
                {/* style="font-size: 12px; border-top: 1px dashed; text-align: center" */}
                {/* <Card.Footer>
                        <a href="#" className="card-link muted float-right mx-0"><i class="far fa-comments"></i>Read More</a>
                </Card.Footer> */}
            </Card>
          </Col>
          <Col>
          <Card>
                <img className="card-img-top" src="/img2.jpg"></img>
                <Card.Body>
                    <Card.Title class="card-title">Amazing Data Two</Card.Title>
                    <Card.Text class="card-text">Lorem ipsum dolor sit amet, adipisicing elit. Eos rerum dolorum, est voluptatem modi accusantium perspiciatis ...</Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card onClick={() => {window.open("https://www.google.com", "_blank")}}>
                <img className="card-img-top" src="/img3.jpg"></img>
                <Card.Body>
                    <Card.Title class="card-title">Amazing Data Three</Card.Title>
                    <Card.Text class="card-text">Lorem ipsum dolor sit amet, adipisicing elit. Eos rerum dolorum, est voluptatem modi accusantium perspiciatis ...</Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
                <img className="card-img-top" src="/img4.jpg"></img>
                <Card.Body>
                    <Card.Title class="card-title">Amazing Data Four</Card.Title>
                    <Card.Text class="card-text">Lorem ipsum dolor sit amet, adipisicing elit. Eos rerum dolorum, est voluptatem modi accusantium perspiciatis ...</Card.Text>
                </Card.Body>
                {/* style="font-size: 12px; border-top: 1px dashed; text-align: center" */}
                {/* <Card.Footer>
                        <a href="#" className="card-link muted float-right mx-0"><i class="far fa-comments"></i>Read More</a>
                </Card.Footer> */}
            </Card>
          </Col>
          <Col>
          <Card>
                <img className="card-img-top" src="/img5.jpg"></img>
                <Card.Body>
                    <Card.Title class="card-title">Amazing Data Five</Card.Title>
                    <Card.Text class="card-text">Lorem ipsum dolor sit amet, adipisicing elit. Eos rerum dolorum, est voluptatem modi accusantium perspiciatis ...</Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card onClick={() => {window.location="https://www.google.com"}}>
                <img className="card-img-top" src="/img6.jpg"></img>
                <Card.Body>
                    <Card.Title class="card-title">Amazing Data Six</Card.Title>
                    <Card.Text class="card-text">Lorem ipsum dolor sit amet, adipisicing elit. Eos rerum dolorum, est voluptatem modi accusantium perspiciatis ...</Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Row>
        <style jsx global>{`
        .col {
          padding: 0px;
        }
        
        .card {
          margin: 10px;
          cursor: pointer;
          transition: margin 0.2s, height 0.2s;
        }

        .col:hover .card {
          margin: 6px;
          height: 100;
        }
      `}</style>
      </Container>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}

    </div>
  )
}
