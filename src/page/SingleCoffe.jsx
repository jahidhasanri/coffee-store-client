import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const SingleCoffe = () => {
    const location = useLocation(); // Access the state passed through Link
    const user = location.state; // Extract the user data from state
    // const { id } = useParams(); // Get the dynamic ID from the URL (optional, for debugging)


    return (

        <div>
            <Header></Header>
            <div className="bg-pink-100 w-11/12 mx-auto min-h-screen flex flex-col items-center justify-center">
            {/* Back to Home */}
            <div className="w-11/12 mx-auto">
                <Link to="/" className="text-lg text-gray-600 flex items-center mb-10">
                    <span className="mr-2">←</span> Back to home
                </Link>
            </div>

            {/* Coffee Details */}
            <div className="w-11/12 mx-auto max-w-4xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={user.photo}
                        alt={user.name}
                        className="rounded-l-lg w-full object-cover"
                    />
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Niceties</h2>
                    <div className="text-gray-700">
                        <p className="mb-2">
                            <strong>Name:</strong> {user.name}
                        </p>
                        <p className="mb-2">
                            <strong>Chef:</strong> {user.chef}
                        </p>
                        <p className="mb-2">
                            <strong>Supplier:</strong> {user.supplier}
                        </p>
                        <p className="mb-2">
                            <strong>Taste:</strong> {user.taste}
                        </p>
                        <p className="mb-2">
                            <strong>Category:</strong> {user.category}
                        </p>
                        <p className="mb-2">
                            <strong>Details:</strong> {user.details}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default SingleCoffe;
