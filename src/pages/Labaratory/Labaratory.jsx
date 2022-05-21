import React from 'react'
import FileViewer from 'react-file-viewer'
import { Link } from 'react-router-dom'
 

const labaratories = [
    {
        id: 1,
        title: '7-Laboratoriyalıq jumıs. SUYÍQLÍQLARDÍŃ ISHKI SÚYKELIW KOEFFICIENTIN STOKS USÍLÍ MENEN ANÍQLAW',
        file: '7-labara.docx',
        type: 'docx'
    },
    {
        id: 2,
        title: '8 -laboratoriyalıq jumıs. GAZLAR JÍLLÍLÍQ SÍYÍMLÍLÍQLARÍNÍŃ QATNASÍN KLEMAN-DEZORM USÍLÍ MENEN ANÍQLAW',
        file: '8-labara.docx',
        type: 'docx'
    },
    {
        id: 3,
        title: '9-Laboratoriyalıq jumıs.HAWA USHÍN MOLYAR JÍLLÍLÍQ SÍYÍMLÍLÍQLARÍ QATNASÍ CP/CV NÍ ANÍQLAW',
        file: '9-labara.docx',
        type: 'docx'
    },
    {
        id: 4,
        title: '10-Laboratoriyalıq jumıs.QATTÍ DENELERDIŃ JÍLLÍLÍQ ÓTKIZGISHLIK KOEFFICIENTIN KALORIMETRLIK USÍL MENEN ANÍQLAW',
        file: '10-labara.docx',
        type: 'docx'
    },
]



const Labaratory = ({ setTitle }) => {
  return (
    <div>
        <h5 className="heading">
            Labaratoriyalar
        </h5>


        <ul className='list'>
            {
                labaratories.map(lecture => (
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

export default Labaratory