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

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("User deleted successfully");
          const remainingUsers = users.filter((user) => user._id !== _id);
          setUsers(remainingUsers);
        }
      });
  };

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
                const remainingUsers = users.filter(user => user._id !== _id);
                setUsers(remainingUsers);
            }

        })
    }
        
  return (
    <>
      <h3 className="text-3xl font-bold text-gray-900">List of All Users</h3>
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
                <td><button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-secondary">Delete</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
