import { key } from 'localforage';
import React, { useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { data, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Users = () => {
    const loaddedData=useLoaderData()
    const [users,setUser]=useState(loaddedData)
    const handelDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/man/${id}`,{
                method:'DELETE'
            })
            .then((res)=>res.json())
            .then((data) =>{
                if(data.deletedCount){
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const updateUser = users.filter(user => user._id !== id)
                          setUser(updateUser)
                }
                console.log("hoyse",data);
            })
            }
          });
    }
    return (
        <div>
            <Header></Header>
            <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody className='mb-3'>
            {/* row 1 */}
                {
                    users.map(user  => <tr className='mb-3' key={user._id}>
                        <th>1</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className='btn mr-3'><IoEyeSharp /></td>
                        <td className='btn mr-3'><MdEdit /></td>
                        <td onClick={()=>handelDelete(user._id)} className='btn'><MdDeleteForever /></td>
                      </tr>  )
                }

            
            {/* row 2 */}
            
          </tbody>
        </table>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default Users;