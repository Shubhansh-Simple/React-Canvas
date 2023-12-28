/*
 * Base template of our application
 */

// React-Router

// Local
import Body   from './components/Body';
import Footer from './components/Footer';

/*
 * Router uses the outlet ( index.js )
 * like which component need to show
 * there
 */
const App = () => {
  // <Header />
  return (
    <>
      {/* Body Component */}
      <Body />

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default App;
