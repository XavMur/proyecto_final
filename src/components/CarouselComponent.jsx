import Carousel from 'react-bootstrap/Carousel';

export const CarouselComponent = ({items}) => {
  return (
    <Carousel>
        {
            items.map(item=>(
                <Carousel.Item key={item.id}>
                <img src={item.img}
                    width={'100%'} />
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
