import { memo, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const Form = memo((props) => {
  console.log('render')
  
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            value={props.mail}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            value={props.text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
});

function Memo() {
  const [data, setData] = useState({
    mail: 'second@example.com',
    text: 'another text',
  });

  return (
    <>
      <Form mail={data.mail} text={data.text} />
      <button
        onClick={() =>
          setData({
            mail: 'second@example.com',
            text: 'another text',
          })
        }
      >
        Click me
      </button>
    </>
  );
}

export default Memo;
