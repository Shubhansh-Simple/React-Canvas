/*
 * Base template of our application
 */

// Local
import Body   from './components/Body';
import Footer from './components/Footer';

/*
 *    <Body />
 *    <Footer />
 */
const App = () => {

  return (
    <>
      {/* Body Of Application */}
      <Body />

      {/* Footer Of Application */}
      <Footer />
    </>
  );
};

export default App;
