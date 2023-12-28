/*
 * Edit Menu of Text Font
 */

// React 
import { useEffect, useState} from 'react';

// React-bootstrap
import {Button, Card, Container, Table} from 'react-bootstrap';

// Local
import FontFamily from './EditItems/FontFamily';
import FontSize   from './EditItems/FontSize';  
import FontColor  from './EditItems/FontColor';
import TextInput  from './EditItems/TextInput';


const EditMenu = ( {font,fontList} ) => {

  /* STATE FOR EACH WIDGET */
  const [ fontFamily, setFontFamily ] = useState('Ubuntu');
  const [ fontSize, setFontSize ]     = useState(30);
  const [ fontColor, setFontColor ]   = useState('#000000');
  const [ textInput, setTextInput ]   = useState('');

  /* For showing text on body screen
   * while TYPING
   */
  useEffect(() => {
    let newFont = {
      'fontFamily': fontFamily,
      'fontSize': fontSize,
      'fontColor': fontColor,
      'fontText': textInput,
      'x': 500,
      'y': 400,
    }
    font(newFont);
  }, [fontFamily, fontSize, fontColor, textInput]);


  /* Submit the Edit Menu data */
  const onSubmit = () => {
    let newFont = {
      'fontFamily' : fontFamily,
      'fontSize'   : fontSize,
      'fontColor'  : fontColor,
      'fontText'   : textInput,
      'x'          : 500,
      'y'          : 400,
    }

    /* Text will null after submit */
    setTextInput('');

    /* Reset showing off text */
    font('');

    /* Return updated data to parent */
    fontList(newFont);
  }

  /*
   * Reset the current font on screen 
   */
  const onReset = () => {
    font('');
  }

  /* Just reset the textLIST STATE 
   * and current input too.
   */
  const onClear = () => {
    fontList({});
    font('');
  }

  return (
    <Container>

      {/* At the right side of the main screen */}
      <Card style={{ width    : '400px',  
                     position : 'absolute', 
                     right    : '0' }}>

        {/* CARD BODY */}
        <Card.Body>
          <Table responsive size='sm p-0 m-0'>
            <thead></thead>

            <tbody>
              {/* Font Family */}
              <tr className='text-center'>
                <td colSpan={2}>
                  <FontFamily family={data=>setFontFamily(data)} />
                </td>
              </tr>

              <tr>
                {/* Font Size */}
                <td><FontSize size={data=>setFontSize(data)} /></td>

                {/* Font Color */}
                <td><FontColor color={data=>setFontColor(data)} /></td>
              </tr>

              {/* Text Input */}
              <tr>
                <td colSpan={2}>
                  <TextInput fontInput={data=>setTextInput(data)}/>
                </td>
              </tr>
            </tbody>

            {/* Submit Button */}
            <tfoot>
              <tr>
                <td>
                  <Button variant='primary' 
                          disabled={ textInput.length < 1 }
                          onClick={onSubmit}
                          >
                    Add 
                  </Button>
                  {' '}
                  <Button variant='secondary' 
                          onClick={onReset}
                          >
                    Reset
                  </Button>
                  {' '}
                  <Button variant='danger' 
                          onClick={onClear} >
                    Clear 
                  </Button>
                </td>
              </tr>
            </tfoot>

          </Table>
        </Card.Body>
        <br/>
      </Card>
    </Container>
    );
}

export default EditMenu;


