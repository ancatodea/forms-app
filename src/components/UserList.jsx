import UserItem from './UserItem';

function UserList(props) {
  const{users} = props;
  return(
    <>
      {users.map((user) => 
      <UserItem 
        key={user.id}
        name={user.name}
        email={user.email}
      />)

      }
      
    </>
  )
}

export default UserList;