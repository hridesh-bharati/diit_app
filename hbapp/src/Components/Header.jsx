import '../App.css'
import { Link } from "react-router-dom";
function Header() {
   return (
      <>
         <div className="d-flex align-items-center justify-content-between fixed-top "
            style={{ width: '100vw !important', fontSize: '0.7rem' }} id="TopMarqueeNav">
            <div className="changer-container d-flex align-items-center justify-content-center TopWelcomeNavLeft ">
               <button className="changer-btn" style={{ background: 'transparent !important' }}>
                  <input type="checkbox" id="switch" className="checkbox d-none w-50" />
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
                  ajtiwaridrishteeindia@gmail.com
                  &nbsp;&nbsp;</a>
            </div>

         </div>

         <nav className="navbar navbar-expand-lg fixed-top py-0" style={{ background: 'var(--darkRed)' }} id="TopNavBar">
            <div className="container-fluid fw-medium text-uppercase ">
               <a className="navbar-brand p-0" href="#">
                  <img src="images/icon/logo.png" className="img-fluid" width={40} alt="DIIT" />
               </a>
               <button className="navbar-toggler small " type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon small text-light"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav m-auto px-lg-5 my-0 py-0 w-100 d-flex justify-content-between  align-items-center">
                     <li className="nav-item">
                        <Link to="/Home" className="nav-link"> <i className="fa fa-home"></i> Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/About" className="nav-link">  <i className="fa fa-address-card"></i> About</Link>
                     </li>

                     <li className="nav-item dropdown my-dropdown-toggle  text-white" aria-expanded="false">
                        <Link to="/Course" className="nav-link   dropdown-toggle" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false"> <i className="fa fa-book"></i> Course </Link>
                        <ul className="dropdown-menu rounded rounded-0  " id="CourseListNav">
                           {/* <table>
                           <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/Diploma">Computer Diploma</Link> </td>
                              </tr>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/ComputerLanguage">Computer Language</Link></td>
                              </tr>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/GraphicsDesign">Graphics Design</Link> </td>
                              </tr>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/WebDevelopment">Web Development</Link> </td>
                              </tr>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/ComputerRepairing">Computer Repairing</Link> </td>
                              </tr>
                              <tr>
                                 <td><Link className="dropdown-item px-2 " to="/Course/NielitCourse">NIELIT/DEEOACC Courses</Link></td>
                              </tr>
                           </table> */}
                        </ul>
                     </li>
                     <li className="nav-item">
                        <Link to="/Branch" className="nav-link"><i className="fa fa-anchor"></i> Branch</Link>
                     </li>
                     <li className="nav-item dropdown text-white "> <Link className="nav-link  dropdown-toggle " to="/StudentZone" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false"> <i className='fa fa-mortar-board d '></i> Student-zone
                     </Link>
                        <ul className="dropdown-menu p-0 m-0" id="studentZoneNav">
                           <table>
                              <tr>
                                 <td>
                                    <Link className="dropdown-item p-2 " to="/AdmissionForm">New
                                       Admission</Link>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <Link className="dropdown-item p-2 " to="/Verification">Verify
                                       Your
                                       Certificate</Link>
                                 </td>
                              </tr>
                           </table>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <Link to="/Contact" className="nav-link"><i className="fa fa-phone"></i> Contact</Link>
                     </li>
                     <li className="nav-item">
                        <button class="btn btn-small p-0 border border-0 myDisplayflexRow flex-column" type="button"
                           data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrollingRight"
                           aria-controls="offcanvasScrollingRight">
                           <img src="images/team/team-1.png" class="rounded rounded-circle" width="35" />
                        </button>
                     </li>
                  </ul>
               </div>
            </div>

         </nav>
         <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
            id="offcanvasScrollingRight" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header ">
               <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                  <img src="images/team/team-1.png" width="40" class="rounded-circle" />&nbsp;<span>Hridesh Bharati</span>
               </h5>
               <button type="button" class="btn btn-outline-dark" data-bs-dismiss="offcanvas" aria-label="Close">x</button>
            </div>
            <div class="offcanvas-body myshadow">
               <div class="row">
                  <div class="col-12  d-flex justify-content-between">
                     <h4>Admin Profile</h4>
                  </div>
                  <hr class="border border-secondary" />
               </div>
               <div class="row">
                  <div class="col-12">
                     <ul class="nav nav-pills mb-3 flex-column" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                           <button class="nav-link m-1 " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                              type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <i class="fa fa-user"
                                 aria-hidden="true"> </i> Your Profile
                           </button>
                           <hr class="border border-secondary m-0 p-0" />
                           <button class="nav-link m-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-ccc"
                              type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <i className="fa fa-gear"></i> Setting
                           </button>
                        </li>

                     </ul>
                     <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                           tabindex="0">


                           <form className='d-flex align-content-center justify-content-center flex-column'>
                              <div class="mb-3">
                                 <input type="password" class="form-control" placeholder='Enter Your id' aria-describedby="emailHelp" />
                              </div>
                              <div class="mb-3">

                                 <input type="password" placeholder='Enter Your Password' class="form-control" />
                              </div>

                              <button type="button" class="btn bg-voilet text-center">Save</button>
                           </form>



                        </div>

                        <div class="tab-pane fade " id="pills-ccc" role="tabpanel" aria-labelledby="pills-home-tab"
                           tabindex="0">
                           ccc
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Header;



