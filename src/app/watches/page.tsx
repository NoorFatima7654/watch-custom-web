import React from 'react'

const Watches = () => {
const watchData = [
  {id: 1, name: 'Rolex', price: 12000, description: 'Luxury watch', image: '/images/rolex2.jpg'},
  {id: 2, name: 'Omega', price: 8000, description: 'Sporty design', image: '/images/omega2.jpg'},
  {id: 3, name: 'Patek Philippe', price: 25000, description: 'Elegant timepiece', image: '/images/patek.jpg'},
  {id: 4, name: 'TAG Heuer', price: 5000, description: 'Sporty and stylish', image: '/images/tag.jpg'},
  {id: 5, name: 'Breitling', price: 7000, description: 'Bold and rugged', image: '/images/bretling.jpg'},
  {id: 6, name: 'Seiko', price: 1000, description: 'Affordable and reliable', image: '/images/seko2.jpg'},
]



  return (
    <div>
      <div className='watches'>
        {watchData.map((watch) => (
          <div key={watch.id} className='watch-card'>
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className='price'>${watch.price}</div>
            <button>Add to Card</button>

          </div>
         
        ))}
      </div>
    </div>
  )
}

export default Watches
