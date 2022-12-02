import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

//   const {_id} = users;

  const handleAdmin = _id => {
    console.log(_id)
    fetch(`http://localhost:5000/user/admin/${_id}`, {
        method: "PUT"
    })
    .then(res => res.json())
    .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success("Admin added successfully");
            }

        })
    }
        
  return (
    <>
      Admin Dashboard
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) => <tr key={user._id}>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{ user?.role !== 'admin' && <button onClick={() =>handleAdmin(user._id)} className="btn btn-sm btn-primary">Admin</button>}</td>
                <td><button className="btn btn-sm btn-secondary">Delete</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
