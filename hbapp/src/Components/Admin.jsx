import React, { useEffect, useState, useContext } from 'react'
import AdmissionForm from './AdmissionForm'
import 'react-toastify/dist/ReactToastify.css'
import ConfermModal from './tools/ConfermModal';
import { UniversalContext } from '../context/universal';
export default function Admin() {
	const { confermModal, setConfermModal } = useContext(UniversalContext)
	const [allStudent, setAllStudent] = useState([]);
	const getStudentList = () => {
		fetch('http://localhost:3000/studentList')
			.then(res => res.json())
			.then(data => {
				setAllStudent(data);
			}).catch((error) => {
				console.log(error);
			})
	}
	useEffect(() => {
		getStudentList();
	}, [])
	return (
		<>
			<header className="p-0  shadow d-flex align-content-center bg-primary shadow-sm w-100" style={{ marginTop: '4rem' }} id="adminHeader">
				<div className="row  px-0 mx-0 myFlex2 w-100">
					<div className="col-md-10 mx-0 px-0 ">
						<div className="row px-0 mx-0  ">
							<div className="col-md-12 d-flex">
								<div className="row d-flex w-100 mx-0 px-0">
									<div className="col-5 d-flex justify-content-start">
										<h4 className="text-center fw-bolder fw-bolder text-white bg-primary p-0 m-0 py-4"> <i className="fa fa-dashboard"
											aria-hidden="true"></i>
											&nbsp; Dash Board</h4>
									</div>
									<div className="col-7 d-flex align-items-center">
										<div className="input-group">
											<input type="text" className="form-control border-0 rounded-0"
												placeholder="Search data's &amp; reports.." />
											<span className="input-group-text bg-warning text-white border-0 rounded-0">
												<i className="fa fa-search" aria-hidden="true"></i></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-2 px-0 mx-0 d-none d-md-block  justify-content-between   ">
						<div className="row px-0 mx-0 ">
							<div className="col-md-12   align-content-center justify-content-evenly">
								<div className="myFlex2">
									<button type="button" className="btn bg-secondary-subtle mx-3 position-relative" data-bs-toggle="modal"
										data-bs-target="#MessageModal">
										<i className="bi bi-bell-fill text-secondary-emphasis fs-6"></i>
										<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
											99+
										</span>
									</button>
									{/* <button className="btn  border border-0 myFlex2 flex-column" type="button"
                              data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrollingRight"
                              aria-controls="offcanvasScrollingRight">
                              <img src="pic/team/team-1.png" className="rounded rounded-circle" width="40" />
                           </button> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			{confermModal && <ConfermModal />}
			<div className="row mx-0 px-0">
				<div className="col-12 mx-0 px-0  ">
					<div className="row  mx-0 px-0 ">
						<div className="col-md-2 mx-0 text-white px-0 bg-white myshadow">
							<hr className="m-0 p-0" />
							<div className="nav flex-column nav-pills  " id="v-pills-tab" role="tablist" aria-orientation="vertical">
								<div className="accordion accordion-flush" id="accordionFlushExample">
									<div className="accordion-item">
										<h2 className="accordion-header ">
											<button className="accordion-button bg-primary text-white accordianShadowHover collapsed"
												type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
												aria-expanded="false" aria-controls="flush-collapseOne">
												<i className="fa fa-graduation-cap" aria-hidden="true"></i> &nbsp; Students
											</button>
										</h2>
										<div id="flush-collapseOne" className="accordion-collapse collapse"
											data-bs-parent="#accordionFlushExample">
											<div className="accordion-body">
												<button className="nav-link active w-100" data-bs-toggle="pill" data-bs-target="#v-pills-home"
													type="button" role="tab" onClick={() => { getStudentList() }}> <i className="fa fa-user-circle-o"></i> All Students</button>
												<button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
													type="button" role="tab"> <i className="bi bi-person-plus-fill"></i> Add Students</button>
												<button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#v-pills-settings"
													type="button" role="tab"> <i className="bi bi-trash"></i> Restore Students</button>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion accordion-flush" id="AdminSection">
									<div className="accordion-item">
										<h2 className="accordion-header ">
											<button className="accordion-button bg-primary text-white accordianShadowHover collapsed"
												type="button" data-bs-toggle="collapse" data-bs-target="#AdmimPanel" aria-expanded="false"
												aria-controls="flush-collapseOne">
												<i className="fa fa-graduation-cap" aria-hidden="true"></i> &nbsp; Admin
											</button>
										</h2>
										<div id="AdmimPanel" className="accordion-collapse collapse" data-bs-parent="#AdminSection">
											<div className="accordion-body">
												<button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#AdminProfile"
													type="button" role="tab"> <i className="fa fa-user-circle" aria-hidden="true"></i> Profile
												</button>
												<button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#NewAccount"
													type="button" role="tab"> Create an account</button>
												<button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#AdminLogin"
													type="button" role="tab"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
													Log in</button>
												<button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#AdminLogOut"
													type="button" role="tab"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
													Log Out</button>
											</div>
										</div>
									</div>
								</div>

								<div className="accordion accordion-flush" id="accordionFlushExample">
									<div className="accordion-item">
										<h2 className="accordion-header ">
											<button className="accordion-button bg-primary text-white accordianShadowHover collapsed"
												type="button" data-bs-toggle="collapse" data-bs-target="#allCourses"
												aria-expanded="false" aria-controls="allCourses">
												<i className="fa fa-graduation-cap" aria-hidden="true"></i> &nbsp; Courses
											</button>
										</h2>
										<div id="allCourses" className="accordion-collapse collapse"
											data-bs-parent="#accordionFlushExample">
											<div className="accordion-body">
												<button className="nav-link  w-100" data-bs-toggle="pill" data-bs-target="#cccc"
													type="button" role="tab" > <i className="fa fa-user-circle-o"></i>  ccc</button>
												<button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#hhhh"
													type="button" role="tab"> <i className="bi bi-person-plus-fill"></i> html </button>

											</div>
										</div>
									</div>
								</div>

								<div className="accordion accordion-flush" id="accordionFlushExample">
									<div className="accordion-item">
										<h2 className="accordion-header ">
											<button className="accordion-button bg-primary text-white accordianShadowHover collapsed"
												type="button" data-bs-toggle="collapse" data-bs-target="#Offers"
												aria-expanded="false" aria-controls="Offers">
												<i className="fa fa-graduation-cap" aria-hidden="true"></i> &nbsp; Offers
											</button>
										</h2>
										<div id="Offers" className="accordion-collapse collapse"
											data-bs-parent="#accordionFlushExample">
											<div className="accordion-body">
												<button className="nav-link  w-100" data-bs-toggle="pill" data-bs-target="#OffersForNewStudent"
													type="button" role="tab" > <i className="fa fa-user-circle-o"></i>  ccc</button>

											</div>
										</div>
									</div>
								</div>


							</div>
						</div>
						<div className="col-md-10 container   py-2 px-md-0 px-lg-4">
							<div className="tab-content mx-0 px-0 pb-5" id="v-pills-tabContent">
								<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
									aria-labelledby="v-pills-home-tab" tabindex="0">
									<div className="mx-0 px-0">
										<div className="row mb-5">
											<div className="col-xl-3 col-xxl-3 col-sm-6 my-2">
												<div className="widget-stat myshadow2 border-0 card bg-primary">
													<div className="card-body">
														<div className="media">
															<span className="mx-1 bg-white">
																<i className="fa fa-user-circle-o" aria-hidden="true"></i>
															</span>
															<div className="media-body text-white">
																<p className="mb-1">Total Students</p>
																<h3 className="text-white">{allStudent.length}</h3>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-xxl-3 col-sm-6 my-2">
												<div className="widget-stat myshadow2 border-0 card bg-warning d-flex">
													<div className="card-body">
														<div className="media">
															<span className="mx-1">
																<i className="fa fa-user " aria-hidden="true"></i>
															</span>
															<div className="media-body text-white">
																<p className="mb-1">New Students</p>
																<h3 className="text-white">245</h3>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-xxl-3 col-sm-6 my-2">
												<div className="widget-stat myshadow2 border-0 card bg-voilet">
													<div className="card-body">
														<div className="media">
															<span className="mx-1">
																<i className="fa fa-graduation-cap" aria-hidden="true"></i>
															</span>
															<div className="media-body text-white">
																<p className="mb-1">Total Course</p>
																<h3 className="text-white">28</h3>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-xxl-3 col-sm-6 my-2">
												<div className="widget-stat myshadow2 border-0 card bg-danger">
													<div className="card-body">
														<div className="media">
															<span className="mx-1">
																<i className="fa fa-rupee" aria-hidden="true"></i> </span>
															<div className="media-body text-white">
																<p className="mb-1">Fees Collection</p>
																<h3 className="text-white">25160 <i className="fa fa-rupee" aria-hidden="true"></i>
																</h3>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="row mx-0 px-0  myshadow">
											<div className="col-12 py-2 mx-0 d-flex bg-white justify-content-between align-content-center ">
												<div className="h2 fw-bold myFlex2 text-primary"><b>All Students</b></div>
												{/* <div className="myFlex2">
                                       <button className="btn btn-primary rounded-0"> <i className="fa fa-plus-circle"
                                          aria-hidden="true"></i> Add New</button>
                                    </div> */}
											</div>
										</div>
										<div className="row mx-0 px-0  py-2 bg-white text-primary  myshadow"
											style={{ borderTop: 'var(--my-border)' }}>
											<div
												className="col-12 mx-0  px-2 fw-medium d-flex justify-content-between align-content-center ">
												<div className="d-flex  fw-bolder">
													<p id="All small"> Total Students List</p>
												</div>
												<div>
													<input type="search" name="search" className="border-secondary-subtle border rounded p-1"
														placeholder="Search" id="search" />
												</div>
											</div>
											<table className="table table-responsive table-sm " id="dashBoardTable" style={{ color: 'maroon' }}>
												<thead>
													<tr role="row">
														<th >Photo</th>
														<th>Reg. No</th>
														<th>Name</th>
														<th>Address</th>
														<th>Mobile</th>
														<th>Admission Date</th>
														<th >Action</th>
													</tr>
												</thead>
												<tbody>
													{
														allStudent.map((student) => {
															return (
																<tr role="row" className="odd" id={student._id}>
																	<td><img className="rounded-circle" width="40" src={student.photo} />
																	</td>
																	<td className="fw-medium">05</td>
																	<td className="">{student.name}</td>
																	<td>{student.address}</td>
																	<td>{student.mobileNumber}</td>
																	<td>{student.dob.slice(0, 10)}</td>
																	<td>
																		<button type="button" class="btn btn-sm bg-seconday bg-danger text-white"
																			onClick={() => { setConfermModal(true) }}>
																			<i class="fa fa-trash-o" aria-hidden="true"></i>
																		</button>
																	</td>
																</tr>
															)
														})
													}
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"
									tabindex="0">
									<AdmissionForm />
								</div>
								<div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
									aria-labelledby="v-pills-settings-tab" tabindex="0">
									<div className="row">
										<div className="col-12">
											<div className=" py-2 mx-0 d-flex bg-white justify-content-between align-content-center ">
												<div className="h2 fw-bold myFlex2 text-primary"><b>All Students</b></div>
												{/* <div className="myFlex2">
                                       <button className="btn btn-primary rounded-0"> <i className="fa fa-plus-circle"
                                          aria-hidden="true"></i> Add New</button>
                                    </div> */}
											</div>
										</div>
										<table className="table table-responsive table-sm " id="dashBoardTable" style={{ color: 'maroon' }}>
											<thead>
												<tr role="row">
													<th >Photo</th>
													<th>Reg. No</th>
													<th>
														Name</th>
													<th>Address</th>
													<th>
														Mobile</th>
													<th>Admission Date</th>
													<th>
														Action</th>
												</tr>
											</thead>
											<tbody>
												{
													allStudent.map((student) => {
														return (
															<tr role="row" className="odd" id={student._id}>
																<td><img className="rounded-circle" width="40" src={student.photo} />
																</td>
																<td className="fw-medium">05</td>
																<td className="">{student.name}</td>
																<td>{student.address}</td>
																<td>{student.mobileNumber}</td>
																<td>{student.dob.slice(0, 10)}</td>
																<td>
																	<a href="javascript:void(0);" className="btn btn-sm btn-primary"><i
																		className="fa fa-pencil" aria-hidden="true"></i></a>
																	<button type="button" className="btn btn-sm bg-secondary-subtle bg-danger text-white"
																		onclick="clickToOpen()">
																		<i className="fa fa-trash-o" aria-hidden="true"></i>
																	</button>
																</td>
															</tr>
														)
													})
												}
											</tbody>
										</table>
									</div>
								</div>
								<div className="tab-pane fade" id="AdminProfile" role="tabpanel" tabindex="0">
									<div className="row">
										<div className="col-12">
											<div className="row">
												Hridesh Admin1
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="NewAccount" role="tabpanel" tabindex="0">
									<div className="row myflex d-flex justify-content-center my-4">
										<div className="col-12 col-md-8 bg-white py-3 myshadow">
											<div className="p-2">
												<div className="text-center">
													<h1 className="h4 text-gray-900 mb-4 text-primary">Create an Account!</h1>
												</div>
												<form className="user">
													<div className="form-group row my-2">
														<div className="col-sm-6 mb-3 mb-sm-0">
															<input type="text" className="form-control form-control" id="exampleFirstName"
																placeholder="First Name" />
														</div>
														<div className="col-sm-6">
															<input type="text" className="form-control form-control" id="exampleLastName"
																placeholder="Last Name" />
														</div>
													</div>
													<div className="form-group">
														<input type="email" className="form-control form-control" id="exampleInputEmail"
															placeholder="Email Address" />
													</div>
													<div className="form-group row my-2">
														<div className="col-sm-6 mb-3 mb-sm-0">
															<input type="password" className="form-control form-control"
																id="exampleInputPassword" placeholder="Password" />
														</div>
														<div className="col-sm-6">
															<input type="password" className="form-control form-control"
																id="exampleRepeatPassword" placeholder="Repeat Password" />
														</div>
													</div>
													<a href="login.html" className="btn btn-primary w-100 my-2 py-2 rounded-pill">
														Register Account
													</a>
													<hr />
													<a href="index.html" className="btn btn-danger w-100 my-2 py-2 rounded-pill">
														<i className="fa fa-google" aria-hidden="true"></i> Register with Google
													</a>
													<a href="index.html" className="btn fbColor text-white  w-100 my-2 py-2 rounded-pill"> <i
														className="fa fa-facebook" aria-hidden="true"></i>
														Register with Facebook
													</a>
												</form>
												<hr />
												<div className="text-center">
													<a className="small" href="forgot-password.html">Forgot Password?</a>
												</div>
												<div className="text-center">
													<a className="small" href="login.html">Already have an account? Login!</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="AdminLogin" role="tabpanel" tabindex="0">
									<div className="row myflex d-flex justify-content-center my-4">
										<div className="col-12 col-md-6 bg-white py-3 myshadow">
											<form id="loginForm">
												<h3 className="text-center text-primary">Welcome Back!</h3>
												<div className="mb-3">
													<input type="email" className="form-control " placeholder="Enter User's id" />
												</div>
												<div className="mb-3">
													<input type="password" className="form-control " placeholder="Password" />
												</div>
												<div className="mb-3 form-check">
													<input type="checkbox" className="form-check-input" id="exampleCheck1" />
													<label className="form-check-label" for="exampleCheck1">Remember Me</label>
												</div>
												<button type="submit" className="btn btn-primary w-100 rounded-pill">Log in</button>
												<hr />
												<div className="text-center">
													<a className="nav-link text-primary" href="#"> <small>Forget Password</small> </a>
												</div>
												<div className="text-center">
													<a className="nav-link text-primary" href="#"> <small> Create an Account!</small>
													</a>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="AdminLogOut" role="tabpanel" tabindex="0">
									<div className="row myflex d-flex justify-content-center my-4">
										<div className="col-12">
											<div className="row">
												<div className="col-md-4">
													<div className="row">
														<div className="col-md-11 d-flex justify-content-center">
															<div className="card" style={{ width: '18rem' }}>
																<img src="Hb.jpg" width="20" className="img-fluid card-img-top" alt="..." />
																<div className="card-body">
																	<h5 className="card-title">Card title</h5>
																	<p className="card-text">Some quick example text to build on the card title and
																		make up the bulk of the card's content.</p>
																	<a href="#" className="btn btn-primary">Go somewhere</a>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-8">
													<div className="row">
														<div className="col-md-11">
															<div className="card">
																<div className="card-body">
																	<div className="profile-personal-info pt-4">
																		<h4 className="text-primary mb-4">Personal Information</h4>
																		<div className="row mb-4">
																			<div className="col-lg-3 col-md-4 col-sm-6 col-6">
																				<h5 className="f-w-500">Name <span className="pull-right">:</span>
																				</h5>
																			</div>
																			<div className="col-lg-9 col-md-8 col-sm-6 col-6"><span>Hridesh
																				Bharati</span>
																			</div>
																		</div>
																		<div className="row mb-4">
																			<div className="col-lg-3 col-md-4 col-sm-6 col-6">
																				<h5 className="f-w-500">Email <span className="pull-right">:</span>
																				</h5>
																			</div>
																			<div className="col-lg-9 col-md-8 col-sm-6 col-6">
																				<span>info@example.com</span>
																			</div>
																		</div>
																		<div className="row mb-4">
																			<div className="col-lg-3 col-md-4 col-sm-6 col-6">
																				<h5 className="f-w-500">Age <span className="pull-right">:</span>
																				</h5>
																			</div>
																			<div className="col-lg-9 col-md-8 col-sm-6 col-6"><span>20</span>
																			</div>
																		</div>
																		<div className="row mb-4">
																			<div className="col-lg-3 col-md-4 col-sm-6 col-6">
																				<h5 className="f-w-500">Location <span className="pull-right">:</span>
																				</h5>
																			</div>
																			<div className="col-lg-9 col-md-8 col-sm-6 col-6"><span>Rosemont Avenue
																				Melbourne,
																				Florida</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="cccc" role="tabpanel">
									<div className="mx-0 px-0">
										<div className="row mb-5">
											CCCC
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="hhhh" role="tabpanel" >
									<div className="mx-0 px-0">
										<div className="row mb-5">
											hhhh
										</div>
									</div>
								</div>
							</div>

							<div className="tab-pane fade" id="OffersForNewStudent" role="tabpanel">
								<div className="mx-0 px-0">
									<div className="row mb-5">


										<div className="row  myflex d-flex justify-content-center my-1">
											<div className="col-12 col-md-8 bg-white py-1 myshadow">
												<div className="p-2">
													<div className="text-center">
														<h1 className="fw-bolder text-gray-900 mb-4 text-primary"> OFFERS FOR ENQUIRY NOW</h1>
													</div>
													<div className="offersTitle">
														<h4> <b className="text-warning">50%</b> Off For New Students</h4>

														<div class="mb-3">
															<input type="text" class="form-control" placeholder='Send a new offers....' />
														</div>
														<div class="mb-3">
															<textarea class="form-control" placeholder='caption of message....' rows="4"></textarea>
														</div>
													</div>
													<div className="text-center my-2">
														<a className="small btn btn-primary" href="javascript:void[0]">Update</a>
													</div>
												</div>
											</div>
										</div>






									</div>
								</div>
							</div>




						</div>
					</div>
				</div>
			</div>
		</>
	)
}
