import PropTypes from 'prop-types';
import { motion  } from "framer-motion";
import './common/card.css';
const Card = (props) => {
  const { isDark, onToggleDark , boredActivites , onClickBored } = props;

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div className='Card__Container' data-ison={isDark}  >

      <div className='Dark__Toggler' onClick={onToggleDark}>
        <motion.div className='Dark__Button' data-ison={isDark} layout transition={spring} />
      </div>
      <div className="Card__Wrapper">
        <div className="Card__Title">
          <h2>{boredActivites.activity}</h2>
        </div>
        <div className="Card__Generate">
          <button  onClick={onClickBored}  data-ison={isDark}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#888888" d="M4 2H2v8h2V2zm16 0h2v8h-2V2zm-6 6h-4V2H4v2h4v4H4v2h4v4H4v2h4v4H4v2h6v-6h4v6h2v-6h4v-2h-4v-4h4V8h-4V2h-2v6zm-4 6v-4h4v4h-4zM20 2h-4v2h4V2zM2 14h2v8H2v-8zm14 6h4v2h-4v-2zm6-6h-2v8h2v-8z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  isDark: PropTypes.bool.isRequired,
  boredActivites:PropTypes.object.isRequired,
  onToggleDark: PropTypes.func,
  onClickBored: PropTypes.func  
};

export default Card;
