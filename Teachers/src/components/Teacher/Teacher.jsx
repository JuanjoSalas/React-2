import { useState } from 'react'
import "./Teacher.css"

const Teacher = () => {
    const [teacher, setTeacher] = useState("Sofía")
    
return (
    <div className='teacher'>
        <ul>
            <li onClick={()=>setTeacher("Data")}>Data</li>
            <li onClick={()=>setTeacher("Reyes")}>Reyes</li>
            <li onClick={()=>setTeacher("Yolanda")}>Yolanda</li>
        </ul>
        <h2>Teacher Name {teacher}</h2>
    </div>
    )
}

export default Teacher;