import Button from 'react-bootstrap/Button';
function AddUser() {
  return(
    <>
    <label>Name</label>
    <input type="text" />
    <Button className='p-md-1' variant="primary">Primary</Button>{' '}
    <button type="submit">Submit</button>
    </>
  )
}

export default AddUser;