/*
 * Font Family Selector UI Component
 */

import {useState} from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";


const FontFamily = ( {family} ) => {

  /* Font Family Options */
  const FontFamilyList = [ 'Ubuntu', 'monospace', 
                           'Monaco', 'Courier New' ];

  const DEFAULT_FAMILY = 'Ubuntu';

  /* STATE FOR FONT FAMILY */ 
  const [ fontFamily, setFontFamily ] = useState(DEFAULT_FAMILY);

  /* On selecting any font family */
  const onFontFamilySelect = id => {

    setFontFamily(FontFamilyList[id]);

    /* Return updated data to parent */
    family(FontFamilyList[id]);
  }

  return (
      <DropdownButton title={fontFamily} 
                      id='fontFamilyInput'
                      variant='secondary'
                      onSelect={onFontFamilySelect} >
        {
          FontFamilyList.map( (familyItem,index) =>
            <Dropdown.Item key={index} eventKey={index}>
              <b>{familyItem}</b>
            </Dropdown.Item>
          )
        }
      </DropdownButton>
  );
}

export default FontFamily;

