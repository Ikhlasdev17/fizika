import React from 'react'
import { Link } from 'react-router-dom'

const cources = [
    {
        id: 1,
        title: 'Óz betinshe tálim shınıģıwları',
        file: 'self-study.docx',
        type: 'docx'
    },
]

const SelfStudy = ({ setTitle }) => {
  return (
      <div>
        <h5 className="heading">
        Óz betinshe tálim shınıǵıwları
        </h5>


        <ul className='list'>
            {
                cources.map(lecture => (
                    <li key={lecture.id} className="list-item" onClick={() => setTitle(lecture.title)}>
                        <Link to={`/self-study/${lecture.file}`}>
                            {lecture.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default SelfStudy