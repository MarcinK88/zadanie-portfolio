import React from 'react';
import PropTypes from 'prop-types'
import s from './style.module.css';

function Navigation({ menus }) {
    return (
        //   <div className={s.root}>
        <div>
            <div>
                Nawigacje
        </div>
            <div>
                <ul>
                    {menus.map((item) => {
                        return (
                            <li>
                                <a href={item.link}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
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