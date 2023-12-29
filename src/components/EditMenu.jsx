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


const EditMenu = ({
  appendListCallback,
  updateListCallback,
  clearListCallback,
  deleteItemCallback,
  typedFontCallback,
  updateFont })=>{

  /* Default CONSTANT */
  const FONT_FAMILY = 'Ubuntu';
  const FONT_COLOR  = '#000000';
  const FONT_SIZE   = 30;
  const FONT_X      = 100;
  const FONT_Y      = 100;

  /* STATE FOR EACH WIDGET */
  const [ fontFamily, setFontFamily ] = useState( FONT_FAMILY );
  const [ fontSize,   setFontSize ]   = useState( FONT_SIZE );
  const [ fontColor, setFontColor ]   = useState( FONT_COLOR );
  const [ fontInput, setFontInput ]   = useState('');
  const [fontAxis, setFontAxis]       = useState([ FONT_X,FONT_Y ]);

  /* Updating existing Font */
  useEffect(() => {

    if ( Object.keys(updateFont).length > 0 ){

      { updateFont['fontFamily'] && setFontFamily(updateFont['fontFamily']) }
      { updateFont['fontSize']   && setFontSize(updateFont['fontSize'])     }
      { updateFont['fontColor']  && setFontColor(updateFont['fontColor'])   }
      { updateFont['fontText']   && setFontInput(updateFont['fontText'])    }

      let x = updateFont['x'];
      let y = updateFont['y'];

      if (x && y)
        setFontAxis([x, y]);

      /* Delete the original text, after get it's data */
      deleteItemCallback(updateFont['id']);
    }
  },[updateFont]);


  /* Return prepared data for setting font STATE */
  const getFontObj = ()=>{

    let newFont = {
      'id' : -1,
      'x': fontAxis[0],
      'y': fontAxis[1],
      'fontFamily': fontFamily,
      'fontSize'  : fontSize,
      'fontColor' : fontColor,
      'fontText'  : fontInput,
      } 
    return newFont;
  }

  /* For showing text on body screen while TYPING */
  useEffect(() => {
    typedFontCallback( getFontObj() );
  }, [fontFamily, fontSize, fontColor, fontInput]);


  /* On clicking RESET button,Reset value in edit menu*/
  const resetEditMenu = () => {
    setFontInput('');
    setFontSize(FONT_SIZE);
    setFontColor(FONT_COLOR);
    setFontFamily(FONT_FAMILY);

    /* Reset showing off text */
    typedFontCallback('');
  }

  /* On clicking CLEAR button,textLIST STATE set to [] */
  const onClear = () => {
    resetEditMenu();

    /* Clear entire TEXTLIST STATE */
    clearListCallback();
  }

  /* Submit the Edit Menu data */
  const onSubmit = () => {

    /* Text will null after submit */
    setFontInput('');

    /* Reset showing off text */
    typedFontCallback('');

    /* Return updated data to parent */
    let data = getFontObj();

    ( 
      data['id'] === -1 
          ?
      appendListCallback( data )
          :
      updateListCallback( data )
    )
  }


  return (
    <Container>

      {/* At the rigitle={familyht side of the main screen */}
      <Card style={{ width    : '400px',  
                     position : 'absolute', 
                     bottom   : '0',
                     right    : '0' }}>

        {/* CARD BODY */}
        <Card.Body>
          <Table borderless responsive size='sm p-0 m-0'>
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
                          disabled={!fontInput}
                          onClick={onSubmit}
                          >
                    Add 
                  </Button>
                  {' '}
                  <Button variant='secondary' 
                          onClick={resetEditMenu}
                          >
                    Reset
                  </Button>
                  {' '}
                  <Button variant='danger' 
                          onClick={onClear} >
                    All Clear
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


