import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import Footer from '../components/Footer';

const AddCoffeePagae = () => {
    const handelSumit = (e)=>{
        e.preventDefault();
        const form=e.target;
        const name = form.name.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const users= {name,price,supplier,taste,category,details,photo}
        console.log(users);
        fetch('http://localhost:5000/users',{
            method:"POST", 
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(users)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.insertedId){
                alert("user added successfully")
                form.reset();
                console.log(data);
            }
        })
    }
    return (
        <div className=' '>
            <div className='w-full'>
            <Header></Header>
            </div>
            <div className='w-11/12 mx-auto p-12 bg-pink-100 rancho-regular'>
                <Link to={'/'} className='btn font-normal text-base mb-7'> <FaArrowLeftLong></FaArrowLeftLong> Back to home</Link>



                <div className="card  w-full shrink-0 shadow-2xl">
                <form onSubmit={handelSumit} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' placeholder="coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' placeholder="taste name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Coffee</button>
                    </div>
                </form>
            </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCoffeePagae;