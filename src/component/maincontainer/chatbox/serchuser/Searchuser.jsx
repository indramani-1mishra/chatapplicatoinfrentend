import React, { useEffect, useState } from 'react';
import './searchuser.css';
import { GoSearch } from "react-icons/go";
import Usercard from '../usercards/Usercard';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Searchuser() {
  const [value, setvalue] = useState('');
  const [user, setuser] = useState(null);
  const [userslist, setuserlist] = useState([]);
  const [suggectionarray, setsuggection] = useState([]);
  const [showsuggectionarray, setshowsuggectionarray] = useState(false);
 

  const finduser = async () => {
    try {
      if (value.trim() === '') {
        setuser(null);
        return;
      }

      const response = await axios.get(
        `http://localhost:3001/api/v1/users/search/${value}`,
        {
          withCredentials: true
        }
      );

      if (response) {
        setuser(response.data.data); // single user object
       // toast.success(response.data.message);
        console.log(response.data.data);
      }

    } catch (error) {
      console.log(error);
      toast.error("User not found or error occurred.");
      setuser(null);
    }
  };

  const findAllusers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/users/', {
        withCredentials: true
      });
      if (response) {
        setuserlist(response.data.data);
        console.log(response.data.data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const filterarrye = () => {
    const suggectionarry3 = userslist.filter((user) => 
      user.name.toLowerCase().includes(value.toLowerCase()) ||
      user.email.toLowerCase().includes(value.toLowerCase())
    );
    setsuggection(suggectionarry3);
    console.log(suggectionarry3, "Suggestions array");
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      finduser();
    }, 500);
    filterarrye();
    return () => clearTimeout(delay);
  }, [value]);

  useEffect(() => {
    findAllusers();
  }, []);

  const onchangehandler = (e) => {
    setshowsuggectionarray(true);
    setvalue(e.target.value);
  };

  const handleSuggestionClick = (item) => {
    setvalue(item.name);
    setuser(item); // set the selected user data
    setshowsuggectionarray(false); // hide suggestions
  };

  return (
    <div className='absolute top-10 left-[40%] w-[45%]'>
      <div className='flex justify-center items-center shadow-[0_0_5px_0_black] rounded-md bg-white'>
        <input
          type="text"
          onChange={(e) => onchangehandler(e)}
          value={value}
          placeholder="Search user by name, email"
          className="inputbox"
        />
        <div className='btns'>
          <GoSearch />
        </div>
      </div>

      {/* Suggestions */}
      {value && showsuggectionarray && suggectionarray.length > 0 && (
        <ul className="bg-white max-h-40 overflow-y-auto border mt-2 rounded shadow">
          {suggectionarray.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSuggestionClick(item)}
            >
              <Usercard
                useremail={item.email}
                username={item.name}
                userprofile={item.profileimage}
              />
            </li>
          ))}
        </ul>
      )}

      <div className='userdatafield'>
        {user ? (
          <Usercard
            useremail={user.email}
            username={user.name}
            userprofile={user.profileimage}
          />
        ) : (
          value && <p className="text-center mt-2 text-gray-500">No user found.</p>
        )}
      </div>
    </div>
  );
}
