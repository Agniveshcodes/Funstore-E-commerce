import axios from "axios"


export function ProductInfo ( ) {
   return axios.get("https://dummyjson.com/products/").then(function(response){
    return response.data.products
   })
}

export function ProductsId ( id ) {
   return axios.get("https://dummyjson.com/products/" + id ).then(function(response){
      return response.data
   })
}