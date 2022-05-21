import React from 'react'
import FileViewer from 'react-file-viewer'
import { Link } from 'react-router-dom'
 

const practices = [
    {
        id: 1,
        title: '1-ámeliy shınıǵıw.',
        file: '1-ameliy.docx',
        type: 'docx'
    },
    {
        id: 2,
        title: '2-ámeliy shınıǵıw.',
        file: '2-ameliy.docx',
        type: 'docx'
    },
    {
        id: 3,
        title: '3-ámeliy shınıǵıw.',
        file: '3-ameliy.docx',
        type: 'docx'
    },
    { 
        id: 4,
        title: '4-ámeliy shınıǵıw.',
        file: '4-ameliy.docx',
        type: 'docx'
    }, 
    { 
        id: 7,
        title: '7-ámeliy shınıǵıw.',
        file: '7-ameliy.docx',
        type: 'docx'
    },
    {
        id: 8,
        title: '8-ámeliy shınıǵıw.',
        file: '8-ameliy.docx',
        type: 'docx'
    }, 
    {
        id: 10,
        title: '10-ámeliy shınıǵıw.',
        file: '10-ameliy.docx',
        type: 'docx'
    },
    {
        id: 11,
        title: '11-ámeliy shınıǵıw.',
        file: '11-ameliy.docx',
        type: 'docx'
    },
    {
        id: 12,
        title: '12-ámeliy shınıǵıw.',
        file: '12-ameliy.docx',
        type: 'docx'
    },
    {
        id: 13,
        title: '13-ámeliy shınıǵıw.',
        file: '13-ameliy.docx',
        type: 'docx'
    }        
]

const Practices = ({ setTitle }) => {
  return (
    <div>
        <h5 className="heading">
            Ameliyatlar
        </h5>


        <ul className='list'>
            {
                practices.map(practice => (
                    <li key={practice.id} className="list-item" onClick={() => setTitle(practice.title)}>
                        <Link to={`/practices/docs/${practice.file}`}>
                            {practice.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default Practices