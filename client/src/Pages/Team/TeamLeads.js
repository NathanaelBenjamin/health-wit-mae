import React from 'react'
import Person from './Person';
import teams from './teamData';

const TeamLeads = () => {
  return (
    <div className='flex flex-col justify-center items-center py-6 px-12 gap-10'>
        <h1 className='font-bold text-xl'>
            Meet our team leads
        </h1>

        <div className="post-grid justify-between">
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