import { FaBuilding, FaPhoneAlt, FaUser } from "react-icons/fa";
const Contact = (props: {
  data: { name: string; phone: string; address: string };
}) => {
  return (
    <>
      <div className="contact">
        <FaUser size={10} style={{ marginRight: "5px" }} />
        {props.data.name}
        <br />
        <FaPhoneAlt size={10} style={{ marginRight: "5px" }} />
        {props.data.phone}
        <br />
        <FaBuilding size={10} style={{ marginRight: "5px" }} />
        {props.data.address}
        <br />
      </div>
    </>
  );
};

export default Contact;
