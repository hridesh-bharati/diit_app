function Branch() {
    return (
       <>
        <div className=" mx-sm-0 px-sm-0 px-0">
            <div className="myshadow " style={{ background: 'white', margin:'4.1rem 0' }} id="BranchHeadSection">
                <div className="row   p-0  m-0" style={{ background: 'var(--dark-blue)' }}>
                    <div className="col-md-6 p-0 ">
                        <div id="carouselExampleAutoplaying" className="carousel  slide carousel-fade p-0 m-0 aboutMainImg"
                            data-bs-ride="carousel">
                            <div className="carousel-inner MainCarousel p-0 m-0">
                                <div className="carousel-item  active p-0 m-0 " data-bs-interval="1000">
                                    <img src="images/vender/diitOffice.jpg" className="d-block img-fluid w-100" />
                                </div>
                                <div className="carousel-item " data-bs-interval="3000">
                                    <img src="images/vender/diitOffice2.jpg" className="d-block img-fluid w-100" />
                                </div>
                                <div className="carousel-item " data-bs-interval="3000">
                                    <img src="images/vender/diit2Lab.jpg" className="d-block img-fluid w-100" />
                                </div>
                                <div className="carousel-item " data-bs-interval="3000">
                                    <img src="images/vender/diitOffice2.jpg" className="d-block img-fluid w-100" />
                                </div>
                                <div className="carousel-item " data-bs-interval="3000">
                                    <img src="images/vender/diit2Lab.jpg" className="d-block img-fluid w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " style={{ background: 'var(--cardHeadColorDark)' }}>
                        <div className="row ">
                            <div className="col-md-12 text-warning fw-bolder  py-4" data-aos="fade-up" data-aos-duration="1000">
                                <h3 className="fw-bolder">WELCOME TO DRISHTEE COMPUTER CENTER </h3>
                                <h6 className="p-2"> <span>Branch:-</span>
                                    Main Market road in front of Rauniyar chitra mandir, Thoothibari
                                    Maharajganj
                                </h6>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12" style={{ color: 'white' }} id="YellowBranchText" data-aos="fade-down"
                                data-aos-duration="2000">
                                <h3 className="pt-2 px-md-4">We Provide High Quality Education For Everyone</h3>
                                <p className="px-md-4">
                                    Drishtee Institute of Technology is started as one in the best of Technical
                                    computer institute in the year 2018.
                                    Drishtee Institute of Technology is
                                    established under the best computer center Education Trust in thoothibari .
                                    <br />
                                    "Drishti Institute of Technology is known for quality and excellence in education as
                                    well as extra-curricular activities. It is committed to providing abundant learning
                                    opportunities to students,
                                    <br /> <br />
                                    <button className="button btn btn-primary  yellow-btn fw-bolder " data-aos="fade-down">
                                        <a href="contact.html" className="nav-link"> Contact <i
                                            className="bi bi-arrow-right-short"></i> </a> </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container text-center fs-4 fw-bold">
                        <div className="row">
                            <div className="col-12 my-3" id="BranchTypingText">
                                <small>Drishtee Institute of Technology is <span className="text-warning" id="typingAmt">
                                </span>
                                </small>
                                <script>
                                    var typed = new Typed('#typingAmt', {
                                        strings: ['Growing', 'Faster.', 'Bigger'],
                                    typeSpeed: 50,
                                    loop: true,
                    });
                                </script>
                            </div>
                        </div>
                    </div> */}
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-4  my-1">
                        <div className="card myshadow" style={{ border: 'none' }} id="FeatureCard">
                            <div className="card-header h4 text-white " style={{ background: 'var(--d-blue)' }}>
                                <div data-aos="fade-right"><i className="fa fa-line-chart text-warning"></i> Feature</div>
                            </div>
                            <div className="card-body FeatureCard1">
                                <marquee direction="up" scrollamount="3" behavior="scroll" onmouseover="this.stop();"
                                    onmouseout="this.start();"> <small>[1]. Course certified by Microsoft. </small>
                                    <hr width="90%" /> <small>[2]. Training on live project </small>
                                    <hr width="90%" /> <small>[3]. Highly class Technology. </small>
                                    <hr width="90%" /> <small>[4]. Highly Equipped lab. </small>
                                    <hr width="90%" /> <small>[5]. Classes by will experienced & qualified trainers </small>
                                    <hr width="90%" /> <small>[6]. Affordable fees. </small>
                                    <hr width="90%" /> <small>[7]. Conducted by will experienced professional </small>
                                    <hr width="90%" /> <small>[8]. CCC free on ADCA course</small> <img
                                        src="images/icon/gifPic.gif" width="40px" />
                                </marquee>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="card  myshadow" style={{ border: 'none' }} id="NotificationsCard">
                            <div className="card-header h4 text-white " style={{ background: 'var(--d-blue)' }}>
                                <div data-aos="fade-right"> <i className="bi bi-bell-fill text-warning "></i> Notifications
                                </div>
                            </div>
                            <div className="card-body FeatureCard2">
                                <marquee direction="up" scrollamount="3" behavior="scroll" onmouseover="this.stop();"
                                    onmouseout="this.start();"> <small>[1]. CCC free on ADCA course</small> <img
                                        src="images/icon/gifPic.gif" width="40px" />
                                    <hr width="90%" /> <small>[2]. "O" Level <del className="text-warning">20,000rs.</del> <b
                                        className="fw-bold "> 14,999.</b> Only </small> <img src="pic/icon/gifPic.gif"
                                            width="40px" />
                                    <hr width="90%" /> <small>[3]. Monthly test facility </small>
                                    <hr width="90%" /> <small>[4]. GOVT. recognized institute </small>
                                    <hr width="90%" /> <small>[5]. online examination facility </small>
                                </marquee>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="card  myshadow " style={{ border: 'none' }} id="rightFeatureFirst">
                            <div className="card-body p-0 m-0">
                                <div className="card-header fs-4" style={{ background: 'var(--d-blue)' }}>
                                    <div className="fw-bold text-white" data-aos="fade-right"> <i
                                        className="bi bi-card-list  fst-normal text-uppercase text-warning"> </i> Basic
                                        Information :</div>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush text-start  basicStuctureShadow"
                                id="basicStuctureShadow">
                                <li className="list-group-item transparentTableData " id="infoOne" data-aos="fade-right">
                                    <img src="pic/icon/homeTwo.png" width="20px" />
                                    Address :
                                    <strong> Thoothibari Main Nepal border Road</strong>
                                </li>
                                <li className="list-group-item transparentTableData" id="infoTwo" data-aos="fade-right">
                                    <i className="bi bi-map-fill text-success"></i>
                                    City :
                                    <strong> Thoothibari</strong>
                                </li>
                                <li className="list-group-item transparentTableData" id="infoThree" data-aos="fade-right">
                                    <i className="bi bi-globe-central-south-asia text-success"> </i>
                                    District :
                                    <strong> Maharajganj</strong>
                                </li>
                                <li className="list-group-item transparentTableData" id="infoFour" data-aos="fade-right">
                                    <i className="bi bi-pin-map-fill text-danger"></i>
                                    State :
                                    <strong> Uttar
                                        Pradesh</strong>
                                </li>
                                <li className="list-group-item transparentTableData" id="infoFive" data-aos="fade-right">
                                    <i className="fa fa-book text-primary "></i>
                                    Library :
                                    <strong>
                                        Yes</strong>
                                </li>
                                <li className="list-group-item transparentTableData" id="infoSix" data-aos="fade-right">
                                    <i className="bi bi-wifi fw-bold text-success"></i>
                                    WI-FI :
                                    <strong>
                                        Yes</strong>
                                </li>
                                <li className="list-group-item transparentTableData" id="infoSeven" data-aos="fade-right">
                                    <i className="bi bi-bank2 fw-bold text-success"></i>
                                    Establishment(in year) :
                                    <strong>
                                        16  +</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  <div className="card-group my-4 text-center rounded-0 ">
  <div className="card myshadow  rounded rounded-0 mx-2" id="BookCard" data-aos="fade-up" data-aos-duration="200">
      <div className="card-body ">
          <h1 className="  w-75 m-auto mt-1 py-5 fw-bolder  text-white counter"
              style={{background: 'var(--computerBgCard)'}}> <b>200</b></h1>
          <h5 className="card-title">Books in Library</h5>
      </div>
  </div>
  <div className="card myshadow rounded rounded-0 mx-2" id="ComputerCard" data-aos="fade-up" data-aos-duration="500">
      <div className="card-body  ">
          <h1 className=" w-75 m-auto mt-1 py-5 fw-bolder  text-white counter"
               style={{background: 'var(--BooksBgCard)'}}> <b>20</b></h1>
          <h5 className="card-title">Computers</h5>
      </div>
  </div>
  <div className="card myshadow rounded rounded-0 mx-2" id="Establishment" data-aos="fade-up" data-aos-duration="700">
      <div className="card-body  ">
          <h1 className="w-75 m-auto mt-1 py-5 fw-bolder text-white counter"
               style={{background: 'var(--EstablishmentBgCard)'}}> <b>16</b></h1>
          <h5 className="card-title">Establishment(in year): 16+</h5>
      </div>
  </div>
</div>
<div className="container-fluid mt-4" id="shortContact">
  <div className="row text-white"  style={{background: 'var(--dark-blue2)'}}>
      <div className="col-12 py-4">
          <div className="row my-4 d-flex align-items-center ">
              <div className="col-md-6 text-uppercase" data-aos="fade-right">
                  For More Informations to contact us &nbsp; <img src="images/icon/arrow.png" width="50px" />
              </div>
              <div className="col-md-6">
                  <div className="row d-flex  justify-content-center">
                      <div className="col-6 bg-warning yellow-btn border border-light fw-medium px-1 py-4 mx-1 my-3 d-flex justify-content-center"
                          title="Santosh Singh Chauhan" data-aos="fade-right" data-aos-duration="1000">
                          <a href="mailto:santoshchauhan@gmail.com " className="nav-link  ">
                              santoshchauhan@gmail.com</a>
                      </div>
                      <div className="col-5 bg-warning yellow-btn border border-light fw-medium px-1 py-4 mx-1 my-3 d-flex justify-content-center"
                          title="Santosh Singh Chauhan" data-aos="fade-right"> <img src="pic/icon/call1.gif"
                              width="20px" />
                          <a href="tel:+917398889347" className="nav-link">+917398889347</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
<div className="row m-0 p-0 mt-4  ">
  <div className="col-12 p-0 m-0">
      <div className="card border border-0   rounded  rounded-0">
          <div className="card-header h4 text-white  rounded  rounded-0"  style={{background: 'var(--d-blue)'}}>
              <div data-aos="fade-right"> <i className="bi bi-geo-alt-fill"></i> Location</div>
          </div>
          <div className="card-body  m-0 p-0">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.3484879661028!2d83.69061145032624!3d27.427248144117375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39942392249c9073%3A0x6b62ef81415149dd!2sDrishtee%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1696133570458!5m2!1sen!2sin"
                  width="100%" height="500px" style={{border:'0'}} allowFullScreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
  </div>
</div >
       </>
    );
}
export default Branch 