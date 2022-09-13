function List({ filtered }) {
  return (
    <div>
      <ul className="user-list">
        {filtered.map((contact, i) => (
          <li className="user-item" key={i}>
            <div className="user-picture">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="user-description">
              <div className="user-name">{contact.fullname}</div>
              <div className="user-phone">{contact.phone_number}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
