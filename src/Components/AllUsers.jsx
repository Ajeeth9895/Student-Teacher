import React from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../redux/userReducer";

//AllUer to show all the student and mentor details 
function AllUsers() {
  let data = useSelector((state) => state.users.studentData);//redux function to get student data from userRedux.jsx
  let dispatch = useDispatch();
  let navigate = useNavigate();

   //Table to show student and mentor details
  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Student Name</th>
            <th>Mentor Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {/* map function to get data */}
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.studentName}</td>
                <td>{e.mentorName}</td>
                <td>
                  {/* Edit function button */}
                  <Button variant="primary" onClick={()=>navigate(`/add-users/${i}`)}>Edit</Button>
                  &nbsp;
                  &nbsp;
                  {/* Delete function button */}
                  <Button variant="danger" onClick={()=>dispatch(deleteUser({index:i}))}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default AllUsers;
