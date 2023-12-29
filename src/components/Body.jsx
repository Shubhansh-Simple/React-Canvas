/*
 * Body Of Entire Application
 */

// React
import { useEffect, useState } from 'react';

// Local
import FontText     from './FontText';
import EditMenu     from './EditMenu';
import FontTextList from './FontTextList';

const Body = () => {

  /* For showing off while TYPING */
  const [ typedText, setTypedText] = useState('');

  /* MAIN STATE for storing sentences */
  const [textList, setTextList] = useState([]);

  /* For updating existing font */
  const [updateFont, setUpdateFont] = useState({});


  /* Whenever there is change 
   * in textList STATE */
  useEffect(()=>{
    console.log(textList,textList.length);
  },[textList]);


  /* Append data to the current state */
  const appendTextList = newFont =>{

    console.log('Append method called ', newFont);

    /* EMPTY OBJECT - Clear Screen */
    if (Object.keys(newFont).length === 0)  setTextList([]);

    /* ID ALREADY EXIST */
    else if( newFont.id !== -1 )
      updateTextList(newFont);

    /* Add more text to Screen if text is not empty 
     * and ID not already exist*/
    else if ( newFont['fontText'] && newFont['fontText'].length ){
      newFont['id'] = textList.length;
      setTextList( existList=> [...existList,newFont] );
    }
  }


  /* Update items in list, Since ID exist */
  const updateTextList = updateFont => {

    // Copied existing STATE
    let copyTextList = [...textList];

    // Update locally stored data
    copyTextList[updateFont.id] = updateFont;

    // Update original state
    setTextList(copyTextList);
  }


  /* Updating the existing text */
  const updateThisText = textId => {

    let fontToUpdate = textList[textId];
    console.log('fontToUpdate - ', fontToUpdate, typeof(fontToUpdate));

    if ( fontToUpdate ){
      console.log('Selected text id is - ', fontToUpdate);
      setUpdateFont(textList )
    }
    else
      throw new Error('Id doesn\'t exist for updating');
  }


  /* On Dragging text, update state with latest position */
  const onDragStop = (event,id) => {
    console.log('Axis - ', event.clientX, event.clientY);

    // Copied existing STATE
    let copyTextList = [...textList];

    copyTextList[id]['x'] = event.clientX;
    copyTextList[id]['y'] = event.clientY;

    // Update original state
    setTextList(copyTextList);
  }


  return (
    <>
      {/* SHOW OFF TEXT WHILE TYPING  
          coming from EDITMENU */}
      <FontText fontObj={typedText} />

      {/* Text List On Screen */}
      <FontTextList fontObjList={textList} 
                    dragCallback={(e,id)=>onDragStop(e,id)}
                    onClickCallback={updateThisText} />

      {/* Font Edit Menu */}
      <EditMenu appendListCallback={data=>appendTextList(data)} 
                updateListCallback={data=>updateTextList(data)}
                typedFontCallback={data=>setTypedText(data)} 
                updateFont={updateFont} />
    </>
  );
};

export default Body;
