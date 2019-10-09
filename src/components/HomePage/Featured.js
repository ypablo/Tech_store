import React from 'react'
import Product from '../Product'
import { Link } from 'react-router-dom'
import Title from '../Title'
import { ProductConsumer } from '../../context/context'


export default function Featured() {
    return (
        <div className="py-5">
            <div className="container">
                <Title title="featured products" center="true" />
                <div className="row my-5">
                    <ProductConsumer>
                        {value => {
                            const { featuredProducts } = value;
                            return featuredProducts.map(product => (
                                <Product key={product.id} product={product} />
                            ))
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </div>
    )
}
