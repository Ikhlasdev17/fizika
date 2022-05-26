import React from 'react'
import { FileViewer } from 'react-file-viewer'
import { Link } from 'react-router-dom'

 
const lectures = [
  {
      id: 1,
      title: '1-lekciya. Fizika páni. Kirisiw.',
      file: '1-lekciya.docx',
      type: 'docx'
  },
  {
      id: 2,
      title: '2-lekciya. Materiallıq noqattıń аylаnbаlı háreketi',
      file: '2_0-lekciya.docx',
      type: 'docx'
  },
  {
      id: 3,
      title: '3-lekciya. Materiallıq noqat dinemikası',
      file: '3-lekciya.docx',
      type: 'docx'
  },
  {
      id: 4,
      title: '4-lekciya. Qattı dene aylanba háreketi.',
      file: '4-lekciya.docx',
      type: 'docx'
  },
  {
    
    id: 5,
    title: '5-lekciya. Mехаnikаlıq enеrgiyanıń sаqlаnıw nızamı',
    file: '5-lekciya.docx',
    type: 'docx'
  },
  {
      id: 6,
      title: '6-lekciya. Inarcial sanaq sistemaları',
      file: '6-lekciya.docx',
      type: 'docx'
  },
  {
      id: 7,
      title: '9 - lekciya. Elektrlik óz-ara tásir',
      file: '9-lekciya.docx',
      type: 'docx'
  },
  {
      id: 8,
      title: '10 - lekciya. Elektr maydanında zaryadtı kóshiriwde  atqarılǵan jumıs',
      file: '10-lekciya.docx',
      type: 'docx'
  },
  {
      id: 9,
      title: '11-lekciya. Elеktr maydanındа dielеktrikler hám ótkizgi shler',
      file: '11-lekciya.docx',
      type: 'docx'
  },
  {
      id: 10,
      title: '12-lekciya. Elеktr tоkı',
      file: '12-lekciya.docx',
      type: 'docx'
  },
  {
      id: 11,
      title: '13-lekciya. Mаgnit maydanı hám magnitlik qásiyetleri.',
      file: '13-lekciya.docx',
      type: 'docx'
  },
  {
      id: 12,
      title: '14-lekciya. Biо-Savar-Lаplаs nızamı.',
      file: '14-lekciya.docx',
      type: 'docx'
  },
  {
      id: 13,
      title: '15-lekciya. Elеktrоmаgnit indukciya qubılısı.',
      file: '15-lekciya.docx',
      type: 'docx'
  }
] 


const Documents = ({ setTitle }) => {
  return (
    <div>
      <h5 className="heading">
            Lekciyalar
        </h5>
        <ul className='list'>
            {
                lectures.map(lecture => (
                    <li key={lecture.id} className="list-item" onClick={() => setTitle(lecture.title)}>
                        <Link to={`/lectures/docs/${lecture.file}`}>
                            {lecture.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default Documents