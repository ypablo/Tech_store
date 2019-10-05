import React from 'react'
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'

export default function Info() {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" alt="about" style={{background:"var(--darkGrey)"}}/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="about us"></Title>
                        <p className="text-lead text-muted my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Dictumst quisque sagittis purus sit amet. Vestibulum morbi blandit 
                        cursus risus at ultrices mi tempus imperdiet. 
                        Auctor augue mauris augue neque gravida. </p>
                        <button className="main-link" typ="button" style={{margin:"2rem"}}>more info</button>
                    </div>
                </div>
            </div>      
        </div>
    )
}
