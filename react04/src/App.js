import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

  const something = 'something is here!';
  const DATA = [
    {id:1, name: 'tomato'},
    {id:2, name: 'domado'},
    {id:3, name: 'toomatoo'},
    {id:4, name: 'tommatom'},
  ]

  return (
    <>
      <Header something={something} member = {DATA}/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
