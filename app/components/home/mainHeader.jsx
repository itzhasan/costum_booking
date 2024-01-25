import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const MainHeader = () => {
  const router = useRouter()
 
  let token = localStorage.getItem('token')
  
  const [username, setUsername] = useState('');
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.name)
      console.log(decodedToken);
    }
  }, [token]);


  return (
    <div className="flex justify-between px-[160px] bg-orange-300 h-[75px] items-center myBox">
      <h1 className="font-bold text-3xl">Booky</h1>
      <ul className="flex gap-6 items-center ">
        <li className="hover:underline hover:text-teal-500">Home</li>
        <li className="hover:underline hover:text-teal-500">About us</li>
        <li className="hover:underline hover:text-teal-500">Cotact us</li>
        {token ? <div>
          <h1>{username}</h1>
          <button onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();

          }}>log out</button>
        </div> : <li className="bg-red-500 myBox  border-2 rounded-[30px]  border-gray-950 text-white text-lg font-medium px-[20px]">
          <a onClick={() => (router.push('/auth/login'))}>Login</a>
        </li>}
      </ul>
    </div>
  );
};
