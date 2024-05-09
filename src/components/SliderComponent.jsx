import React from 'react';
import { Carousel } from 'react-bootstrap';

const SliderComponent = ({ width, height, maxheight, items }) => {
    const groupedItems = [];
    for (let i = 0; i < items.length; i += 4) {
        groupedItems.push(items.slice(i, i + 4));
    }

    return (
        <Carousel indicators={false} style={{ width: "100%" }}>
            {groupedItems.map((group, index) => (
                <Carousel.Item key={index}>
                    <div style={{ display: 'flex'}}>
                        {group.map(item => (
                            <div key={item.id} style={{ margin:"0" ,display: "flex", justifyContent:"center"}}>
                                <img
                                    className='carousel'
                                    src={item.img}
                                    style={{ width: '50%', height: height, maxHeight: maxheight }}
                                    alt={item.title}
                                />
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default SliderComponent;