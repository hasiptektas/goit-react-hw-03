import React from 'react'

function SearchBox({searchTerm, onSearchChange}) {
  return (
    <div >
        <label htmlFor='search'>Kişi Bul</label>
        <br />
        <input 
            type='text' 
            placeholder='Search...'
            value={searchTerm} 
            onChange={(e) => onSearchChange(e)}
            />
    </div>
  )
}

export default SearchBox