import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <footer className="relative  text-white">
            <div className="absolute  bg-black  w-[100%] overflow-hidden">
                <svg data-name="Layer 1"
                 xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 120" 
               
                preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[600px] fill-white"></path>
                </svg>



                
                <div className="grid lg:grid-cols-2 gap-10 sm:grid-cols-1 p-20">
                    {/* <div className="flex flex-col gap-5">
                    <li className="text-[22px] list-none font-semibold text-orange-400 py-2 uppercase">
                            CONTACT
                        </li>
                          <li> Baghdad , Iraq </li>
                           <li>+964 999 666 444 0 </li>
                          <li>  www.bookingwebsite.com </li>
                    </div> */}


                    <div className="mb-4 md:mb-0">
                        <li className="text-[22px] list-none font-semibold text-orange-400 py-2 uppercase">CONTACT US</li>
                       


                          <li className="my-4 list-none">
                         <div className="flex space-x-2 ">
                            <a
                                className="text-white hover:text-orange-400 transform hover:scale-150 
                            transition-all duration-150 ease-in-out p-3 h-10  " href="">
                                <FaGithub />
                            </a>
                            <a
                                className="text-white hover:text-orange-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out p-3 h-10" href="">
                                <FaLinkedinIn />
                            </a>
                            <a
                                className="text-white hover:text-orange-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out p-3 h-10" href="">
                                <FaTwitter />
                            </a>
                            <a
                                className="text-white hover:text-orange-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out p-3 h-10" href="">
                                <FaInstagram />
                            </a>
                        </div>
                        </li>


                        
                    </div>

                    

                    <div>
                        <li className="text-[22px] list-none font-semibold text-orange-400 py-2 uppercase">
                            USEFUL LINK
                        </li>
                        <li className="my-4 list-none"><a href="">Blog</a></li>
                        <li className="my-4 list-none"><a href="">Tickets</a></li>
                        <li className="my-4 list-none"><a href="">Customer Service</a></li>
                    </div>


                    {/* <div>
                        <li className="text-[22px] list-none font-semibold text-orange-400 py-2 uppercase">
                            RECENT POSTS</li>
                            <li className="my-4 list-none"><a href="">Post #1</a></li>
                        <li className="my-4 list-none"><a href="">Post #2</a></li>
                        <li className="my-4 list-none"><a href="">Post #3</a></li>
                  
                    </div>
 */}

                    {/* <div className="mb-4 md:mb-0">
                        <li className="text-[22px] list-none font-semibold text-orange-400 py-2 uppercase">NEWSLETTER</li>
                       

                        <li className="my-4 list-none"> <form className="w-50 relative">
                            <input type="email" placeholder=""
                                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none 
                            focus:border border-orange-400" />
                            <button
                                type="Submit"
                                className="bg-orange-400 px-8 py-2 rounded-full text-white
                                 absolute top-0 right-0"
                                >
                                Submit
                            </button>

                            
                        </form>
                        </li>

                          <li className="my-4 list-none">
                         <div className="flex space-x-9 ">
                            <a
                                className="text-white hover:text-orange-400 transform hover:scale-150 
                            transition-all duration-150 ease-in-out p-3 h-10  " href="">
                                <FaGithub />
                            </a>
                            <a
                                className="text-white hover:text-orange-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out p-3 h-10" href="">
                                <FaLinkedinIn />
                            </a>
                            <a
                                className="text-white hover:text-orange-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out p-3 h-10" href="">
                                <FaTwitter />
                            </a>
                            <a
                                className="text-white hover:text-orange-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out p-3 h-10" href="">
                                <FaInstagram />
                            </a>
                        </div>
                        </li>


                        
                    </div> */}
                </div>

              
                  
               
            </div>
        </footer>
    );
};

