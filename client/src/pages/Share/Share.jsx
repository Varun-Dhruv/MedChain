import React, { useState, useRef, useEffect } from 'react'
import { AiFillSketchSquare, AiOutlineFile, AiOutlineShareAlt } from "react-icons/ai";
import './Share.scss'
import p1 from '/public/assets/images/p1.jpg'

const Share = () => {
  const [userModalActive, setUserModalActive] = useState(false);
  const dropdown_toggle_el = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideRef);
    return () => document.removeEventListener("mousedown", clickOutsideRef);
  }, [])

  const clickOutsideRef = (e) => {
    if (dropdown_toggle_el.current && !dropdown_toggle_el.current.contains(e.target)) {
      setUserModalActive(false);
    }
  };

  const files = [
    {
      name: 'file1',
      type: 'pdf',
      size: '1.2mb',
      hash: '0x1234567890',
      uploaded_at: '12/12/2020',
    },
    {
      name: 'file1',
      type: 'jpg',
      size: '1.2mb',
      hash: '0x1234567890',
      uploaded_at: '12/12/2020',
    },
    {
      name: 'file1',
      type: 'png',
      size: '1.2mb',
      hash: '0x1234567890',
      uploaded_at: '12/12/2020',
    },
    {
      name: 'file1',
      type: 'pdf',
      size: '1.2mb',
      hash: '0x1234567890',
      uploaded_at: '12/12/2020',
    },
    {
      name: 'file1',
      type: 'something',
      size: '1.2mb',
      hash: '0x1234567890',
      uploaded_at: '12/12/2020',
    },
  ]

  const userData = [
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
    {
      img: p1,
      name: 'John Doe',
      hash: '0x123456789044237853232485843',
    },
  ]


  return (
    <div className='Share container padding_top_nav'>
      <div className={'User_popup_wrapper' + ` ${userModalActive ? "active" : ""}`} >
        <div className="user_popup" ref={dropdown_toggle_el}>
          <div className="table_of_content">
            <div className="avatar">Avatar</div>
            <div className="name">Name</div>
            <div className="hash">Hash</div>
            <div className="send">Send</div>
          </div>
          <div className="users_container">
            {
              userData.map((user, index) => (
                <div className="user" key={index}>
                  <div className="avatar">
                    <img src={user.img} alt="" />
                  </div>
                  <div className="name">{user.name}</div>
                  <div className="hash">{user.hash}</div>
                  <div className="send">
                    <div className="btn_primary">Send</div>
                  </div>
                </div>))
            }


          </div>
        </div>
      </div>
      <h1>Your Files</h1>
      <div className="files_wrapper">
        <div className='table_of_content'>
          <div className="icon">Type</div>
          <div className="name">Name</div>
          <div className="size">Size</div>
          <div className="hash">File Hash</div>
          <div className="uploaded_at">Last Modified</div>
          <div className="share">Share</div>
        </div>
        <div className='files_container'>
          {
            files.map((file, index) => {
              return (
                <div className="file" key={index}>
                  <div className="icon">
                    {
                      file.type === 'pdf' ? <div className='icon_wrapper pdf'>
                        PDF
                      </div> : file.type === 'jpg' ? <div className='icon_wrapper jpg'>
                        JPG
                      </div> : file.type === 'png' ? <div className='icon_wrapper png'>
                        PNG
                      </div> : <div className='icon_wrapper none'>
                        <AiOutlineFile />
                      </div>
                    }
                  </div>
                  <div className="name">{file.name}</div>
                  <div className="size">{file.size}</div>
                  <div className="hash">{file.hash}</div>
                  <div className="hash">{file.uploaded_at}</div>
                  <div className="share" onClick={() => {
                    setUserModalActive(true)
                  }}>
                    <AiOutlineShareAlt />
                  </div>
                </div>
              )
            })

          }
        </div>

      </div>
    </div>
  )
}
export default Share;
