/*
 * Return the TEXT with given CSS properties
 */

const FontTextList = ( {fontStyleList} ) => {
  /*
   * ( Sample blueprint of fontStyle PROP )
   *
   * fontStyle = {
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
  // Debug
  // console.log('List - ', fontStyleList);

  /*
   * Iterate through each font and show them with CSS
   * if list exist
   */
  return (
    <>
      {
        fontStyleList
          &&
        fontStyleList.map( fontStyle=>
          <p key={fontStyle.id}
            style={{
              position  : 'absolute',
              color     : fontStyle.fontColor, 
              fontFamily: fontStyle.fontFamily,
              fontSize  : `${fontStyle.fontSize}px`,
              transform : `translate( ${fontStyle.x}px, ${fontStyle.y}px )`,
            }}>
            {fontStyle.fontText}
          </p>
        )
      }
    </>
  );
}

export default FontTextList;


