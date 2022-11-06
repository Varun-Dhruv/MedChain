import React from 'react'
import { AiFillSketchSquare, AiOutlineFile, AiOutlineShareAlt } from "react-icons/ai";
import './Share.scss'

const Share = () => {
  const files = [
    {
      name: 'file1',
      type: 'pdf',
      size: '1.2mb',
      hash: '0x1234567890'
    },
    {
      name: 'file1',
      type: 'pdf',
      size: '1.2mb',
      hash: '0x1234567890'
    },
    {
      name: 'file1',
      type: 'pdf',
      size: '1.2mb',
      hash: '0x1234567890'
    },
    {
      name: 'file1',
      type: 'pdf',
      size: '1.2mb',
      hash: '0x1234567890'
    },
  ]

  return (
    <div className='Share container padding_top_nav'>
      <div className="files_wrapper">
        <div className='table_of_content'>
          <div className="icon"></div>
          <div className="name">Name</div>
          <div className="size">Size</div>
          <div className="hash">File Hash</div>
          <div className="share">Share</div>
        </div>
        {
          files.map((file, index) => {
            return (
              <div className="file" key={index}>
                <div className="file_icon">
                  <AiOutlineFile />
                </div>
                <div className="file_name">{file.name}</div>
                <div className="file_size">{file.size}</div>
                <div className="file_hash">{file.hash}</div>
                <div className="file_share">
                  <AiOutlineShareAlt />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Share;
