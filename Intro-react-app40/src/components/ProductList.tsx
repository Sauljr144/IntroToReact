import React, { useEffect, useState } from 'react'

// Passing in props without interface
const ProductList = ({category} : {category:string}) => {
    
    // We have to tell what type of array we are using.
    const [products, setProducts] = useState<string[]>([])
   

    // Always add a dependacy array so you dont get stuck in a loop.
    useEffect(() => {
        console.log('Fetching products', category)
        setProducts(['Clothing', 'Household'])
    }, [category])

  return (
    <div>
       

    </div>
  )
}

export default ProductList