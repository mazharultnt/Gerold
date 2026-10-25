import NavBar from './components/NavBar';

const RootLayout = ({ children }) => (
    <>
        <NavBar />
        {children}
    </>
);

export default RootLayout;