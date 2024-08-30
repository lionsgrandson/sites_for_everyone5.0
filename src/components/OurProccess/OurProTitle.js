import { HiOutlineDotsHorizontal } from "react-icons/hi";

import "./OurProccess.css";
export default function OurProTitle() {
  return (
    <>
      <div className="title-our">
        <h3 className="titlel-h3-our">From start to finish</h3>
        <h1 className="titlel-h1-our"> Our Process</h1>
        <p className="titlel-p-our">
          We specialize in delivering the complete package. see what our process
          consists of and what it’s like to work with us
        </p>
        {/* <HiOutlineDotsHorizontal
          color="rgba(92, 72, 173, 1)"
          size="212px"
        /> */}
        <p className="p-dots"> . . .</p>
      </div>
    </>
  );
}
