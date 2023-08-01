import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactDetails() {
  const [user, setUser] = useState();
  const { userId } = useParams();
  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/users/${userId}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userId]);
  console.log(user);
  return (
    <>
      {user ? (
        <div className="user-card-details">
          <p>
            address: city: {user.address.city} street: {user.address.street}{" "}
            number: {user.address.number} zipcode: {user.address.zipcode}
          </p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <p>
            Name: {user.name.firstname} {user.name.lastname}
          </p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <p>loading</p>
      )}{" "}
    </>
  );
}
export default ContactDetails;
