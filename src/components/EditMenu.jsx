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
import FontInput  from './EditItems/FontInput';


const EditMenu = ( {fontCallback,fontListCallback} ) => {

  /* Default CONSTANT */
  const FONT_FAMILY = 'Ubuntu';
  const FONT_COLOR  = '#000000';
  const FONT_SIZE   = 30;

  /* STATE FOR EACH WIDGET */
  const [ fontFamily, setFontFamily ] = useState( FONT_FAMILY );
  const [ fontSize, setFontSize ]     = useState( FONT_SIZE );
  const [ fontColor, setFontColor ]   = useState( FONT_COLOR );
  const [ fontInput, setFontInput ]   = useState('');


  /* Return prepared data for setting font STATE */
  const getFontObj = ()=>{

    let newFont = {
      'id' : -1,
      'x': 500,
      'y': 400,
      'fontFamily': fontFamily,
      'fontSize'  : fontSize,
      'fontColor' : fontColor,
      'fontText'  : fontInput,
      } 
    return newFont;
  }

  /* For showing text on body screen
   * while TYPING
   */
  useEffect(() => {
    fontCallback( getFontObj() );
  }, [fontFamily, fontSize, fontColor, fontInput]);


  /* Submit the Edit Menu data */
  const onSubmit = () => {

    /* Text will null after submit */
    setFontInput('');

    /* Reset showing off text */
    fontCallback('');

    /* Return updated data to parent */
    fontListCallback( getFontObj() );
  }

  /* Reset value to default in edit menu */
  const resetEditMenu = () => {
    setFontInput('');
    setFontSize(FONT_SIZE);
    setFontColor(FONT_COLOR);
    setFontFamily(FONT_FAMILY);
  }

  /* On clicking RESET button */
  const onReset = () => {
    resetEditMenu();

    /* Reset showing off text */
    fontCallback('');
  }

  /* On clicking CLEAR button 
   * textLIST STATE set to [] 
   */
  const onClear = () => {
    resetEditMenu();

    /* Reset showing off text */
    fontCallback('');

    /* Clear entire STATE of text */
    fontListCallback({});
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
              {/* Font Family (1/4) */}
              <tr className='text-center'>
                <td colSpan={2}>
                  <FontFamily familyCallback={data=>setFontFamily(data)} 
                              family={fontFamily} />
                </td>
              </tr>

              <tr>
                {/* Font Size (2/4)*/}
                <td>
                  <FontSize sizeCallback={data=>setFontSize(data)} 
                            size={fontSize}/>
                </td>

                {/* Font Color (3/4)*/}
                <td>
                  <FontColor colorCallback={data=>setFontColor(data)} 
                             color={fontColor}/>
                </td>
              </tr>

              {/* Text Input (4/4)*/}
              <tr>
                <td colSpan={2}>
                  <FontInput inputCallback={data=>setFontInput(data)}
                             fontInput={fontInput} />
                </td>
              </tr>
            </tbody>

            {/* Submit Button */}
            <tfoot>
              <tr>
                <td>
                  <Button variant='success' 
                          disabled={ fontInput.length < 1 }
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


