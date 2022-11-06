import React from 'react'
import { useSelector } from 'react-redux';
import { getFiles } from '../../utils/getFiles';
import { AiFillSketchSquare, AiOutlineFile, AiOutlineShareAlt } from "react-icons/ai";
import { HiDocumentDownload } from 'react-icons/hi';
import './View.scss'
import { useSearchParams } from 'react-router-dom';
import p1 from '/public/assets/images/p1.jpg'

const View = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const doctor = useSelector(state => state.blockchain.doctor);
    const user = useSelector(state => state.blockchain.user);
    const patient = useSelector(state => state.blockchain.patient);
    const account = useSelector(state => state.blockchain.account);
    const handleClick = async () => {
        //console.log("hello")
        const userType = await user.getUserType().call();
        if (userType === "Patient") {
            getFiles(patient, account)
        }
        else if (userType === "Doctor") {
            getFiles(user, account)
        }
    }

    const type = searchParams.get('type');

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
        <div className='View container padding_top_nav'>
            {/* <button onClick={handleClick}>Click me</button> */}
            <div className="secondary_tab">
                <div onClick={() => setSearchParams({ type: 'shared' })} className={"tab_item" + ` ${type === "shared" || type === null ? 'active' : ""}`}>
                    Shared with me
                </div>
                <div onClick={() => setSearchParams({ type: 'myfiles' })} className={"tab_item" + ` ${type === "myfiles" ? 'active' : ""}`}>
                    My Files
                </div>
            </div>
            <div className="files_wrapper">
                {
                    type === "shared" || type === null ? (
                        <>
                            <div className='table_of_content'>
                                <div className="icon">Type</div>
                                <div className="name">Name</div>
                                <div className="size">Size</div>
                                <div className="hash">File Hash</div>
                                <div className="uploaded_at">Last Modified</div>
                                <div className="download">Download</div>
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
                                                <div className="download">
                                                    <HiDocumentDownload />
                                                </div>
                                            </div>
                                        )
                                    })

                                }
                            </div>
                        </>
                    ) : (<>
                        <div className='table_of_content'>
                            <div className="icon">Type</div>
                            <div className="name">Name</div>
                            <div className="size">Size</div>
                            <div className="hash">File Hash</div>
                            <div className="uploaded_at">Last Modified</div>
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

                                        </div>
                                    )
                                })

                            }
                        </div>
                    </>

                    )
                }


            </div>
        </div>
    )
}
export default View;
