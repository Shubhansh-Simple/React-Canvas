/*
 * Return the TEXT with given CSS properties
 * We able to drag and drop this text
 */

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
const FontTextList = ( {fontObjList, dragCallback, onClickCallback} ) => {

  /* On clicking any text on Screen
   * sends it's id to parent */
  const onTextClick = id =>
    onClickCallback(id);

  /* DRAGGING ENDS */
  const onDragStop = (event, id) =>{
    dragCallback(event, id);
  }

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
          <div key={fontObj.id}>
            <p draggable={true}
               onClick={()=>onTextClick(fontObj.id)}
               onDragEnd={e=>onDragStop(e,fontObj.id) }

              style={{
                position  : 'absolute',
                color     : fontObj.fontColor, 
                fontFamily: fontObj.fontFamily,
                fontSize  : `${fontObj.fontSize}px`,
                transform : `translate( ${fontObj.x}px, ${fontObj.y}px )`,
              }}>

                {fontObj.fontText}
            </p>
          </div>
        )
      }
    </>
  );
}

export default FontTextList;


