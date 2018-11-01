import React, { Component } from 'react';

// class PageA extends Component {
//     render() {
//         return (
//             <div>
//                 A页面
//
//                 {this.props.match.params.id}
//             </div>
//         );
//     }
// }

const PageA = ({match}) =>{
    return (
        <div> A页面
            {match.params.id}
        </div>
    )
}
export default PageA;
