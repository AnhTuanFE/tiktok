import Sidebar from '~/Layouts/DefaultLayout/Sidebar';
import Header from '~/Layouts/components/Header';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
