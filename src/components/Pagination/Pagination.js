import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center"
      nextLabel="Next"
      previousLabel="Previous"
      nextClassName="btn btn-primary"
      nextLinkClassName={null}
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
