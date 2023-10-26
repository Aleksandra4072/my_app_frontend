import { Pagination } from "react-bootstrap";

export const GeneralPagination = ({ activePage, itemsCount, onPageChange }) => {
    const totalPages = Math.ceil(itemsCount / 6);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.Prev
        onClick={() => handlePageChange(activePage - 1)}
        disabled={activePage === 1}
      />

      {Array.from({ length: totalPages }, (_, index) => (
        <Pagination.Item
          key={index}
          active={index + 1 === activePage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={() => handlePageChange(activePage + 1)}
        disabled={activePage === totalPages}
      />
    </Pagination>
  );
}