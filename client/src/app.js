import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Nav, ProductList, Home, CreateProduct } from './components'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('/api/products')
      .then(res => setProducts(res.data))
      .catch(e => console.error(`Did not update products! See why: ${e}`))
  }, [])

  const removeProduct = id => {
    return axios
      .delete('/api/products', { data: { id } })
      .then(res => {
        const newProducts = products.filter(p => p.id !== id)
        setProducts(newProducts)
      })
      .catch(e => console.error(`Failed to remove item! Here's why: ${e}`))
  }

  const addProduct = product => {
    const newProducts = products
    newProducts.push(product)
    setProducts(newProducts)
    console.log(products)
  }

  return (
    <HashRouter>
      <h1>Acme Products/Sales</h1>
      <Nav productsCount={products.length} salesCount={products.filter(p => p.discount).length} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact render={() => <ProductList products={products} removeProduct={removeProduct} />} />
        <Route
          path="/products/sales"
          exact
          render={() => <ProductList products={products.filter(product => product.discount)} removeProduct={removeProduct} />}
        />
        <Route path="/products/create" exact render={() => <CreateProduct addProduct={addProduct} />} />
      </Switch>
    </HashRouter>
  )
}

export default App
