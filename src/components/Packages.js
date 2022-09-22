import React, { useState } from 'react'
import Package from './Package';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Packages = ({packages}) => {

    const [slideIndex, setSlideIndex] = useState(0);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 0.3
        }
      };

    return (
        <div>
            <Carousel 
                responsive={responsive}
                draggable={true}
                showDots={false}
                centerMode={true}
                focusOnSelect={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                beforeChange={(nextSlide, {currentSlide, onMove})=>{
                    setSlideIndex(Math.ceil(nextSlide));
                }}
            >
                {packages.map((pack, index)=>(
                    <Package currentSlide={slideIndex} index={index} name={pack.name} info={pack.info} price={pack.price} key={index} />
                ))}
            </Carousel>
        </div>
    )
}

export default Packages;