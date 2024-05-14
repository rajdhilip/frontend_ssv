import React, { useEffect, useRef, useState } from 'react'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'
import { GrPrevious,GrNext } from "react-icons/gr"
import FilterProduct from '../component/FilterProduct'
import AllProduct from '../component/AllProduct'
import { Link } from "react-router-dom";


const Home = () => {
  const productData = useSelector((state)=>state.product.productList);
  console.log(productData)
  const homeProductCartList = productData.slice(18,23);
  const homeProductCartListPaints = productData.filter(
    (el) => el.category === "paint",
    []
  );

  const loadingArray = new Array(5).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);


  const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200
  }
  const preveProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200
  }

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2'>
          {/* <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src='https://cdn-icons-png.flaticon.com/512/2972/2972185.png' className='h-7'/>
          </div> */}
          <h2 className='text-4xl md:text-7xl font-bold py-3'>SSV Traders <span className='text-red-500 text-'>Exclusively for paints</span></h2>
          <p className='py-3 text-base'>SSV Traders is your one-stop destination for high-quality paints in a variety of shades and finishes. Our extensive range includes everything from vibrant colors to subtle neutrals, suitable for every taste and style. Whether you're looking to refresh your home's interior or protect its exterior, SSV Traders has the perfect paint for the job. Explore our collection today and bring your vision to life with SSV Traders.</p>
          <Link to={"menu/66005acf90ee0f664d38c934"}><button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Explore now</button>
</Link>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
            homeProductCartList[0] ? homeProductCartList.map(el =>{
              return (
                <HomeCard
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
                />
              );
            })
            :
            loadingArray.map((el,index)=>{
              return(
                <HomeCard
                key={index+"loading"}
                loading={"Loading..."}
                />
              )
            })
          }  
        </div>
      </div>

      <div className=''>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>
            Paints
          </h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious/></button>
            <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrNext/></button>
          </div>
        </div>
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {
            homeProductCartListPaints[0] 
              ? homeProductCartListPaints.map(el => {
              return(
                <CardFeature
                key={el._id+"paint"}
                id={el._id}
                name={el.name}
                category={el.category}
                price={el.price}
                image={el.image}
                />
              );
            })
            : loadingArrayFeature.map((el,index) => (
            <CardFeature loading="Loading..." key={index+"cartLoading"} />
            ))} 
        </div>
      </div>

      <AllProduct heading={"Your Product"} /> 
    </div>
  )
} 

export default Home