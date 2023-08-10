function UserItem(props) {
  const {name, email} = props;
  return(
    <>
      <h3>{name}</h3>
      <p>{email}</p>
    </>
  )
}

export default UserItem;