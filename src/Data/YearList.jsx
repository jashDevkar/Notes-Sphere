import Home from "../Components/Home"
import Download from "../Components/Download"
import Profile from "../Components/Profile"

const YearList=[
    {id:1,title:'First year of engineering (FE)',year:'FE'},
    {id:2,title:'Second year of engineering (SE)',year:'SE'},
    {id:3,title:'Third year of engineering (TE)',year:''},
    {id:4,title:'Fourth year of engineering (BE)',year:''},
]



const NoteList=[
    {id:1,title:'Notes',data:'Notes'},
    {id:2,title:'Derivation',},
    {id:3,title:'Formulas',},
    {id:4,title:'Equations',},
]

const TabBarScreens=[
    {name:'Home',comp:Home,icon:require('../../Assets/Images/home.png'),label:'home'},
    // {name:'Downloads',comp:Download,icon:require('../../Assets/Images/downloads.png')},
    {name:'Profile',comp:Profile,icon:require('../../Assets/Images/user.png')}
]
export {YearList,NoteList,TabBarScreens} 