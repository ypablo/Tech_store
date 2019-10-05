import React, { Component } from 'react'
import { linkData } from './linkData'
import {socialData} from './socialData'
import {items} from './productData'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts:[],
        filteredProducts: [],
        featuredProducts:[],
        singleProduct: {},
        loading: false
    }

    componentDidMount() {
        //from contentful items
        this.setProducts(items);
    }

    //set Products
    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const {id} = item.sys;
            const product = {id, ...item.fields};
            return product;
        })
        //featured products
        let featuredProducts = storeProducts.filter(item => item.featured === true);
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
        })
    }

    getStorageCart = () => {
        return [];
    };

    getStorageProduct = () => {
        return [];
    };

    getTotals = () => {}

    //handle side bar
    handleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }
    //handle cart
    handleCart = () => {
        this.setState({ cartOpen: !this.state.cartOpen })
    }

    //open cart
    closeCart = () => {
        this.setState({ cartOpen: false })
    }

    //close cart
    openCart = () => {
        this.setState({ cartOpen: true })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart
            }}>
                {this.props.children}
            </ProductContext.Provider >
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };