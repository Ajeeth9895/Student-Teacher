import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//Navbar details
function Navbar() {
    let navigate = useNavigate();
  return <div className="container-fluid">
    <Nav defaultActiveKey="/home" as="ul" className="container-fluid">
      <Nav.Item >
        <Nav.Link onClick={()=>navigate("/add-users")}>AddUsers</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link onClick={()=>navigate("/all-users")}>AllUsers</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
}

export default Navbar;
