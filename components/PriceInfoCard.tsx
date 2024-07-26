import React from 'react'

interface Props {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title ,iconSrc , value} : Props) => {
  return (
    <div className='flex-1 min-w-[200px] flex flex-col gap-2 border-l-4 border-opacity-80 rounded-lg bg-[#28321E]  px-5 py-4 border-l-[#7dc41e] hover:bg-[#3b4a2a]'>
      <p className='text-base font-semibold text-[#cfdeb8]'>{title}</p>
      <div className='flex gap-1'>
        <img src={iconSrc} alt={title} />
        <p className='text-base font-semibold text-[#cfdeb8]'>{value}</p>
      </div>
    </div>
  )
}

export default PriceInfoCard