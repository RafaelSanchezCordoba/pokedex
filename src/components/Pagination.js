import React from 'react';
import './pagination.css';

const Pagination = ({ page, totalPages, setPage }) => {

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="pagination-info">
        Page {page} of {totalPages}
      </span>
      <button
        className="pagination-button"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
export default Pagination