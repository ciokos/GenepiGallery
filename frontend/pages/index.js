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
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Container className={styles.container}>
        <Row>
          <Col>
            <Card>
                <img class="card-img-top" src="./img1.jpg"></img>
                <Card.Body>
                    <Card.Title class="card-title">Amazing Data One</Card.Title>
                    <Card.Text class="card-text">Lorem ipsum dolor sit amet, adipisicing elit. Eos rerum dolorum, est voluptatem modi accusantium perspiciatis ...</Card.Text>
                </Card.Body>
                {/* style="font-size: 12px; border-top: 1px dashed; text-align: center" */}
                <Card.Footer>
                        <a href="#" className="card-link muted float-right mx-0"><i class="far fa-comments"></i>Read More</a>
                </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              asdas
            </Card>
          </Col>
          <Col>
            <Card>
              asdas
            </Card>
          </Col>
        </Row>
        <style jsx global>{`
        .col {
          padding: 0px;
        }
        
        .card {
          margin: 10px;
          
          transition: margin 0.2s;
        }

        .col:hover .card {
          margin: 6px;
          
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
