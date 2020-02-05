import React, { Component } from 'react';

class FriendTable extends Component {


    state = {
        friendList2: [],
        id : '',
        name : '',
        relationship : '',
    }

    friendclick = (name) => {
        alert(name);
    }


    setTable = (friendList) => {
        return friendList.map((contact, i) => {
            return(
                <tr key={i} className="table-success" onClick={ () =>this.props.selectFriend(contact) }>
                    <td>
                        {i+1}
                    </td>
                    <td>
                        {contact.relationship}
                    </td>
                    <td>
                        {contact.name}
                    </td>
                </tr>
            );
        })
        
    }

    render() {
        return(
            <div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            관계
                        </th>
                        <th>
                            이름
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.setTable(this.props.friendList)}
                </tbody>
            </table>



                    

            <nav className="pagination-sm">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#">Previous</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">4</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">5</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default FriendTable;