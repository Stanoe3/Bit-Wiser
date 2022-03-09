import PropTypes from "prop-types";
import Navbar from "./Navbar"

const Header = ({ title }) => {
  return (
    <div>
        <Navbar />
        <h1>{title}</h1>
    </div>
    
  )
}

Header.defaultProps = {
    title: "BitWiser"
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header