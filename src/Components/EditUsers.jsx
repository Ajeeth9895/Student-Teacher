// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector} from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { editUser } from '../redux/userReducer';
// import { useParams } from 'react-router-dom';

// function EditUsers() {

//   let [studentName,setStudent] = useState("");
//   let [mentorName,setMentor] = useState("");
//   let data = useSelector((state)=>state.users.studentData)

//   let dispatch = useDispatch();
//   let navigate = useNavigate();
//   let {id} = useParams();

//   useEffect(()=>{
//       if(id){
//         setStudent(data[id].studentName)
//         setMentor(data[id].mentorName)
//       }else{
//         navigate("/all-users")
//       }
//   },[])
 
//   let submitHandler = ()=>{
//      dispatch(editUser({index:id,data:{studentName,mentorName}}))
//      navigate("/all-users")
//   }

//   return (
//     <Form>
//     <Form.Group className="mb-3">
//       <Form.Label>Sudent Name</Form.Label>
//       <Form.Control type="text" placeholder="Enter Student Name" value={studentName} onChange={(e)=>setStudent(e.target.value)} />
//     </Form.Group>

//     <Form.Group className="mb-3" >
//       <Form.Label>Mentor Name</Form.Label>
//       <Form.Control type="text" placeholder="Enter Mentor Name" value={mentorName} onChange={(e)=>setMentor(e.target.value)}/>
//     </Form.Group>
//     <Button variant="primary"  onClick={()=>submitHandler()}>
//       Submit
//     </Button>
//   </Form>
//   )
// }

// export default EditUsers;
