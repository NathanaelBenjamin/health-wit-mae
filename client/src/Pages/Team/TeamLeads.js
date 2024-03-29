import React from 'react'
import Person from './Person';
import teams from './teamData';

const TeamLeads = ({heading = `not-hidden`}) => {
  return (
    <div className='flex flex-col justify-center items-center py-6 px-12 gap-10'>
        <a href="#leads" className={`header-link font-bold text-xl ${heading}`}>
            Meet our team leads
        </a>

        <div id="leads" className="post-grid justify-between">
            {
                teams.map(teamLead => {
                    return <Person 
                        name = {teamLead.name}
                        key={teamLead.id}
                        role={teamLead.role}
                        picture={teamLead.picture}
                    />
                })
            }
        </div>
    </div>
  )
}

export default TeamLeads;