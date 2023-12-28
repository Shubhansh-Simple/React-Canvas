/*
 * TextInput UI for taking input from user
 */

// React
import {useState} from 'react';

// React-Bootstrap
import {Form} from 'react-bootstrap';

const TextInput = ( {fontInput} ) => {

  const [ textInput, setTextInput ] = useState('');

  const onTextInputChange = e => {

    let currentText = e.target.value;
    setTextInput( currentText );

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
        value={textInput}
        onChange={onTextInputChange}
        />
    </>
  );
}

export default TextInput;
