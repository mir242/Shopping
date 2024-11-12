import React from 'react'
import ProductCard from './ProductCard'





const productsData = [
  {

    img: '/images/quality/1 (1).webp',
    title: 'Classic watch',
    price: "20.2$",
    desc: "HOT OFFER",
    rating: 3,

  },
  {

    img: '/images/quality/1 (2).webp',
    title: 'shoes clasically',
    price: "19.9$",
    desc: "offer",
    rating: 4,

  },
  {

    img: '/images/quality/1 (3).webp',
    title: 'digital watch',
    price: "8.2$",
    desc: "offer",
    rating: 3,

  },
  {

    img: '/images/quality/1 (4).webp',
    title: 'set of sports quality',
    price: "8.2$",
    desc: "hat",
    rating: 1,

  },
  {

    img: '/images/quality/1 (5).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "pullover",
    rating: 2,

  },
  {

    img: '/images/quality/1 (6).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "digital of watching",
    rating: 4

  },
  {

    img: '/images/quality/1 (7).webp',
    title: 'set of clasically ,hat',
    price: "8.2$",
    desc: "sdf",
    rating: 3

  },
  {

    img: '/images/quality/1 (8).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 1

  },
  {

    img: '/images/quality/1 (9).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 2

  },
  {

    img: '/images/quality/1 (10).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 3

  },
  {

    img: '/images/quality/1 (11).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 4

  },
  {

    img: '/images/quality/1 (12).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 5

  },
  {

    img: '/images/quality/1 (13).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 5

  },
  {

    img: '/images/quality/1 (14).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 1

  },
  {

    img: '/images/quality/1 (15).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 2

  },
  {

    img: '/images/quality/1 (16).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 3

  },
  {

    img: '/images/quality/1 (17).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 3

  },
  {

    img: '/images/quality/1 (18).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 2

  },
  {

    img: '/images/quality/1 (19).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 2

  },
  {

    img: '/images/quality/1 (20).webp',
    title: 'set of clasically',
    price: "8.2$",
    desc: "sdf",
    rating: 4

  },
 


]















const NewProducts = () => {
  return (
 


    

    <div className='bg-white'>


<header className=" rounded-sm product-header">
  <div className="promo-text">
  Don't miss our new products!  High quality at a reasonable price.
  </div>
</header>




      <div className='container pt-26  '>
        <h2 className='font-medium'> NEW PRODUCT</h2>
        <div className='   grid grid-cols-1 place-items-center  sm:items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 xl:gap-x-10 xl:gap-y-10'>
          {productsData.map((item, index) => (
            <div className="product-image "  key={index}>
              <ProductCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts

