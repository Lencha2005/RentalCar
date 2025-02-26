import { PropagateLoader } from "react-spinners";
import css from './Loader.module.css'


const Loader = () => {
  return (
    <PropagateLoader color='#0b44cd' className={css.loader}/>
  )
}

export default Loader