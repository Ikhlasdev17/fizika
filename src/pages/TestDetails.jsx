import React from 'react'

import FileViewer from 'react-file-viewer'

import { useLocation } from 'react-router-dom'


const TestDetails = ({ title }) => {
    const location = useLocation()

    const arr = location.pathname.split('/')
    const arr2 = arr[arr.length - 1].split('.')
    const file = arr2[arr2.length - 1]

    console.log(arr2)
    console.log(file)
    
 
  return (
    <div>
        <div>
            <h1 className='heading'>{title}</h1>
            <button className='btn btn-primary text-white'>
                <a className='text-white' href={require(`../asstes/${arr2[0]}.${'docx'}`)} download={require(`../asstes/${arr2[0]}.${'docx'}`)}>
                Júklep alıw 
                </a>
            </button>
        </div>

        <br />

        <div className='viewer-container'>
            <FileViewer
                fileType={'pdf'}
                filePath={require(`../asstes/${arr2[0]}.${'pdf'}`)}
                />
        </div>
    </div>
  )
}

export default TestDetails