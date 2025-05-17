"use client";
import { useEffect, useState } from "react";
export default function LienHe() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {const response = await fetch("/api/user");

        const result = await response.json();
        if (response.ok) {
          console.log("Users:", result.data);
          setUsers(result.data);
        } else {
          console.error("Error fetching users:", result.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }


    fetchUsers();
  }, []);


  return (
    <div>
      <h2>Liên hệ</h2>
      <br></br>
      <p>trần xuân ngọc đăng </p>
      {users.map((user) => (
        <div key={user._id}>
          <p> {user.name}</p>
          <p>Address: {user.address}</p>
        </div>
      ))}
    </div>
  );
}
