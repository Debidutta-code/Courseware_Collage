import React from 'react'

function Header() {
  return (
    <div className="header">
    <img className="header-image"
      src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Centurion_University_of_Technology_and_Management_Logo.svg/1200px-Centurion_University_of_Technology_and_Management_Logo.svg.png"
      alt=""
      width="50"
      height="70"
    />
    <div className="header-links" >
    <div className="header-dropdown dropdown">
      <span>Academic Schema</span>
      <div className="dropdown_item">
        <a href="/">Programme Structure</a>
        <a href="/">Domain (Electives) Courses</a>
        <a href="/">Skill (Elective) Courses</a>
      </div>
    </div>
    <div className="teacher">
      <span>| <a href="/">Teachers</a> </span>
    </div>
    </div>
   
<hr className="line1" />
    
  </div>
  )
}

export default Header