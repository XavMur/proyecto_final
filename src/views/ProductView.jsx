import Carousel from 'react-bootstrap/Carousel';

export const ProductView = () => {
  return (
    <div className="product-view">
        <div className="product-name">
            Name
        </div>
        <div className="product-carousel">
        <Carousel>
            <Carousel.Item>
            <img src='https://profutbolista.com/wp-content/uploads/2023/07/1571165602_906420_1571166462_noticia_normal.jpg'
                 width={'100%'} />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='https://cdn.conmebol.com/wp-content/uploads/2018/01/roe_.jpg'
                 width={'100%'} />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='https://i.ytimg.com/vi/_i0_AHFSQ6s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBAMI9Gbud7Ubj0MzyHo2fXzzqdRA'
                 width={'100%'} />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        <div className="product-description">
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas consequuntur pariatur delectus facilis facere quasi non accusamus atque fuga illo cum vel, similique sint eos. Quia eum quasi suscipit error? Facilis dignissimos omnis, laudantium aliquid ea enim. Ullam aperiam modi, repellat exercitationem rem fugiat vel reprehenderit sit tenetur temporibus ducimus beatae quae obcaecati cum ipsam voluptate commodi deleniti repellendus nihil. Possimus atque vero odio? Rerum dolores sint sit culpa id, alias delectus distinctio tenetur, odit ut obcaecati. Laborum minima odio numquam ratione nam aliquam expedita temporibus distinctio recusandae, quam ipsa. Maiores nulla consequatur totam dolorum beatae rem praesentium error perspiciatis cupiditate excepturi odio voluptas facilis blanditiis tempora labore pariatur reprehenderit, aliquam minus, iure dolor facere expedita at. Quos eveniet molestiae ipsa debitis cupiditate architecto rerum aliquid corporis, aspernatur laudantium, aperiam eum minima laborum iste nesciunt consectetur adipisci, harum quis perspiciatis? Esse vero enim iste, eius ratione libero accusantium natus at similique incidunt vitae, minima sint numquam error et doloremque nihil optio excepturi nulla autem repellendus doloribus. Ut ex possimus sit autem ad vero quod adipisci voluptatum. Necessitatibus pariatur dolores, praesentium distinctio doloribus voluptate possimus quas autem eveniet. Eaque eius, sequi inventore et vero ex maxime, culpa quisquam perferendis voluptatum rerum!</h1>
        </div>
    </div>
  )
}

export default ProductView;