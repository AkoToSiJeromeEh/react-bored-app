import PropTypes from 'prop-types';
import './common/Author.css'
function Author(props) {
    const {isDark} = props
    const getFullYear = new Date

    const DarkModeOn = {

       txtShadow : {
        textShadow : isDark ? '2px 2px 5px white' : ''
       },
       txtColor : {
           
         color : isDark ? 'white' : ''
       }
    }
  return (
    <footer className='Author__Container'>
        <div className="Author__Context">
            <h3 style={DarkModeOn.txtShadow}>
                Bored Peenoise
            </h3>
        </div>
        <div className="Author_C">
            <p style={DarkModeOn.txtColor}>{getFullYear.getFullYear()} Darling | All Rigths Reserved.</p>
        </div>
    </footer>
  )
}

export default Author
Author.propTypes = {
    isDark: PropTypes.bool.isRequired, 
};