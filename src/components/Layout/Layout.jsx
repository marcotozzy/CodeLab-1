import {} from 'react-router-dom';
import './Layout.scss';
import Effect from '../Frame2/Effect.jsx';
import Header from '../Header/Header.jsx';

const Layout = () => {
	return (
		<>
			<Header />
            <Effect />
		</>
	);
};

export default Layout;