import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Galleria extends Component {
  state = {
    film: [],
    caricamento: true,
    errore: false,
  };

  fetchFilm = () => {
    const { query } = this.props;
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=c5d9311`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Errore nella chiamata');
        }
      })
      .then((data) => {
        if (data.Search) {
          this.setState({ 
            film: data.Search.slice(0, 5), // Prendi solo i primi 5 film
            caricamento: false,
          });
        } else {
          this.setState({ 
            errore: true,
            caricamento: false,
          });
        }
        console.log(data);
      })
      .catch((e) => {
        console.log('error', e);
        this.setState({ caricamento: false, errore: true });
      });
  };

  componentDidMount() {
    this.fetchFilm();
  }

  render() {
    const { film, caricamento, errore } = this.state;
    const { titolo } = this.props;

    if (caricamento) {
      return <div>Caricamento...</div>;
    }

    if (errore) {
      return <div>Errore di caricamento</div>;
    }

    return (
      <Container>
        <h3>{titolo}</h3>
        <div className="card-container">
          {film.map((movie) => (
            <Card key={movie.imdbID} className="cardSolid rounded-3">
              <Card.Img variant="top" src={movie.Poster} className="cardImg rounded-3" />
            </Card>
          ))}
        </div>
      </Container>
    );
  }
}

export default Galleria;
