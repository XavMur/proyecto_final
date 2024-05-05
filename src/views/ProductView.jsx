import CarouselComponent from "../components/CarouselComponent";

export const ProductView = () => {

    let items = [{
        "id":1,
        "img":'https://profutbolista.com/wp-content/uploads/2023/07/1571165602_906420_1571166462_noticia_normal.jpg',
        "title":"AAA",
        "description":"CCC"
    },
    {
        "id":2,
        "img":'https://profutbolista.com/wp-content/uploads/2023/07/1571165602_906420_1571166462_noticia_normal.jpg',
        "title":"BBB",
        "description":"XXX"
    }]
  return (
    <div className="product-view">
        <div className="product-name">
            Name
        </div>
        <div className="product-carousel">
            <CarouselComponent items={items} />
            
        </div>
        <div className="product-description">
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas consequuntur pariatur delectus facilis facere quasi non accusamus atque fuga illo cum vel, similique sint eos. Quia eum quasi suscipit error? Facilis dignissimos omnis, laudantium aliquid ea enim. Ullam aperiam modi, repellat exercitationem rem fugiat vel reprehenderit sit tenetur temporibus ducimus beatae quae obcaecati cum ipsam voluptate commodi deleniti repellendus nihil. Possimus atque vero odio? Rerum dolores sint sit culpa id, alias delectus distinctio tenetur, odit ut obcaecati. Laborum minima odio numquam ratione nam aliquam expedita temporibus distinctio recusandae, quam ipsa. Maiores nulla consequatur totam dolorum beatae rem praesentium error perspiciatis cupiditate excepturi odio voluptas facilis blanditiis tempora labore pariatur reprehenderit, aliquam minus, iure dolor facere expedita at. Quos eveniet molestiae ipsa debitis cupiditate architecto rerum aliquid corporis, aspernatur laudantium, aperiam eum minima laborum iste nesciunt consectetur adipisci, harum quis perspiciatis? Esse vero enim iste, eius ratione libero accusantium natus at similique incidunt vitae, minima sint numquam error et doloremque nihil optio excepturi nulla autem repellendus doloribus. Ut ex possimus sit autem ad vero quod adipisci voluptatum. Necessitatibus pariatur dolores, praesentium distinctio doloribus voluptate possimus quas autem eveniet. Eaque eius, sequi inventore et vero ex maxime, culpa quisquam perferendis voluptatum rerum!</h1>
        </div>
    </div>
  )
}

export default ProductView;