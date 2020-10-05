import React from "react";
import { useQuery, gql } from "@apollo/client";

function Students() {
  const Get_Students = gql`
    query GetAllStudent {
      students {
        id
        name
        email
        age
      }
    }
  `;
  const { loading, error, data } = useQuery(Get_Students);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  const { students } = data;

  return (
    <div className="App">
      <h1>
        Students List
        <span />
        🚀
      </h1>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((std) => {
            return (
              <tr key={std.id}>
                <td>{std.name}</td>
                <td>{std.email}</td>
                <td>{std.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
