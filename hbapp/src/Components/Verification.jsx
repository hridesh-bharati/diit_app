export default function Verification() {
    return (

        <>
            
            <div className="col-md-8 myshadow position-relative bg-white border border-secondary-subtle ">
                <div id="PrintResult">
                    <table className="table table-sm table-responsive border border-secondary-subtle   ">
                        <tr className="text-center  ">
                            <td>
                                <div className="row">
                                    <div className="col-12 " style={{ width: '150px' }}>
                                        <img src="images/team/team-4.jpg"  className="img-thumbnail img-fluid " />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>This is certify to that <b id="stdName">Hridesh Bharati</b> has successfull completed
                                    the
                                    <b id="StrdCourse">ADCA </b>Course from our Institute.
                                    <br />
                                    The institute is wishing best of luck for them futute.
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
                <table className="table table-responsive table-sm  ">
                    <tr>
                        <td><button className=" btn btn-primary yellow-btn" >
                            <i className="fa fa-print"></i>
                            Print
                        </button></td>
                        <td><button className="btn btn-primary yellow-btn ">
                            <i className="fa fa-download"></i>
                            Download</button></td>
                    </tr>
                </table>
            </div>
        </>
    );
} 