import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({country}) => {
  return (
    <div className='h-70 w-60'>
      <Link to={`/country/${country.name.common}`}>
      <img src={country.flags.png} alt={country.name.common} className='rounded-[7px] h-40 w-60' />
      <div className='p-4'>
      <h2 className='text-[18px] font-medium mb-2'>{country.name.common}</h2>
      <div className='flex gap-1'><p className='font-semibold'>Region:</p>{country.region}</div>
      <div className='flex gap-1'><p className='font-semibold'>Capital:</p> {country.capital}</div>
      <div className='flex gap-1'><p className='font-semibold'>Population:</p> {country.population}</div>
      </div>
      </Link>
    </div>
  );
}

export default CountryCard;