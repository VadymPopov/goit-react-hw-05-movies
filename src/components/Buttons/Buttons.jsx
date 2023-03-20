import { Button } from "../../pages/Movies/Movies.styled"; 
import propTypes from 'prop-types';

export const Buttons = ({ page, totalPages, handlePageChange }) => {
  if (totalPages === 1) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 10,
        alignItems: 'space-between'
      }}
    >
      <Button
      style={{
        marginRight: 10,
      }}
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >&#8249; Previous</Button>
      <Button
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >Next &#8250;</Button>
    </div>
  );
};

Buttons.propTypes = {
  page: propTypes.number,
  totalPages: propTypes.number,
  handlePageChange: propTypes.func,
};