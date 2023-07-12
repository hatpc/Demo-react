import './button.css';

function button(props) {
    const { title } = props || {}

    return(<button className='button'>{title}</button>);
}

export default button;
