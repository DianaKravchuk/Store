import React from 'react'
import SmallProductCard from '../../Ui/SmallProductCard'

const NewCollection: React.FC = () => {
  return (
    <div className='w-[1040px]'>
        <SmallProductCard id={1} title='Female shirt' price={25}/>
    </div>
  )
}

export default NewCollection