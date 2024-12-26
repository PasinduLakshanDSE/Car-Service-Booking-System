import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';
import './userinfo.css';

import axios from "axios";
import AdminNavBar from "../AdminNav/AdminNav";

const { TabPane } = Tabs;

function UserInfo() {
    return (
        <div className="tab4">
            <AdminNavBar/>
        <div className="mt-3 ml-3 mr-3 bs">
            <h3>User Details</h3>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Users" key="1">
                    <UserDetails />
                </TabPane>
            </Tabs>
        </div>
        </div>
    );
}

export default UserInfo;

export function UserDetails() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users/getallUsers');
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers(); // Fetch data when component mounts
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                const response = await axios.delete(`/api/users/${id}`);
                if (response.status === 200) {
                    alert("User deleted successfully!");
                    fetchUsers(); // Refresh the list after deletion
                } else {
                    alert("Failed to delete the user. Please try again.");
                }
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("An error occurred while deleting the user.");
            }
        }
    };

    return (
        <div className="row">
            <div className="col-md-10">
                <table className="table table-bordered table-light">
                    <thead className="bs">
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Contact No</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.length > 0 ? (
                            users.map(user => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.contactNo}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(user._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
