import { BsScissors } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaPaintbrush } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { IoIosMusicalNotes } from "react-icons/io";
const services =[
    {
        name:'Beauty & Wellness',
        describtion:'Salons, Spas, Life Coaches',
        icon:<BsScissors />
    },
    {
        name:'Health & Fitness',
        describtion:'Yoga, Sports, Therapists',
        icon:<IoIosFitness />
    },
    {
        name:'Classes & Events',
        describtion:'Coaches, Weddings, Event Organisers',
        icon:<FaArrowsDownToPeople />
    },
    {
        name:'Education & Tutoring',
        describtion:'Schools, Colleges, Tutors',
        icon:<IoSchoolSharp />
    },
    {
        name:'Photography',
        describtion:'Photographers, Videographers, Studios',
        icon:<FaCamera />
    },
    {
        name:'Pet Services',
        describtion:'Pet Sitters,vet',
        icon:<MdOutlinePets />
    },
    {
        name:'Meetings & Counselling',
        describtion:'Interviews, Support Services',
        icon:<IoPerson />
    },
    {
        name:'Activities',
        describtion:' Art Activities',
        icon:<FaPaintbrush />
    },
    {
        name:'Doctors & Clinics',
        describtion:'Dentists, Physicians',
        icon:<FaHeartbeat/>
    },
    {
        name:'Home Services',
        describtion:'Maid Services, Carpet Cleaning, Plumbers',
        icon:<IoMdHome />
    },
    {
        name:'Automobile',
        describtion:'Car Detailing, Driving Schools, Transportation',
        icon:<FaCar />
    },
    {
        name:'Spiritual Services',
        describtion:'Readings, Psychics, Astrologers',
        icon:<CiStar />
    },
    {
        name:'Music & Dance',
        describtion:'Studios, Schools, Dance',
        icon:<IoIosMusicalNotes />
    },
]
export default services;