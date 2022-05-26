import React from 'react'
import FileViewer from 'react-file-viewer'
import { Link } from 'react-router-dom'
 

const lectures = [
  {
      id: 1,
      title: 'MEXANIKA 1-Lekciya',
      file: 'ml1-1Qq.pdf',
      type: 'docx'
  },
  {
      id: 2,
      title: 'MEXANIKA 2-Lekciya',
      file: 'ml1-2Qq.pdf',
      type: 'docx'
  },
  {
      id: 3,
      title: 'MEXANIKA 3-Lekciya',
      file: 'ml1-3Qq.pdf',
      type: 'docx'  
  },
  { 
      id: 4,
      title: 'MEXANIKA 4-Lekciya',
      file: 'ml1-4Qq.pdf',
      type: 'docx'
  },
  {
      id: 5,
      title: 'MEXANIKA 5-Lekciya',
      file: 'ml1-5Qq.pdf',
      type: 'docx'
  },
  { 
      id: 6,
      title: 'MEXANIKA 6-Lekciya',
      file: 'ml1-6Qq.pdf',
      type: 'docx'
  },
  {
      id: 7,
      title: 'MOLEKULYAR FIZIKA HA\'M TERMODINAMIKA 7-Lekciya',
      file: 'ml1-7Qq.pdf',
      type: 'docx'
  },
  {
      id: 8,
      title: 'MOLEKULYAR FIZIKA HA\'M TERMODINAMIKA 8-Lekciya',
      file: 'ml1-8Qq.pdf',
      type: 'docx'
  },
  {
      id: 9,
      title: 'ELEKTROSTATIKA 9-Lekciya',
      file: 'ml1-9Qq.pdf',
      type: 'docx'
  },
  {
      id: 10,
      title: 'ELEKTROSTATIKA 10-Lekciya',
      file: 'ml1-10Qq.pdf',
      type: 'docx'
  },
  {
      id: 11,
      title: 'ELEKTROMAGNETIZM 11-Lekciya',
      file: 'ml1-11Qq.pdf', 
      type: 'docx'
  },
  {
      id: 12,
      title: 'ELEKTROMAGNETIZM 12-Lekciya',
      file: 'ml1-12Qq.pdf',
      type: 'docx'
  },
  {
      id: 13,
      title: 'ELEKTROMAGNETIZM 13-Lekciya',
      file: 'ml1-13Qq.pdf',
      type: 'docx'
  },
  {
      id: 14,
      title: 'ELEKTROMAGNETIZM 14-Lekciya',
      file: 'ml1-14Qq.pdf',
      type: 'docx'
  },
  {
      id: 15,
      title: 'ELEKTROMAGNETIZM 15-Lekciya',
      file: 'ml1-15Qq.pdf',
      type: 'docx'
  }
]



const Slides = ({ setTitle }) => {
  return (
    <div>
        <h5 className="heading">
            Leksiyalar/Prezentaciyalar
        </h5>


        <ul className='list'>
            {
                lectures.map(lecture => (
                    <li key={lecture.id} className="list-item" onClick={() => setTitle(lecture.title)}>
                        <Link to={lecture.file}>
                            {lecture.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default Slides