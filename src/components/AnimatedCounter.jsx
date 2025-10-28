import React from 'react'
import { counterItems } from '../constants'
import { div } from 'three/tsl'

const AnimatedCounter = () => {
  return (
    <div id="counter" className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-4-cols'>
            {counterItems.map((item) => (
                <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-2'>

                </div>
            ))}

        </div>

    </div>
  )
}

export default AnimatedCounter