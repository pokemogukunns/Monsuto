import { requestData, requestQuery } from './services/requests'
import React, { useState, useEffect } from 'react';
import Mons from './components/Mons';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import Loading from './components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectOption, setSelectOption] = useState('');
  const [mons, setMons] = useState([]);
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  const handleClick = async () => {
    if (selectOption == "MON_ID") {
      if (search === "" || search === " " || search === "." || search === "$") {
        setPageCount(0)
        setMons({ error: "Please provide an ID to search for :(" })
      }
      else {
        setIsLoading(true)
        const { data } = await requestData(search.replaceAll("&", "and"))
        setPageCount(1)
        setMons(data)
        setIsLoading(false)
      }
    }
    else {
      if (search === "" || search === " " || search === "." || search === "$") {
        setPageCount(0)
        setMons({ error: "Please provide something to search for :(" })
      }
      else {
        setIsLoading(true)
        const { data } = await requestQuery(selectOption, search.replaceAll("&", "and"), page)
        const { totalPages } = data;
        setPageCount(totalPages)
        setMons(data)
        setPage(1)
        setIsLoading(false)
      }
    }
  }

  const handlePrevNext = async (page) => {
    setIsLoading(true)
    const { data } = await requestQuery(selectOption, search, page)
    const { totalPages } = data;
    setPageCount(totalPages)
    setMons(data)
    setPage(page)
    setIsLoading(false)
  }

  useEffect(() => {
    setSelectOption("MON_ID")
  }, [])

  return (
    <div className='bg-slate-800'>
      <div className='sticky flex top-0 p-2 place-content-center bg-slate-300'>
        {/* <label
          htmlFor="monster-search"
          className='mb-2 text-sm font-medium text-gray-900 sr-only'
        >Search by</label> */}
        <select
          className='flex-shrink-0 z-10 inline-flex items-center text-sm font-medium text-center text-gray-900 bg-yellow-500 border border-yellow-300 rounded-l-lg hover:bg-yellow-200 focus:ring-2 focus:outline-none focus:ring-yellow-100'
          id='monster-search'
          name="search-type"
          defaultValue="MON_ID"
          onChange={({ target }) => setSelectOption(target.value)}
        >
          <option value="JP_Name">JP Name</option>
          <option value="ENG_Name">ENG Name</option>
          <option value="MON_ID">ID</option>
          <option value="Rarity">Rarity</option>
          <option value="Sling">Sling</option>
          <option value="Type">Type</option>
          <option value="Ability">Ability</option>
          <option value="Gauge">Gauge</option>
          <option value="Strike_Shot">SS</option>
          <option value="Bump_Combo">Bump Combo</option>
        </select>
        <div
          className='relative w-2/4'
        >
          <input
            className='block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            type="text"
            placeholder='Search'
            name='searchInput'
            autoCorrect="off"
            autoComplete="off"
            value={search}
            onKeyDown={({ key }) => { if (key === "Enter") { handleClick() } }}
            onChange={({ target }) => { setSearch(target.value) }} />
        </div>

        <button
          className='p-2 text-sm font-medium text-white bg-blue-600 rounded-r-lg border border-blue-600 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300'
          type='button'
          name='SearchBtn'
          onClick={() => handleClick()}
        >
          Search
        </button>
      </div>

      {isLoading ?
        <div
          className='bg-slate-800 p-10 text-center'
        >
          <Loading />
        </div>
        : <Mons data={mons} />}

      {pageCount >= 2 ?
        <div
          className='sticky bottom-0 flex justify-center p-2 bg-slate-600'
        >
          <PaginationControl
            page={page}
            between={4}
            total={pageCount}
            limit={1}
            changePage={(p) => {
              setPage(p)
              handlePrevNext(p)
            }}
            ellipsis={1}
          />
        </div> :
        <div
          className='bg-slate-600'
        ></div>
      }
    </div>
  )
}

export default App
