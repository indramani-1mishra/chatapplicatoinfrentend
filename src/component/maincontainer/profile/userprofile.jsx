import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './usedetail.css';
import { setId } from '@/redux/userdetails/userslice';
import { FaEdit } from "react-icons/fa";
import { MdModeEdit, MdOutlineDataSaverOn } from "react-icons/md";
import Button from '@/component/reusebleelement/button/Button';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
export default function Userprofile() {
  const id = useSelector((state) => state.user.id);
  const [userdata, setUserdata] = useState(null);
  const [editbutton, seteditbutton] = useState(false);
  const [profileEdit, setprofileedit] = useState(false);
  const [profileimage, setprofileimage] = useState(null);
  const [name, setname] = useState('');
 // const [email, setemail] = useState('');
  const dispatch = useDispatch();
  const  navigate2 =useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/users/${id}`,
          { withCredentials: true }
        );
        const data = response.data.data;
        setUserdata(data);
        setname(data.name);
       // setemail(data.email);

        dispatch(setId({
          id,
          name: data.name,
          imageurl: data.profileimage
        }));

        if (data) {
          toast.success(response.data.message);
        } else {
          toast.info("User details not found");
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error(error.message);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id, dispatch]);

  const handleedit = () => {
    seteditbutton(true);
  };

  const handleprofile = () => {
    setprofileedit(true);
  };

  const handlesave = async () => {
    seteditbutton(false);
    setprofileedit(false);

    let formData = new FormData();
    formData.append("name", name);
   // formData.append("email", email);
    if (profileimage) {
      formData.append("profileimage", profileimage);
    }

    try {
      toast.info("Updating user...");
      const response = await axios.patch(
        `http://localhost:3001/api/v1/users/${id}`,
        formData,
        { withCredentials: true }
      );
      const updated = response.data.data;
      setUserdata(updated);
      toast.success(response.data.message || "User updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("User not updated");
    }
  };

  return (
    <div className="user-profile-container">
      <h1 className='w-full relative right-0.5 cursor-pointer' title="edit profile">
      <FaArrowLeft  onClick={()=>navigate2('/')}  />
      </h1>
      <h2 className="user-profile-heading">User Profile</h2>
      {userdata ? (
        <div className="user-details">
          <div className="user-info">
            {!editbutton ? (
              <>
                <p className="user-name">
                  Name: {userdata.name} <MdModeEdit style={{ cursor: "pointer" }} onClick={handleedit} />
                </p>
              </>
            ) : (
              <div className='inputsa'>
                <input
                  type="email"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder='enter username to update'
                  className="border px-2 py-1 rounded w-[90%]"
                />
                <Button onclickhandler={handlesave} text={<MdOutlineDataSaverOn color='red' />} />
              </div>
            )} 
                <p className="user-email">
                  Email: {userdata.email} 
                </p>
            
          </div>

          <div className="user-image-wrapper">
            {profileEdit ? (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setprofileimage(e.target.files[0])}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <Button onclickhandler={handlesave} text={<MdOutlineDataSaverOn color='red' />} />
              </>
            ) : (
              <>
                <div className="relative inline-block">
                  <img
                    className="w-24 h-24 rounded-full object-cover"
                    src={userdata.profileimage}
                    alt="Profile"
                  />
                  <MdModeEdit
                    className="absolute top-0 right-0 text-2xl text-gray-600 cursor-pointer hover:text-gray-800"
                    style={{ fontSize: "28px" }}
                    onClick={handleprofile}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <p className="loading-text">Loading...</p>
      )}
    </div>
  );
}
