import Carousel from 'react-bootstrap/Carousel';

export const CarouselComponent = ({
    items,
    height = 'auto',
    maxheight = 'auto',
    width = 'auto'
}) => {
  return (
    <Carousel style={{width:width}}>
        {
            items.map(item=>(
                <Carousel.Item key={item.id}>
                <img
                    className='carousel' 
                    src={item.img}
                    style={{ width: '100%', height: height, maxHeight: maxheight }} 
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
