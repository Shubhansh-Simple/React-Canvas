/*
 * Font Color Picker UI Component
 */

// React-Bootstrap
import { Form } from "react-bootstrap";


const FontColor = ( {color, colorChild} ) => {

  /* On color change */
  const onColorPick = e => {

    let pickColor = e.target.value;

    /* Return updated data to parent */
    color( pickColor )
  } 

  return (
    <>
      {/* Color Picker Title */}
      <Form.Label htmlFor='fontColorInput' 
                className='text-secondary mb-0'>
        <i>Color</i>
      </Form.Label>

      {/* Color Picker Widget */}
      <Form.Control type='color' 
                    className='mb-1'
                    id='fontColorInput' 
                    value={colorChild}
                    onChange={onColorPick} />
    </>
  )
}

export default FontColor;
