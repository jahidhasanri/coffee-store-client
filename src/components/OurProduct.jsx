import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { IoEyeSharp } from 'react-icons/io5';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

const OurProduct = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setUsers(data); // Ensure it's an array
                } else {
                    console.error("Expected an array but got:", data);
                }
            });
    }, []);

    const handelDelter = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            // Update the state
                            setUsers((prevUsers) => prevUsers.filter(user => user._id !== _id));
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        }
                    });
            }
        });
    };

   

    return (
        <div className='rancho-regular w-11/12 mx-auto'>
            <div className='text-center mt-10'>
                <h3 className='font-normal text-xl mb-4'>--- Sip & Savor ---</h3>
                <h2 className='font-normal text-6xl mb-4'>Our Popular Products</h2>
                <Link to={'/addCoffe'} className='btn bg-[#E3B577] mb-8'>
                    Add Coffee <img src="/images/icons/Vector.png" alt="" />
                </Link>
            </div>
            <div>
                <h3>length: {users.length}</h3>
                <div className='grid grid-cols-2 gap-5'>
                    {Array.isArray(users) && users.map(user => (
                        <div key={user._id} className="card lg:card-side bg-base-100 shadow-xl">
                            <figure>
                                <img src={user.photo} alt="coffee" />
                            </figure>
                            <div className="flex w-full m-4 items-center justify-between">
                                <div>
                                    <p>Name: {user.name}</p>
                                    <p>Price: {user.price}</p>
                                    <p>Taste: {user.taste}</p>
                                </div>
                                <div className="card-actions justify-end join join-vertical">
                                    <Link
                                        to={`/singleCoffee/${user._id}`}
                                        state={user} // Pass the user data
                                        className="btn join-item">
                                        <IoEyeSharp />
                                    </Link>
                                    <Link to={`/update/${user._id}`} className='btn join-item'>
                                        <MdEdit />
                                    </Link>
                                    <button className='btn join-item' onClick={() => handelDelter(user._id)}>
                                        <MdDeleteForever />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurProduct;
