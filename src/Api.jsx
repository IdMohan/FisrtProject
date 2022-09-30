import axios from 'axios';

 
export function getProductData(id) {
	return axios
		.get('https://dummyjson.com/products/' + id)
		.then(function(response) {
			// console.log('mainOneProduct', response.data);
			return response.data;
		 
		});
}
 

export function getProductList() {
	return axios.get('https://dummyjson.com/products').then(function(response) {
		console.log("full data list", response.data.products)
		return response.data.products;
		 
	});
}

 
 



