import Card from 'react-bootstrap/Card';
import imagenPrincipal from '../assets/images/portada-baranda.jpg'
import '../assets/css/main.css'

function Main () {
  return (
    <Card className="bg-dark text-white text-center main">
      <Card.Img src={imagenPrincipal} alt="Imagen de una Baranda" />
      <Card.ImgOverlay>
        <Card.Title>ER A°I°</Card.Title>
        <Card.Text>
        Nuestra empresa tiene más de 25 años realizando los más exquisitos trabajos en acero inoxidable. La perfección y el cuidado de los detalles son nuestra carta de presentación.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Main;