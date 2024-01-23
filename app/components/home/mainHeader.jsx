import { useRouter } from "next/navigation";

export const MainHeader = () => {
  const router = useRouter()

  return (
    <div className="flex justify-between px-[160px] bg-orange-300 h-[75px] items-center myBox">
      <h1 className="font-bold text-3xl">Booky</h1>
      <ul className="flex gap-6 items-center hover:underline hover:text-teal-500">
        <li>Home</li>
        <li>About us</li>
        <li>Cotact us</li>
        <li className="bg-red-500 myBox  border-2 rounded-[30px]  border-gray-950 text-white text-lg font-medium px-[20px]">
           <a onClick={()=>(router.push('/auth/login'))}>Login</a>
        </li>
      </ul>
    </div>
  );
};
