/*
 * Font Color Picker UI Component
 */

// React-Bootstrap
import { Form } from "react-bootstrap";


const FontColor = ( {colorCallback, color} ) => {

  /* On color change */
  const onColorPick = e => {

    let pickColor = e.target.value;

    /* Return updated data to parent */
    colorCallback( pickColor )
  } 

  return (
    <>
      {/* Color Picker Title */}
      <Form.Label htmlFor='fontColorInput' 
                className='text-secondary mb-0'>
        <i><b>Color</b></i>
      </Form.Label>

      {/* Color Picker Widget */}
      <Form.Control type='color' 
                    className='mb-1'
                    id='fontColorInput' 
                    value={color}
                    onChange={onColorPick} />
    </>
  )
}

export default FontColor;
