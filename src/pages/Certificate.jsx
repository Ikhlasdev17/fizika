import React from 'react'
import FileViewer from 'react-file-viewer'
import file from '../asstes/ruxsatnama.pdf'

const Certificate = () => {
  return (
    <div>
        <div>
            <h1 className='heading'>Ruxsatnama</h1>
            <button className='btn btn-primary text-white'>
                <a className='text-white' href={file} download={file}>
                Júklep alıw 
                </a>
            </button>
        </div>

        <br />
        <FileViewer 
            fileType='pdf'
            filePath={file}
        />
    </div>
  )
}

export default Certificate