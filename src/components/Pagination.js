import React from "react";
import "./Pagination.css";

const PaginationItem = ({
  postsPerPage,
  totalPosts,
  paginate,
  nextPage,
  prevPage,
}) => {
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

 

  return (
    <div className="paginationItem">
      <nav>
        <ul className="pagination">
          <div className="btn-prev">
            <button onClick={prevPage}>Назад</button>
          </div>
          
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a
                href="!#"
                className="page-link"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          ))}
          <div className="btn-next">
            <button onClick={nextPage}>Далее</button>
          </div>
          
        </ul>
      </nav>
    </div>
  );
};
export default PaginationItem;
