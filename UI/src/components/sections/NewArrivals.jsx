import React from 'react'
import Jeans from '../../assets/img/jeans.jpg'
import Shirts from '../../assets/img/shirts.jpg'
import Tshirt from '../../assets/img/tshirts.jpeg'
import dresses from '../../assets/img/dresses.jpg'
import joggers from '../../assets/img/joggers.jpg'
import Kurtis from '../../assets/img/kurtis.jpg'

import SectionHeading from './SectionsHeading/SectionHeading'
import './NewArrivals.css';
import Card from '../Card/Card'
import Carousel from 'react-multi-carousel'
import { responsive } from '../../utils/Section.constants'

const NewArrivals = () => {

    const items = [{
        'title': 'Jeans',
        imagePath: Jeans
    }, {
        'title': 'Shirts',
        imagePath: Shirts
    }, {
        'title': 'T-Shirts',
        imagePath: Tshirt
    }, {
        'title': 'Dresses',
        imagePath: dresses
    },
    {
        'title': 'Joggers',
        imagePath: joggers
    },
    {
        'title': 'Kurtis',
        imagePath: Kurtis
    },
    {
        'title': 'T-Shirts',
        imagePath: Tshirt
    }, {
        'title': 'Dresses',
        imagePath: dresses
    },
    {
        'title': 'Joggers',
        imagePath: joggers
    },
    {
        'title': 'Kurtis',
        imagePath: Kurtis
    }
    ];
    return (
        <>
            <SectionHeading title='New Arrivals' />
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={false}
                showDots={false}
                infinite={false}
                partialVisible={false}
                itemClass={'react-slider-custom-item'}
                className='px-8'
            >
                {items && items?.map((item, index) => <Card key={item?.title + index} title={item.title} imagePath={item.imagePath} />)}

            </Carousel>

        </>
    )
}

export default NewArrivals
