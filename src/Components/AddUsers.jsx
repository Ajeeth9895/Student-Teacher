import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser } from "../redux/userReducer";
import { editUser } from "../redux/userReducer";

//Add users and edit users are done in same page based on 'id';
function AddUsers() {
  let [studentName, setStudent] = useState("");
  let[email,setEmail] = useState("")
  let [mentorName, setMentor] = useState("");
  let [batch,setBatch] = useState("")

  // params to get id value from url
  let { id } = useParams();
  let data = useSelector((state) => state.users.studentData);//redux function to get student data from userRedux.jsx
  let dispatch = useDispatch();
  let navigate = useNavigate();

  //useEffect use to pre-populate value when redirect to edit page
  useEffect(() => {
    //we use condition for add and edit user based on 'id'
    if (id) {
      setStudent(data[id].studentName);
      setEmail(data[id].email)
      setMentor(data[id].mentorName);
      setBatch(data[id].batch)
    } else {
      navigate("/add-users");
    }
  }, []);

   //Handle submit function for add users and edit user
  let submitHandler = () => {
    //we use condition for addUser and editUser based on 'id'
    if (id) {
      dispatch(editUser({ index: id, data: { studentName, email, mentorName, batch } }));
      navigate("/all-users");
    } else {
      dispatch(addUser({studentName,email, mentorName, batch }));
      navigate("/all-users");
    }
  };

   //Form area to enter student and mentor details
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Sudent Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Student Name"
          value={studentName}
          onChange={(e) => setStudent(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mentor Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Mentor Name"
          value={mentorName}
          onChange={(e) => setMentor(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={() => submitHandler()}>
        Submit
      </Button>
    </Form>
  );
}

export default AddUsers;
