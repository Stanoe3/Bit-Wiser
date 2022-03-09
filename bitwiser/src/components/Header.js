import PropTypes from "prop-types";
import Navbar from "./Navbar"

const Header = ({ title }) => {
  return (
    <div>
        <Navbar items={[title, "Home Page", "Profile", "My Exercises"]}/>
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