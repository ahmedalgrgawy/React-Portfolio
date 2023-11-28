import React from 'react';
import img1 from '../../images/portfolio-1.png'
import img2 from '../../images/portfolio-2.png'
import img3 from '../../images/portfolio-3.png'
import img4 from '../../images/portfolio-4.png'
import img5 from '../../images/portfolio-5.png'
import img6 from '../../images/portfolio-6.png'

export const Projects = () => {
    return (
        <section className='projects' id='projects'>

            <h1 className='title'>Top Projects</h1>
            <span className='desc'>aadsd asdasd adsad asdasdas adasd asdasd aasdasas as asd ass asd aadasad</span>

            <div className='projectsGallery'>
                <img src={img1} alt='' className='prokectImg'></img>
                <img src={img2} alt='' className='prokectImg'></img>
                <img src={img3} alt='' className='prokectImg'></img>
                <img src={img4} alt='' className='prokectImg'></img>
                <img src={img5} alt='' className='prokectImg'></img>
                <img src={img6} alt='' className='prokectImg'></img>
            </div>

            <button className='btn'>See More</button>

        </section>
    )
}
