import React, { useState } from 'react';

import html2pdf from 'html2pdf.js';
const PrintComponent = () => {
    const printData = () => {
        const data = document.getElementById('VerificationBody').innerHTML;
        const PrintResult = document.getElementById('PrintResult').innerHTML;
        document.getElementById('VerificationBody').innerHTML = PrintResult;
        window.print();
        document.getElementById('VerificationBody').innerHTML = data;
        html2pdf()
            .from(PrintResult)
            .save();
    };
    const search = () => {
        const DisplayNone = document.getElementById('DisplayNone');
        DisplayNone.classList.remove("HideResult");
    };
    const [VerificationBgColor, setVerificationBgColor] = useState('white')
    const DarkMode = () => {
        if (VerificationBgColor === 'black') {
            setVerificationBgColor('var(--mainBgcolor)')

        }
        else {

            setVerificationBgColor('gray')
        }
    }



    return (
        <div style={{ margin: '4.3rem 0', background: VerificationBgColor }} id="VerificationBody">
            <div className="d-flex align-items-center justify-content-between fixed-top "
                style={{ background: 'var(--topNavBgColor)', width: '100vw !important', fontSize: '0.7rem' }}  >
                <div className="changer-container d-flex align-items-center justify-content-center TopWelcomeNavLeft ">
                    <button className="changer-btn" style={{ background: 'transparent !important' }}>
                        <input type="checkbox" id="switch" className="checkbox d-none w-50" onClick={DarkMode} />
                        <label htmlFor="switch" className="toggle">
                            <p className="m-0 p-0 switchChild">
                                <i className="bi bi-sun-fill " style={{ color: 'orangered' }} title="Light Mode"></i>
                                <i className="bi bi-moon-stars-fill text-white " title="Night Mode"></i>
                            </p>
                        </label>
                    </button>
                </div>
                <div className="TopWelcomeCenter d-flex align-items-center">
                    <marquee scrollamount="8" width="100%">
                        <b className="text-light text-uppercase" >
                            <big style={{ letterSpacing: '1px' }}> Welcome to DRISHTEE COMPUTER CENTER</big>
                        </b>
                    </marquee>
                </div>
                <div className="ms-auto d-flex align-items-center justify-content-end TopWelcomeNavRight ">
                    <a className="nav-link active text-white " id="myH2" aria-current="page" href="tel:+919918151032" title="Call-now">
                        <img className='img-fluid' />919918151032
                        &nbsp;&nbsp;</a>
                    <a className="nav-link text-white " id="myH3" aria-current="page" href="#" title="E:Mail-Us">
                        <img className='img-fluid' />
                        ajtiwari4@gmail.com
                        &nbsp;&nbsp;</a>
                </div>
            </div>
            <div className="row mx-0 px-0 ">

                <div className="col-md-5  col-sm-12 my-4 ">
                    <div style={{ background: 'white' }}>
                        <form className="row g-4 m-0  m-auto text-center myshadow border border-light  " id="verifyParentBg"
                        >
                            <div className="col-12 m-0 p-0 " style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }}>

                                <div className="container text-center m-0 h4 fw-bold text-uppercase " style={{ color: 'rgb(255, 255, 255)' }}>
                                    <b style={{ letterSpacing: '1px', color: 'white' }}>
                                        Verify Your <font color="red">Certificate</font>
                                    </b>
                                </div>
                            </div>
                            <div className="col-md-12 position-relative ">
                                <label className="form-label text-primary d-block fs-4 fw-bolder  text-uppercase"> Registration
                                    No. </label>
                                <div className="input-group  rounded rounded-0  ">
                                    <span className="input-group-text bg-primary-subtle rounded rounded-0 img-fluid">
                                        <img src="images/icon/user.png" width="30" alt="" /></span>
                                    <input type="number" className="form-control  rounded rounded-0  "
                                        placeholder="Enter Registration No. " />
                                </div>
                            </div>
                            <div className="col-md-12 pb-2 text-center">
                                <button type="button" className="btn btn-primary text-white 
                                yellow-btn border border-white fw-bold" onClick={search}> <i
                                        className="fa fa-search"></i> Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-7 py-3 myshadow position-relative bg-white
                 border border-secondary-subtle  " id='DisplayNone'
                >
                    <div id="PrintResult">
                        <table className="table table-sm table-responsive border border-secondary-subtle my-2">
                            <tr className="text-center  ">
                                <td>
                                    <div className="row">
                                        <div className="col-12 " style={{ width: '150px' }}>
                                            <img src="images/team/team-4.jpg" className="img-thumbnail img-fluid " />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>This is certify to that <b id="stdName">Hridesh Bharati</b> has successfull completed
                                        the
                                        <b id="StrdCourse"> ADCA </b>Course from our Institute.
                                        <br />
                                        The institute is wishing best of luck for them future.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>Reg. No</th>
                                <td>921</td>
                            </tr>
                            <tr>
                                <th>Student's Name. </th>
                                <td>Hridesh Bharati</td>
                            </tr>
                            <tr>
                                <th>Father's Name</th>
                                <td>Dijvijay Bharati</td>
                            </tr>
                            <tr>
                                <th>Course Name.</th>
                                <td>ADCA ( Advance Diploma In Computer Application )</td>
                            </tr>
                            <tr>
                                <th>Duration(months). </th>
                                <td>15 Months</td>
                            </tr>
                            <tr>
                                <th>Date Of Registration </th>
                                <td>15 DECEMBER 2020</td>
                            </tr>
                            <tr>
                                <th>Date Of Issue </th>
                                <td>05 FEB 2022</td>
                            </tr>
                            <tr>
                                <th>Percentage. </th>
                                <td>96%</td>
                            </tr>
                            <tr>
                                <th>Grade.</th>
                                <td>A</td>
                            </tr>
                            <tr>
                                <th>Issuing Branch.</th>
                                <td>DRISHTEE COMPUTER CENTER NICHLAUL</td>
                            </tr>
                        </table>
                    </div>
                    <button className=" btn btn-sm btn-primary yellow-btn" onClick={printData}>
                        <i className="fa fa-download"></i>  Download
                    </button>
                </div>
            </div>
        </div>
    );
};
export default PrintComponent;
