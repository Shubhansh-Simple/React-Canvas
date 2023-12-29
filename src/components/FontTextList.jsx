/*
 * Return the TEXT with given CSS properties
 */

const FontTextList = ( {fontObjList, callBack} ) => {
  /*
   * ( Sample blueprint of fontObj PROP )
   *
   * fontObj = {
   *  'id'         : 1,
   *  'fontFamily' : 'monospace',
   *  'fontSize'   : 20,
   *  'fontColor'  : 'red',
   *  'x'          : 10,
   *  'y'          : 20
   *  'fontText'   : 'Sample text'
   * }
   *
   */

  /* On clicking any text on Screen
   * sends it's id to parent */
  const onClickText = id =>
    callBack(id);

  /*
   * Iterate through each font 
   * with their CSS properties 
   * & show them with CSS,if list exist
   */
  return (
    <>
      {
        fontObjList
          &&
        fontObjList.map( fontObj=>
          <p key={fontObj.id}
             onClick={()=>onClickText(fontObj.id)}
            style={{
              position  : 'absolute',
              color     : fontObj.fontColor, 
              fontFamily: fontObj.fontFamily,
              fontSize  : `${fontObj.fontSize}px`,
              transform : `translate( ${fontObj.x}px, ${fontObj.y}px )`,
            }}>
            {fontObj.fontText}
          </p>
        )
      }
    </>
  );
}

export default FontTextList;


