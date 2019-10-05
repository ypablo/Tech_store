import React from 'react'
import { ProductConsumer } from '../context/context'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import App from '../App';
import Services from '../components/HomePage/Services'
import Featured from '../components/HomePage/Featured'


export default function HomePage() {
    return (
        <div>
            <Hero title="awesome gadgets" max="true">
                <Link to="/products" className="main-link" style={{margin:"2rem"}}>
                    our products
                </Link>
            </Hero>
            <Services/>
            <Featured/>
        </div>
    )
}
