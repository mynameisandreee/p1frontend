import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/profile.css'; // Optional: If you want to include custom styles

const Profile = () => {
    return (
        <div className="profile-container">
            
            <div className="row justify-content-center py-5">
                <div className="col-xl-4 col-md-6 col-sm-10">
                
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 bg-dark text-white text-center">
                            <div className="profile mb-3">
                                <img 
                                    src="https://bootstrapious.com/i/snippets/sn-profile/teacher.jpg" 
                                    alt="Profile" 
                                    width="130" 
                                    className="rounded-circle border border-light" 
                                />
                                <a href="#" className="btn btn-dark btn-sm btn-block mt-2">Edit profile</a>
                            </div>
                            <h4 className="mt-2 mb-0">Manuella Tarly</h4>
                            <p className="small mb-4"> 
                                <i className="fa fa-map-marker mr-2"></i>San Francisco
                            </p>
                        </div>

                        <div className="bg-light p-3 d-flex justify-content-around text-center">
                            <ul className="list-inline mb-0">
                                
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">84K</h5>
                                    <small className="text-muted"> 
                                        <i className="fa fa-user-circle-o mr-1"></i>Followers
                                    </small>
                                </li>
                            </ul>
                        </div>

                        {/* Add Post Button */}
                        <div className="px-4 py-3 text-center">
                            <a href="#" className="btn btn-primary btn-lg">Add Post</a>
                        </div>

                        <div className="py-4 px-4">
                            
                            <div className="py-4">
                                <div className="p-4 bg-light rounded shadow-sm">
                                    <p className="font-italic mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        
        </div>
    );
};

export default Profile;
