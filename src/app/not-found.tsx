import Image from "next/image";
import { TbError404 } from "react-icons/tb";

const NotFoundPage = () => {
  return (
    <div className='text-4xl w-full h-screen flex items-center justify-center'>
      <div className="flex flex-col items-center justify-center">
        <TbError404 className="text-9xl" />
        <h2>Page Not Found</h2>
      </div>
    </div>
  );
};

export default NotFoundPage;