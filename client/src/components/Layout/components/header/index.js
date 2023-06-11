import classNames from 'classnames/bind';
import { styles } from '.Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <h1>Bookkkk Store</h1>
            <div className={cx('menu')}>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/new">New</Link>
            </div>


        </header>
    );
}
export default Header;