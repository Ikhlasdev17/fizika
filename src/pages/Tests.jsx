import React from 'react'
import { Link } from 'react-router-dom'

const testler = []

for (let i = 0; i < 15; i++) {
    if ((i + 1) === 2) continue
    testler.push({
        id: i,
        title: `Test ${i + 1}`,
        file: `Test${i + 1}.pdf`,
        download: `Test${i + 1}.docx`,
        type: 'docx'
    })  
}


const Tests = ({ setTitle }) => {
  return (
      <div>
        <h5 className="heading">
            Test sorawları
        </h5>


        <ul className='list'>
            {
                testler.map(tests => (
                    <li key={tests.id} className="list-item" onClick={() => setTitle(tests.title)}>
                        <Link to={`/tests/${tests.file}`}>
                            {tests.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default Tests