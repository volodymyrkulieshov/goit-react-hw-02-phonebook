const Filter = ({ value, changeFilter }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={changeFilter}
          placeholder="Search"
        />
      </label>
    </form>
  );
};

export default Filter;
