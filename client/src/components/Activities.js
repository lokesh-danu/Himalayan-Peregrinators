import React from 'react'
import atrek from '../img/atrek.jpg'

function Activities({open}) {
  return (
    <div className=' h-fit xl:h-[100vh] flex flex-col content-center py-10' id='activities' >
        <h3 className='text-center font-hand text-primaryBlue'>Explore beyond your dreams!</h3>
        <div className='xl:px-24 flex flex-wrap justify-center'>
            <button className="card bg-aTrek h-[50vh]  xl:h-[35vh] w-[80vw] xl:w-[15vw]"
             onClick={open}>
            <span className="activities-card-title">
                Trekking
              </span>
            </button>
            <button className="card bg-awildlife h-[50vh] w-[80vw] xl:h-[35vh] xl:w-[15vw] "
             onClick={open}>
              <span className="activities-card-title">
                Wildlife
              </span>
            </button>
            <button className="card bg-aangling h-[50vh] w-[80vw] xl:h-[35vh] xl:w-[30vw]"
             onClick={open}>
            <span className="activities-card-title">
                Angling
              </span>
            </button>
            <button className="card bg-arafting h-[50vh] w-[80vw] xl:h-[35vh] xl:w-[30vw]"
             onClick={open}>
            <span className="activities-card-title">
                Rafting
              </span>
            </button>
            <button className="card bg-aagro h-[50vh] w-[80vw] xl:h-[35vh] xl:w-[15vw]"
             onClick={open}>
            <span className="activities-card-title">
                Agriculture
              </span>
            </button>
            <button className="card bg-apil h-[50vh] w-[80vw] xl:h-[35vh] xl:w-[15vw]"
             onClick={open}>
            <span className="activities-card-title">
                Pilgrimmage
              </span>
            </button>
        </div>
    </div>
  )
}

export default Activities