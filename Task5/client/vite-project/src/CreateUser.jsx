// import React, { useState } from "react"; 
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'


// function CreateUser(){
//     const[name,setName]=useState();
//     const[email,setEmail]=useState();
//     const[age,setAge]=useState();
//     const navigate =useNavigate();
    
//     const Submit = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:3001/createUser",{name,email,age})
//         .then(result => {
            
//             console.log(result)
//             navigate('/')
        
        
//         })
                            
//         .catch(err => console.log(err))

//     }
    
//     return(
//         <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//        <div className='w-50 bg-white rounded p-3'>
//        <form onSubmit={Submit}>
//         <h2>Add User</h2>
//         <div className="mb-2">
//         <label htmlFor="" >Name</label>
//         <input type="text" placeholder="Enter Name" className="form-control"
//        onChange={(e) => setName(e.target.value) }/>
       
//         </div>
//        <div className="mb-2">
//         <label htmlFor="" >Email</label>
//         <input type="email" placeholder="Enter Email" className="form-control"
//         onChange={(e) => setEmail(e.target.value) }/>
//         </div>
//         <div className="mb-2">
//         <label htmlFor="" >Age</label>
//         <input type="number" placeholder="Enter Age" className="form-control"
//         onChange={(e) => setAge(e.target.value)}/>
//         </div>
//         <button className="btn btn-success" >Add</button>
//        </form>
//        </div>
//         </div>
//     )
// }
// export default CreateUser;


import React, { useState } from "react"; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", { name, email, age })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div style={styles.usersContainer}>
            <div style={styles.innerContainer}>
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            placeholder="Enter Age"
                            className="form-control"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Add</button>
                </form>
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
        background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)' 
    },
    innerContainer: {
        width: '50%',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '16px'
    }
};

export default CreateUser;
