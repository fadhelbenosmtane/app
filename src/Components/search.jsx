import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar() {
  return (
    <Form className='container'>
      <Form.Group className="mb-3 " controlId="formBasicEmail">  
      <div className='d-flex '>
        <Form.Control type="Text" placeholder="Search" className="form-control-lg"/> 
        <button type="button" class="btn btn-primary">click</button>
        </div>
      </Form.Group> 
    </Form>
  );
}

export default SearchBar;
