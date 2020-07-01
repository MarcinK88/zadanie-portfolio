import React from 'react';
import s from './style.module.css';

export default function Navigation({ menu }) {
    return (
        <ul className={s.navigation}>
            {menu.map((item => (
                <li>
                    <a href={item.link}>{item.title}</a>
                </li>
            )))}
        </ul>
    )
}






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