import Carousel from 'react-bootstrap/Carousel';

export const CarouselComponent = ({items,height,width}) => {
  return (
    <Carousel style={{width:width}}>
        {
            items.map(item=>(
                <Carousel.Item key={item.id}>
                <img
                    className='carousel' 
                    src={item.img}
                    style={{ width: '100%', height: 'auto', maxHeight: height }} 
                />
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
