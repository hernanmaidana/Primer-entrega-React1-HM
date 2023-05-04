import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <header>
      <div>
        <h1 class="bg-warning text-dark p-3">¡Bienvenidos a ArteWOW!</h1>

        <section class="mt-5 text-center text-justify">
        <p>
          Los accesorios que empleas dicen tanto de ti como la ropa que sueles
          llevar: ambos son expresión de tu personalidad. El complemento
          perfecto. Desde culturas milenarias, las joyas o accesorios son
          utilizados para varios fines: expresión de un estatus social o
          político, como Talismán (Objeto al que se le atribuye un poder mágico
          capaz de dar salud o suerte a la persona que lo tiene en su poder)
          como objeto de protección ante influencias o fuerzas negativas o como
          instrumento para conexión con lo divino. Actualmente, los accesorios o
          joyas son portados como complementos para lucir bien, pero también
          como identificación simbólica o talismán. Pensando en esto,
          Diferentemente te brinda la oportunidad de adquirir accesorios
          simbólicos que armonizan con tu forma de ser o te ayuda en la
          atracción de salud, bienestar, abundancia. De igual manera, pueden
          actuar como protección o canalizadores energéticos.
        </p>
        </section>

        <h2 >¡Hecho a mano, con mucho AMOR!</h2>

      </div>

      <div> <img src="/img/tiras-colores.jpg" /> </div>


      <body>
      <Row xs={2} md={3} className="g-4">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img/icono-pulseras.jpg" />
      <Card.Body>
        <Card.Title>Pulsera</Card.Title>
        <Card.Text>
          Pulseras
        </Card.Text>
        <Button variant="primary">Ver más!</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img/icono-aromatizador.png" />
      <Card.Body>
        <Card.Title>Aromatizadores</Card.Title>
        <Card.Text>
          Aromatizadores
        </Card.Text>
        <Button variant="primary">Ver más!</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img/icono-kits.png" />
      <Card.Body>
        <Card.Title>Kits</Card.Title>
        <Card.Text>
          Kits
        </Card.Text>
        <Button variant="primary">Ver más!</Button>
      </Card.Body>
    </Card>

    </Row>
    </body>



    </header>
  );
};
export default Home;
