import Axios from "axios";
import { useEffect, useState } from "react";

export function Component1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const Info = () => {
    return data.map((val) => {
      return (
        <tr key={val.id}>
          <td>{val.id}</td>
          {/* <td>{val.firstName}</td> */}
          <td>{val.name}</td>
          {/* <td>{val.gender}</td> */}
          <td>{val.email}</td>
          <td>{val.username}</td>
          <td>{val.phone}</td>
          {/* <td>{val.ip}</td> */}
          <td>{val.website}</td>
          <td>{val.address.zipcode}</td>
        </tr>
      );
    });
  };

  return (
    <center>
    <div >
      <h1>Dummy Data</h1>
      <div>
        <table class="table">
          <tr>
            <td class="row">Sno.</td>
            {/* <td>Profile Pic</td> */}
            {/* <td>First Name</td> */}
            <td class="row">Name</td>
            {/* <td>Gender</td> */}
            <td class="row"> E-mail</td>
            <td class="row">Username</td>
            <td class="row">Phone No.</td>
            <td class="row">Website</td>
            <td class="row">Pincode</td>
          </tr>
          {Info()}
        </table>
      </div>
    </div>
    </center>
  );
}
