import React, { useState } from 'react';
import axios from 'axios';
import { USER_API_END_POINT } from '../../utils/constant';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    password: '',
     role: "",
     file: ""
  });
  // const navigate= useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      file: files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    
    // Create a FormData object
    const data = new FormData();
    data.append('fullname', formData.fullname);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('password', formData.password);
    data.append('role', formData.role);
    if (formData.file) {
      data.append('file', formData.file);
    }
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      // Send the form data using Axios
      const response = await axios.post(`${USER_API_END_POINT}/register`, data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
      if(response.data.success){
        // navigate("/login")
      }
      console.log('Response:', response.data);
      console.log("happy");
      
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data); // Logs the server error message
        alert(error.response.data.message); // Show the error message to the user
      } else if (error.request) {
        console.error("No Response Received:", error.request);
        alert("No response received from server.");
      } else {
        console.error("Error Config:", error.message);
        alert("An error occurred.");
      }
    }
    
    
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Sign up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* User Type Selection */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input
                type="radio"
                id="student"
                name="role"
                value="student"
                checked={formData.role === 'student'}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="student" className="ml-2 text-sm text-gray-700">
                Student
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="recruiter"
                name="role"
                value="recruiter"
                checked={formData.role === 'recruiter'}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="recruiter" className="ml-2 text-sm text-gray-700">
                Recruiter
              </label>
            </div>
          </div>

          {/* Profile Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
              />
              <span className="text-sm text-gray-500">
                {formData.file ? formData.file.name : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Signup
          </button>

          {/* Sign In Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a
                href="/signin"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm; 