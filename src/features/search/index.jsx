import { useState, useEffect, useContext } from 'react';
import TextField from '@/ui/text-field';
import Button from '@/ui/button';
import SearchIcon from '@/ui/icon/search-icon';
import SearchResult from '@/ui/search-result';

export default function Search({ data }) {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const newFilter = data.filter((val) => {
      return val.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredData(newFilter);
  }, [query]);

  return (
    <div>
      <div className=' relative flex items-center justify-center h-40'>
        <TextField
          value={query}
          placeholder='Search...'
          onChange={setQuery}
        />
        <span className='absolute inset-y-0 right-80 p-2 flex items-center'>
          <Button>
            <SearchIcon className='pink-400' />
          </Button>
        </span>
      </div>
      {filteredData.length !== 0 && (
        <SearchResult>
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <div className='flex justify-center py-2 shadow'>
                {value.name}
              </div>
            );
          })}
        </SearchResult>
      )}
    </div>
  );
}
