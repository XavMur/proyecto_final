import Carousel from 'react-bootstrap/Carousel';

export const CarouselComponent = ({items,height}) => {
  return (
    <Carousel>
        {
            items.map(item=>(
                <Carousel.Item key={item.id}>
                <img src={item.img}
                    style={{ width: '100%', height: 'auto', maxHeight: height }} />
                    <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
        }
    </Carousel>
  )
}
export default CarouselComponent
