import React from 'react';
import PropTypes from 'prop-types'
import s from './style.module.css';

function Navigation({ menus }) {
    return (
       
    )
}

Navigation.propTypes = {

}

export default Navigation


// export default class Navigation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: props.data // || 0,
//         }
//     }

//     render() {
//         const { data } = this.props;
//         return (
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     {data.map(item => {
//                         return <a className="nav-item nav-link" href={item.link}>{item.title}</a>
//                     })}
//                 </nav>
//             </div>
//         )
//     }
// }