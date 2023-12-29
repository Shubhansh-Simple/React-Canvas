/*
 * Return the TEXT with given CSS properties
 */

const FontText = ( {fontObj} ) => {
  /* ( Sample blueprint of fontObj PROP )
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
   */

  /*
   * Show font with given CSS properties
   * if list exist
   */
  return (
      <p key={fontObj.id}
        style={{
          position  : 'absolute',
          color     : fontObj.fontColor, 
          fontFamily: fontObj.fontFamily,
          fontSize  : `${fontObj.fontSize}px`,
          transform : `translate( ${fontObj.x}px, ${fontObj.y}px )`,
        }}>
        {fontObj.fontText}
      </p>
  );
}

export default FontText;


