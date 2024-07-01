import { FaRegCopyright } from "react-icons/fa";

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="max-section py-20">
      <h5 className="text-center flex items-center gap-2">
        <FaRegCopyright />
        {currentYear}
        <span className="text-primary">A.Hasnat</span>. All Rights Reserved.
      </h5>
    </section>
  );
}

export default Copyright;