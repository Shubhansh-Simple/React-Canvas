/*
 * FontInput UI for taking input from user
 */

// React-Bootstrap
import {Form} from 'react-bootstrap';

const FontInput = ( {inputCallback, fontInput} ) => {

  const onFontInputChange = e => {

    let currentText = e.target.value;

    /* Return updated data to parent */
    inputCallback(currentText);
  }

  return (
    /* Should be placed at the center of the screen */
    <>
      {/* Input UI */}
      <Form.Control
        type='text'
        id='formFontInput'
        size='md'
        className='mb-3'
        placeholder='Enter your text here'
        value={fontInput}
        onChange={onFontInputChange}
        />
    </>
  );
}

export default FontInput;
