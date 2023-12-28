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
      <FontText fontStyle={text} />

      {/* Text List */}
      <FontTextList fontStyleList={textList} />

      {/* Font Edit Menu */}
      <EditMenu fontList={data=>appendTextList(data)} 
                font={data=>setText(data)}
      />
    </>
  );
};

export default Body;
