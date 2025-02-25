import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import css from "./Header.module.css"

export const Header = () => {
  return (
    <div className={css.header}>
      <Logo />
      <Navigation />
    </div>
  )
}
