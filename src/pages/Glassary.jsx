import React from 'react'
import { Link } from 'react-router-dom'

const cources = [
    {
        id: 1,
        title: 'Glossary',
        file: 'glossary.docx',
        type: 'docx'
    },
]

const Glossary = ({ setTitle }) => {
  return (
      <div>
        <h5 className="heading">
            Glossary
        </h5>


        <ul className='list'>
            {
                cources.map(lecture => (
                    <li key={lecture.id} className="list-item" onClick={() => setTitle(lecture.title)}>
                        <Link to={`/lectures/glassary/${lecture.file}`}>
                            {lecture.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default Glossary