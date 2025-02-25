import { NavLink } from 'react-router-dom';
import css from "./Navigation.module.css";
import clsx from 'clsx';

const buildCssClasses = ({isActive}) => clsx(css.link, isActive && css.active)

const Navigation = () => {
  return (
    <nav className={css.nav}>
        <NavLink to="/" className={buildCssClasses}>Home</NavLink>
        <NavLink to="/catalog" className={buildCssClasses}>Catalog</NavLink>
    </nav>
  )
}

export default Navigation