/* eslint-disable react/prop-types */

function SearchBox({searchTerm, onSearchChange}) {
  return (
    <div className='d-flex align-items-center gap-4'>
        <label htmlFor='search' style={{fontWeight: 'bold'}}>Kişi Bul</label>
        
        <input 
            style={{paddingLeft: '10px'}}
            type='text' 
            placeholder='Kişi Ara...'
            value={searchTerm} 
            onChange={(e) => onSearchChange(e)}
            />
    </div>
  )
}

export default SearchBox