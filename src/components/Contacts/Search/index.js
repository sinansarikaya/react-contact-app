function List({ filterText, setFilterText }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default List;
