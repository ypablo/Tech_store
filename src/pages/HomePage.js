import React from 'react'
import { ProductConsumer } from '../context/context'

export default function HomePage() {
    return (
        <div>
            <ProductConsumer>
                {value => {
                    console.log(value)
                    return <h1>Hello form home page</h1>
                }}
            </ProductConsumer>
        </div>
    )
}
