import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    const onClick = (e) => {
        alert(e.color);
        
    }

    return (
        <button onClick={onClick} className='btn' style={{backgroundColor : color
    }}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}


export default Button;


