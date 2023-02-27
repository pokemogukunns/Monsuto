/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Mons from './Mons';
import ReactPaginate from 'react-paginate';
import "./test.css"

function Paginate({ itemsPerPage, mons }) {
  console.log(mons);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = mons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(mons.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % mons.length;
    setItemOffset(newOffset);
  }

  return (
    <>
      <Mons id="container" data={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        containerClassName="pagination"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Paginate