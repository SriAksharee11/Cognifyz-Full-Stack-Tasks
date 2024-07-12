// import React from "react"; 
// import { useState,useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'


// function Users(){
//  const [users,setUsers] =useState([{Name:"Sri",Email:"sri@gmail.com",Age:20 

//  }])

//  useEffect(()=> {

//     axios.get('http://localhost:3001')
//     .then(result => setUsers(result.data))
//     .catch(err => console.log(err))
//  }, [])  


//  const handleDelete = (id) => {

//     axios.delete('http://localhost:3001/deleteUser/'+id)
//     .then(res => {console.log(res)
//   window.location.reload()})
//     .catch(err => console.log(err))
//  }



//     return(
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//          <div className='w-50 bg-white rounded p-3'>
//          <Link to ="/create" className="btn btn-success">Add+</Link>
//          <table className="table">  
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Age</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                    users.map((user) => {
//                     return <tr>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.age}</td>
//                     <td>
//                     <Link to ={`/update/${user._id}`} className="btn btn-success">Update</Link>

//                     <button className="btn btn-danger"  onClick={(e) => handleDelete(user._id)}>  Delete</button></td>
//                 </tr>
//                } )

//                 }

//             </tbody>

//          </table>
//          </div> 

//         </div>
//     )
// }
// export default Users; 


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return ( 

        
        <div style={styles.usersContainer}>

            <div style={styles.innerContainer}>
            <h1 className="text-center" >CRUD OPERATIONS</h1>
                <Link to="/create" className="btn btn-success mb-3">Add+</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const styles = {
    usersContainer: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)' // Mild gradient background
    },
    innerContainer: {
        width: '50%',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '16px'
    }
};

export default Users;
