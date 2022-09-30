import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { getProductList } from './Api';
import { BiSearchAlt } from 'react-icons/bi';
import Loading from './Loading';
import Button from './Button';

function FirstView() {
	const [myList, setProductList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState('');
	const [sort, setSort] = useState('default');

	useEffect(function() {
		const start = getProductList();
		const abc = start.then(function(products) {
			setProductList(products);
			setLoading(false);
			 
		});
		abc.then(function(data) {
			// console.log('abc wala data', data);
		}) ;
	}, []);

	let data = myList.filter(function(item) {
		return item.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
	});

	function handleChange(event) {
		console.log('onChange is working');
		setQuery(event.target.value);
	}

	function handleSortChange(event) {
		setSort(event.target.value);
	}
	console.log('sort', sort);

	if (sort == 'lowtohigh') {
		data.sort(function(x, y) {
			return x.price - y.price;
		});
	} else if (sort == 'hightolow') {
		data.sort(function(x, y) {
			return y.price - x.price;
		});
	} else if (sort == 'title') {
		data.sort(function(x, y) {
			return x.title < y.title ? -1 : 1;
		});
	}
	if (loading) {
		return <Loading />;
	}

	return (
		 
		<div className="flex flex-wrap mx-auto max-w-6xl px-9 py-12 my-12 bg-gray-50">
			<div className="sm:flex flex flex-col justify-start items-center pl-12 mt-4">
				<h3 className="text-logo-second text-[20px]">Home / Shop</h3> 
				<h2 className="text-tomato-default text-4xl mb-2">Shop</h2>
			</div>
			<div className="mr-0 ml-auto max-w-3xl space-x-2 flex justify-end border-1 border-solid">
				<span className="mt-[8px] text-3xl text-tomato-light-2">
					<BiSearchAlt />
				</span>
				<input
					className="text-black h-10 text-center border-2 hover:border-tomato-light-2"
					type="text"
					placeholder="Find"
					onChange={handleChange}
					value={query}
				/>
				<select
					onChange={handleSortChange}
					className="border-2 h-10 hover:border-tomato-light-2 text-gray-400 cursor-pointer"
				>
					<option value="default">Default Sort</option>
					<option value="title">Sort by Title</option>
					<option value="lowtohigh">Low to High Price</option>
					<option value="hightolow">High to Low Price</option>
				</select>
				 
			</div>
			<div className="my-4">{<ProductList products={data} />}</div>
		</div>
	);
}

export default FirstView;
