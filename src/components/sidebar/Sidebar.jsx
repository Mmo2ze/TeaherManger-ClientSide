import { useState } from 'react';
import { Link } from "react-router-dom"
import "./sidebar.css"
import DataUsageIcon from '@mui/icons-material/DataUsage';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Sidebar = () => {
 
  const [showStudentManager, setShowStudentManager] = useState(false);
  const [people, setPeople] = useState(false);

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/"> 
            <div>  
              <DataUsageIcon/> <span>Overview</span>
            </div>
          </Link>
        </li>
        <li>
         
          <Link onClick={() => setShowStudentManager(!showStudentManager)}> 
            <div>
              <PersonIcon/> <span>Student Manager</span> {showStudentManager ?  <ArrowUpwardIcon/> : <ArrowDownwardIcon/> }
            </div>
          </Link>
   
         {showStudentManager && (
            <div className='student_info'>
              <p>Absence registration</p>
              <p>Record Degrees</p>
              <p>Add Student</p>
            </div>
          )}
        </li>
        <li>
          <Link  onClick={() => setPeople(!people)}>
            <div>
              <PeopleAltIcon/> <span>People Alt </span>  {people ?  <ArrowUpwardIcon/> : <ArrowDownwardIcon/> }
            </div>
          </Link>
          {people && (
            <div className='student_info'>
              <p>Grades</p>
              <p>Sessions</p>
            </div>
          )}
        </li>
        
        <li>
          <Link to="/settings">
            <div>
              <SettingsIcon/> <span>Settings</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;