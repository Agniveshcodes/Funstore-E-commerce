import axios from "axios"


export function ProductInfo (sortBy , search , page , sortType ) {

   let params = {}

   if(sortBy){
      params.sortBy = sortBy
   }else if (search){
      params.search = search
   }else if (page) {
      params.page = page 
   }


   return axios.get("https://myeasykart.codeyogi.io/products" , {
      params 
   }).then(function(response){
    return response.data
   })
}

export function ProductsId ( id ) {
   return axios.get("https://dummyjson.com/products/" + id ).then(function(response){
      return response.data
   })
}

