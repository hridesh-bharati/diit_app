function Contact() {
    return(
        <div className="container-fluid mx-0 px-0">
        <div className="row w-100 mx-0 px-0">
            <div className="col-12 mx-0 px-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56717.06933081362!2d83.65242092167965!3d27.318920499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399419806e859715%3A0x542e82fbb42e0941!2sDRISHTEE%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY%20NICHLAUL!5e0!3m2!1sen!2sin!4v1697193938273!5m2!1sen!2sin"
                    width="100%" height="600" style={{border:'0'}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="row m-0 p-0">
            <div className="col-12 py-4  d-flex justify-content-center flex-column align-items-center"
                style={{background: 'url(images/vender/enquiryBg.png)'}} id="ContactHeader">
                <span className=" w-100 d-block  text-center ">
                    <div data-aos="fade-down">
                        <h1 className=" fw-bolder text-warning" style={{textShadow: '5px 5px 5px black'}}>
                            CONTACT-US
                        </h1>
                    </div>
                </span>
                <div data-aos="fade-up">
                    <h5 className="text-primary fw-bolder d-flex my-4 pb-4">
                        <a href="index.html" className="nav-link fw-bolder text-info "><i className="fa fa-home "></i> HOME </a>
                        &nbsp; <span className="text-light">/ CONTACT US</span>
                    </h5>
                </div>
            </div>
        </div>
        <div className="row m-0 p-0 d-flex align-items-start justify-content-center my-5 fw-bolder">
            <div className="card p-0 m-0 my-2 col-md-4 transparentTableData border border-0  ">
                <div className="row m-0 p-0 d-flex justify-content-center">
                    <div className="col-11 rounded rounded-25  m-0 p-0 ZoomCard  myshadow2 " data-aos="zoom-in"
                        style={{background: 'white'}}>
                        <div className="card-header  text-white text-center" style={{background: 'var(--cardHeadColor )'}}>
                            <div data-aos="fade"> <i className="fa fa-home fs-2 "></i>
                                <h1 className="fw-bold "><b>VISIT-AT</b></h1>
                            </div>
                        </div>
                        <div className="card-body fw-normal ">
                            <p> <i className="bi bi-geo-alt-fill text-danger"></i> Paragpur raod Near Ramharsh Inter Collage
                                Nichlaul Maharajganj U.P.</p>
                            <p> <i className="bi bi-geo-alt-fill text-danger"></i> Main market Road in front of Rauniyar
                                chitra mandir Thoothibari Maharajganj U.P.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card p-0 m-0 my-2 col-md-4 transparentTableData border border-0  ">
                <div className="row m-0 p-0 d-flex justify-content-center">
                    <div className="col-11 rounded rounded-25  m-0 p-0 ZoomCard  myshadow2 " data-aos="zoom-in"
                         style={{background: 'white'}}>
                        <div className="card-header text-white text-center" style={{background: 'var(--cardHeadColor )'}}>
                            <div data-aos="fade"> <i className="bi bi-telephone-fill    fs-2"></i>
                                <h1 className="fw-bold"><b>CALL-US</b></h1>
                            </div>
                        </div>
                        <div className="card-body fw-normal ">
                            <p title="Mr. Ajay Tiwari"> <i className="bi bi-telephone text-danger "></i> 9918151032 </p>
                            <br />
                            <p title="Mr Santosh Singh Chauhan"> <i className="bi bi-telephone text-danger "></i> 7398889347
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card p-0 m-0 my-2 col-md-4 transparentTableData border border-0  ">
                <div className="row m-0 p-0 d-flex justify-content-center">
                    <div className="col-11 rounded rounded-25  m-0 p-0 ZoomCard  myshadow2 " data-aos="zoom-in"
                         style={{background: 'white'}}>
                        <div className="card-header text-white text-center" style={{background: 'var(--cardHeadColor )'}}>
                            <div data-aos="fade"> <i className="bi bi-envelope-fill   fs-2"></i>
                                <h1 className="fw-bold"><b>E:Mail-US</b></h1>
                            </div>
                        </div>
                        <div className="card-body fw-normal ">
                            <p title="Mr. Ajay Tiwari"> <i className="bi bi-send text-danger"></i>
                                ajaytiwary4@gmail.com
                            </p>
                            <br />
                            <p title="Mr Santosh Singh Chauhan"> <i className="bi bi-send text-danger"></i>
                                santoshchauhan@drishteeindia.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    }
    export default Contact 