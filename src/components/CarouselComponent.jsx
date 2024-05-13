import Carousel from 'react-bootstrap/Carousel';

export const CarouselComponent = ({
    items,
    height = 'auto',
    maxheight = 'auto',
    width = 'auto'
}) => {
  return (
    <Carousel style={{width:width}}>
        <Carousel.Item>
            <img
                className='carousel' 
                src={items.imagenproducto}
                style={{ width: '100%', height: height, maxHeight: maxheight }} 
            />
                <Carousel.Caption>
                <h3>{items.nombreproducto}</h3>
                <p>{items.descripcion}</p>
                </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
export default CarouselComponent
