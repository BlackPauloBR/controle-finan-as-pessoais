import React from 'react';
export default function Search({ theList, handleSearchInput }) {
  const handleInput = (event) => {
    handleSearchInput(event.target.value);
  };

  return (
    <div className="row" style={{ marginTop: '35px', marginBottom: '0' }}>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12" style={{ minWidth: '430px' }}>
            <textarea
              id="textarea1"
              className="materialize-textarea"
              onChange={handleInput}
            ></textarea>
            <label htmlFor="textarea1">Pesquisa</label>
          </div>
        </div>
      </form>
    </div>
  );
}
