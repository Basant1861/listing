import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../scss/style.scss'

class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (

                  <tr>
                    <td className="tg-yw4"><img className="img-circle" src={user.thumbnail} height="60" width="60"/></td>
                    <td className="t-yw4l">
                       <table>
                          <tbody>
                            <tr>
                              <th> {user.first} {user.last}</th>
                            </tr>
                            <tr>
                              <th> {user.date}</th>
                            </tr>
                          </tbody>
                          </table>
                    </td>
                  </tr>


            );
        });
    }

    render() {
        return (
          <div className="tg-wrap">
             <table className="tgfd">
             <tbody>
              <tr>
                <th className="tg-ywl">MESSAGES</th>
                <th className="tg-w4l"><button>ACTIONS</button></th>
              </tr>
              {this.renderList()}
              </tbody>
              </table></div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);
