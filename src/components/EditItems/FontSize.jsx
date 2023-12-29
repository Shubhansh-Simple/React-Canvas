/*
 * Font Incrementer/Decrementer UI Component
 */

// React
import { useState } from "react";

// React-Bootstrap
import { Button, 
  Form, 
  ButtonGroup,
  InputGroup} from "react-bootstrap";

// React-icons
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const FontSize = ( {sizeCallback, size} ) => {

  /* Minimum and maximum size of font */
  const MIN_FONT_SIZE = 1;
  const MAX_FONT_SIZE = 100;

  /* STATE FOR FONT SIZE */ 
  const [fontSize, setFontSize] = useState( size);


  /* Increase font size by 1 */
  const onSizeIncrease = () => {

    let newSize = fontSize+1;

    if ( fontSize < MAX_FONT_SIZE ){
      setFontSize( newSize );

      /* Return updated data to parent */
      sizeCallback(newSize);
    }
  }


  /* Decrease font size by 1 */
  const onSizeDecrease = () => {

    let newSize = fontSize-1;

    if ( fontSize > MIN_FONT_SIZE ){
      // setFontSize( newSize );

      /* Return updated data to parent */
      sizeCallback(newSize);
    }
  }


  /* JSX CODE */
  return (
    <InputGroup>

      {/* Font Size Widget */}
      <Form.Control
        value={size+' px'}
        readOnly
      />
      <InputGroup.Text>

        {/* Decrement Button */}
        <ButtonGroup className="mx-1" >
          <Button variant='secondary'
            onClick={onSizeDecrease}>
            <FaMinus />
          </Button>
        </ButtonGroup>

        {/* Increment Button */}
        <ButtonGroup className="mx-1" >
          <Button variant='secondary'
            onClick={onSizeIncrease}>
            <FaPlus />
          </Button>
        </ButtonGroup>

      </InputGroup.Text>
    </InputGroup>
  );
}

export default FontSize;


