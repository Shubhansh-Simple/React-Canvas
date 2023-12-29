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

  // For showing off while TYPING
  const [text, setText] = useState('');

  const [textList, setTextList] = useState([]);

  /* Whenever there is change 
   * in textList STATE */
  useEffect(()=>{
    console.log(textList);
  },[textList]);


  /* Updating the existing text */
  const updateText = textId => {
    console.log('Selected text id is - ', textList[textId]);
  }


  /* Append data to the current state */
  const appendTextList = newFont =>{

    /* Clear Screen */
    if (Object.keys(newFont).length === 0){
      setTextList([]);
    }

    /* Add more text to Screen if text is not empty */
    else if ( newFont['fontText'].length > 0 ){
      newFont['id'] = textList.length;
      setTextList( existList=> [...existList,newFont] );
    }
  }

  return (
    <>
      {/* SHOW OFF TEXT WHILE TYPING  
          coming from EDITMENU */}
      <FontText fontObj={text} />

      {/* Text List */}
      <FontTextList fontObjList={textList} 
                    callBack={updateText} />

      {/* Font Edit Menu */}
      <EditMenu fontListCallback={data=>appendTextList(data)} 
                fontCallback={data=>setText(data)} />
    </>
  );
};

export default Body;
