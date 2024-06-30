import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import SerieDue from './SerieDue';
import SerieUno from './SerieUno';
import SerieTre from './SerieTre';


class ContentMain extends Component {
  render() {
    return (
      <>
        <Container className="mt-4">
          <div className="d-flex align-items-center">
            <h2 className="text-white pe-5 py-5" id="text1">Tv Shows</h2>
            
            <Dropdown>
          <Dropdown.Toggle variant="secondary" className="bg-dark">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Commedy</Dropdown.Item>
            <Dropdown.Item href="#">Fantasy</Dropdown.Item>
            <Dropdown.Item href="#">Movie Tv</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          </div>
        </Container>

        <Container>
          <section>
            <div className="Tv d-flex mb-1">
              <h2 className=" text-white" id="text1">Trending Now</h2>
              <div className="tredingMenu d-flex ms-auto w-50 h-25 d-flex justify-content-end align-items-center">
                <div className="border border pb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                  </svg>
                </div>
                <div className="border border pb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="white" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </div>
              </div>
            </div>
            <Row id="riga1">
              <SerieUno/>
            </Row>
          </section>
          <section>
            <h2 className="mb-2 text-white d-flex justify-content-between mt-4" id="text1">Watch It Again</h2>
            <Row>
            <SerieDue/>
            </Row>
          </section>
        </Container>

        <Container>
          <section className="mb-3">
            <h2 className="mb-3 text-white d-flex justify-content-between mt-4" id="text1">New Release</h2>
            <Row>
           <SerieTre/>
            </Row>
          </section>
        </Container>
      </>
    );
  }
}

export default ContentMain;
