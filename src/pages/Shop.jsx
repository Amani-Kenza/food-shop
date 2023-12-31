import React from 'react'
import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'
import {Cart} from '../components/Cart'
import {Rate} from '../components/Rating'
import { CartProvider } from '../components/CartContext'; // Importe CartProvider ici

export default function Shop() {
  
  return (
   <CartProvider> 
   <div>
        <Navbar />
        <h1 className='text-2xl text p-8'>OUR PRODUCTS</h1>
        <div className='recipes flex  recipe-container'>
             <div className='recipe ml-16 p-2 border'>
                <img src={process.env.PUBLIC_URL + '/cake2.jpg'} className='w-64 h-52' alt='cake'></img>
                <h2 className=' h2-color mt-2 font-bold'> Almond Floor Cake</h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>10,99€</h4>
                <Cart productId="unique_product_id_1"/>
             </div>
             <div className='recipe p-2 ml-2 border' >
                <img src={process.env.PUBLIC_URL + '/cookie2.jpg'} className='w-64 h-52' alt='cookie'></img>
                <h2 className=' h2-color mt-2 font-bold'>Flourless Monster Cookies</h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>10,99€</h4>
               <Cart productId="unique_product_id_2"/>
             </div>
             <div className='recipe p-2 ml-2 border'>
                <img src={process.env.PUBLIC_URL + '/muffin1.jpg'} className='w-64 h-52' alt='muffin'></img>
                <h2 className='h2-color mt-2 font-bold'>Peanut Butter-Chocolate </h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>11,99€</h4>
                <Cart productId="unique_product_id_3"/>
             </div>
             <div className='recipe p-2 ml-2 border'>
                <img src={process.env.PUBLIC_URL + '/cake1.jpg'} className='w-64 h-52' alt='cake'></img>
                <h2 className='h2-color mt-2 font-bold'>Sweet Potato Dump Cake</h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>11,99€</h4>
                <Cart productId="unique_product_id_4"/>
             </div>
         </div>
        <div className='recipes flex mt-2 recipe-container'>
             <div className='recipe ml-16 border p-2'>
                <img src={process.env.PUBLIC_URL + '/cake3.jpg'} className='w-64 h-52' alt='cake'></img>
                <h2 className='h2-color mt-2 font-bold'> Fresh Apple Cake</h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>10,99€</h4>
                <Cart productId="unique_product_id_5"/>
             </div>
             <div className='recipe ml-2 border p-2'>
                <img src={process.env.PUBLIC_URL + '/recipe2.jpg'} className='w-64 h-52' alt='cookie'></img>
                <h2 className='h2-color mt-2 font-bold'>Apple Cake</h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>11,99€</h4>
                <Cart productId="unique_product_id_6"/>
             </div>
             <div className='recipe ml-2 border p-2'>
                <img src={process.env.PUBLIC_URL + '/recipe3.jpg'} className='w-64 h-52' alt='muffin'></img>
                <h2 className='h2-color mt-2 font-bold'>Chocolate Cake </h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>11,99€</h4>
                <Cart productId="unique_product_id_7"/>
             </div>
             <div className='recipe ml-2 border p-2'>
                <img src={process.env.PUBLIC_URL + '/recip.jpg'} className='w-64 h-52' alt='cake'></img>
                <h2 className='h2-color mt-2 font-bold'>Blueberry Muffins</h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>10,99€</h4>
                <Cart productId="unique_product_id_8"/>
             </div>
            
        </div>
        <div className='recipes flex mt-2 recipe-container'>
             <div className='recipe ml-16 border p-2'>
                <img src={process.env.PUBLIC_URL + '/recipe4.jpg'} className='w-64 h-52' alt='cake'></img>
                <h2 className='h2-color mt-2 font-bold'>Banana-Blueberry Muffins</h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>11,99€</h4>
                <Cart productId="unique_product_id_9"/>
             </div>
             <div className='recipe ml-2 border p-2'>
                <img src={process.env.PUBLIC_URL + '/cookie.jpg'} className='w-64 h-52' alt='cookie'></img>
                <h2 className='h2-color mt-2 font-bold'>Gluten-Free Chocolate Cookies</h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>11,99€</h4>
                <Cart productId="unique_product_id_10"/>
             </div>
             <div className='recipe ml-2 border p-2'>
                <img src={process.env.PUBLIC_URL + '/fruits.jpg'} className='w-64 h-52' alt='muffin'></img>
                <h2 className='h2-color mt-2 font-bold'>Carot Cake </h2>  
                <Rate />
                <h4 className='font-bold text-base mt-2'>10,99€</h4>
                <Cart productId="unique_product_id_11"/>
             </div>
             <div className='recipe ml-2 border p-2'>
                <img src={process.env.PUBLIC_URL + '/cookiee3.jpg'} className='w-64 h-52' alt='cake'></img>
                <h2 className='h2-color mt-2 font-bold'>Pumpkin-Oatmeal Muffins</h2>
                <Rate />
                <h4 className='font-bold text-base mt-2'>11,99€</h4>
                <Cart productId="unique_product_id_12"/>
             </div>
        </div>
        <Footer />
   </div>
   </CartProvider>
  )
}
