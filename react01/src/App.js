import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Wrap from './Wrap';

const App = () => {
    return (
        <Wrap>
            <Header />
            <Main i="tomato" work="춤추기"/>
            <Main i="domado" work="케찹 되기"/>
            <Main i="toomatoo" work="토마토소스 되기"/>
            <Main i="temmatem"/>
            <Footer />
        </Wrap>
    )
}

export default App;