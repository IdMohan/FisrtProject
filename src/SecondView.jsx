import React from "react";
import Details from './Details';
import allData from './DummyData';

function SecondView({allData}) {
  return (
    <>
       <Details
		category="T-shirt"
		subtitle="Home / Shop / T-Shirt"
		dname="Blue Printed T-Shirt"
		dpcontant="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nulla reiciendis commodi animi voluptatibus
    voluptates necessitatibus eligendi, enim accusantium maxime! Ex repudiandae a quo minima explicabo eaque quas libero
    atque!"
		dphoto="first-t-shirt-for-details-1.jpg"
		btnphoto="pro-t-shirt-2.jpg"
	/>
    
      <SecondView push={allData.id}/>
    </>
  );
}

export default SecondView;