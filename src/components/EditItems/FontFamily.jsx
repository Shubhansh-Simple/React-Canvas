/*
 * Font Family Selector UI Component
 */

// React
import {useEffect} from 'react';

// React-bootstrap
import { Dropdown, DropdownButton } from "react-bootstrap";


const FontFamily = ( {familyCallback, family} ) => {

  /* Font Family Options */
  const FontFamilyList = [ 'Ubuntu', 'monospace', 
                           'Monaco', 'Courier New' ];

  /* Store id in text property
   * can optimize this */
  useEffect( ()=>{
    familyCallback(family);
  },[ family ])

  /* On selecting any font family */
  const onFontFamilySelect = id => {

    /* Return updated data to parent */
    familyCallback(FontFamilyList[id]);
  }

  return (
      <DropdownButton title={family} 
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

