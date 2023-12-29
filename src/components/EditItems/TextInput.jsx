/*
 * TextInput UI for taking input from user
 */

// React-Bootstrap
import {Form} from 'react-bootstrap';

const TextInput = ( {fontInput, textInputChild} ) => {

  const onTextInputChange = e => {

    let currentText = e.target.value;

    /* Return updated data to parent */
    fontInput(currentText);
  }

  return (
    /* Should be placed at the center of the screen */
    <>
      {/* Input UI */}
      <Form.Control
        type='text'
        id='formTextInput'
        size='md'
        className='mb-3'
        placeholder='Enter your text here'
        value={textInputChild}
        onChange={onTextInputChange}
        />
    </>
  );
}

export default TextInput;
