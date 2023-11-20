export default function GraphicsDesign() {
    return (
        <div className=" mx-md-5 mx-1  " id="LanguageContainer" style={{ marginTop:'4rem' }}>
            <div id="myGraphicsHeader" style={{ background: 'white', color: 'black',  }}
                className="container-fluid w-100 p-3  mt-4 myshadow text-center  ">
                <h1>
                    <b style={{ letterSpacing: '1px' }}>
                        Graphics <font Color="red">Design</font>
                    </b>
                </h1>
                <small className="d-flex px-2"> <a href="/" className="nav-link"><i className="fa fa-home"> </i> / </a>
                    &nbsp; Graphics Design
                    Courses </small>
            </div>
            <div className="myshadow my-2 py-4" style={{ background: 'white' }} id="MainGraphicsSection">
                <div className="container-fluid  " data-aos="fade-down">
                    <table className="table table-hover">
                        <table className="table table-bordered border-primary  table-sm table-hover">
                            <tr className="headText">
                                <th colspan="5">DDTP ( Diploma in Desktop Publishing)</th>
                            </tr>
                            <tr className="my-row-color">
                                <th colspan="2">COURSE CONTENTS
                                </th>
                                <th style={{ borderLeft: 'none' }}>
                                    DURATION: 6 MONTHS </th>
                            </tr>
                            <tr>
                                <td> Computer Fundamantal </td>
                                <td>MS DOS</td>
                                <td> Windows Operating System</td>
                            </tr>
                            <tr>
                                <td> Microsoft Word </td>
                                <td> Microsoft Excel </td>
                                <td> Microsoft Powerpoint </td>
                            </tr>
                            <tr>
                                <td> Microsoft Access </td>
                                <td>Computer Network & Internet</td>
                                <td className="text-danger bg-body-tertiary">Project Work</td>
                            </tr>
                            <tr>
                                <td style={{ background: 'var(--course-bg) !important' }} colspan="4">Module-2</td>
                            </tr>
                            <tr>
                                <td>Photoshop</td>
                                <td>Pagemaker</td>
                                <td>Corel-Draw</td>
                            </tr>
                        </table>
                    </table>
                </div>
                <div className="container-fluid" data-aos="fade-down">
                    <table className="table table-hover">
                        <table className="table table-bordered border-primary  table-sm table-hover">
                            <tr className="headText">
                                <th colspan="5">CDTP (Certificate in Desktop Publishing)</th>
                            </tr>
                            <tr className="my-row-color">
                                <th colspan="2">COURSE CONTENTS
                                </th>
                                <th style={{ borderLeft: 'none' }}>
                                    DURATION: 3 MONTHS </th>
                            </tr>
                            <tr>
                                <td>Introduction to DTP</td>
                                <td>Photoshop</td>
                                <td>Pagemaker</td>
                            </tr>
                            <tr>
                                <td>Corel Draw</td>
                                <td className="text-danger bg-body-tertiary">Lab Work </td>
                                <td className="text-danger bg-body-tertiary">Project Work </td>
                            </tr>
                        </table>
                    </table>
                </div>
            </div>
        </div>
    );
}