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

    /* If there is no text on screen */
    if ( textList.length === 0 ){

      /* BUG- Should located at the center of the screen */
      const welcomeText = {
         'id'         : -1,
         'fontFamily' : 'monospace',
         'fontSize'   : 50,
         'fontColor'  : 'red',
         'fontText'   : 'Welcome To TextCraft',
         'x'          : 330,
         'y'          : 220
      }
      setTypedText(welcomeText);
    }
    console.log(textList,textList.length);
  },[textList]);


    /**
     * APPEND FUNCTION
     */

  /* APPEND item to the current state */
  const appendTextList = newFont =>{

    /* ID ALREADY EXIST */
    if( newFont.id !== -1 )
      updateTextList(newFont);

    /* Add more text to Screen if text is not empty 
     * and ID not already exist*/
    else if ( newFont['fontText'] && newFont['fontText'].length ){
      newFont['id'] = textList.length;
      setTextList( existList=> [...existList,newFont] );
    }
  }

    /**
     * UPDATE FUNCTION
     */

  /* UPDATE items in list, Since ID exist */
  const updateTextList = updateFont => {

    // Copied existing STATE
    let copyTextList = [...textList];

    // Update locally stored data
    copyTextList[updateFont.id] = updateFont;

    // Update original state
    setTextList(copyTextList);
  }


    /**
     * CHOOSE FUNCTION
     */

  /* Updating the existing text */
  const updateThisText = itemId => {

    let fontToUpdate = textList[itemId];

    if ( fontToUpdate )
      setUpdateFont(fontToUpdate)
    else
      throw new Error('Id doesn\'t exist for updating');
  }
    /**
     * DELETE FUNCTION
     */
  const deleteTextItem = itemId => {

    console.log('Deleting Text - ',itemId );
  
    // Copied existing STATE
    let copyTextList = [...textList];

    /* Delete item of given id */
    copyTextList = copyTextList.filter( item=>{
      return item['id'] !== itemId
    })

    /*
     * BUG - solution is to remove 'id'
     * Re-arranging the index - LATER OPTIMIZED
     * DUE TO LESS TIME FOR CODE SUBMISSION
     */
    for (let i = 0; i < copyTextList.length; i++ )
      copyTextList[i]['id'] = i;

    // Update original state
    setTextList(copyTextList);
  }

    /**
     * DRAG FUNCTION
     */

  /* On Dragging text, update state with latest position */
  const onDragStop = (event,id) => {

    // Copied existing STATE
    let copyTextList = [...textList];

    copyTextList[id]['x'] = event.clientX;
    copyTextList[id]['y'] = event.clientY;

    // Update original state
    setTextList(copyTextList);
  }


    /**
     * ALL CLEAR FUNCTION
     */

  /* On clicking clear screen */
  const clearScreen = () => setTextList([]);


  return (
    <>
      {/* For SHOW OFF TEXT WHILE TYPING  
          coming from EDITMENU */}
      <FontText fontObj={typedText} />

      {/* Text List On Screen */}
      <FontTextList fontObjList={textList} 
                    dragCallback={(e,id)=>onDragStop(e,id)}
                    onClickCallback={updateThisText} />

      {/* Font Edit Menu */}
      <EditMenu appendListCallback={data=>appendTextList(data)} 
                updateListCallback={data=>updateTextList(data)}
                clearListCallback={()=>clearScreen()}
                deleteItemCallback={(id)=>deleteTextItem(id)}
                typedFontCallback={data=>setTypedText(data)} 
                updateFont={updateFont} />
    </>
  );
};

export default Body;
