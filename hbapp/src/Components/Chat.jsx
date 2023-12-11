import React, { useState } from "react";

const VerificationForm = () => {
    const [imgPreview, setImgPreview] = useState("");
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        const files = event.target.files;

        if (files.length > 0) {
            const selectedFile = files[0];

            // Check if the file size is less than or equal to 50 KB
            if (selectedFile.size <= 50 * 1024) {
                const fileReader = new FileReader();

                fileReader.onload = () => {
                    setImgPreview(fileReader.result);
                    setError("");
                };

                fileReader.readAsDataURL(selectedFile);
            } else {
                setImgPreview("");
                setError("Upload only 50 KB smaller image.");
            }
        }
    };

    return (
        <div style={{ marginTop: '4rem' }}>
            <form className=" g-4 m-0 px-md-3  m-auto text-center myshadow border border-light bg-white " id="verifyParentBg">
                <div className="col-12 m-0 p-0 " style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }}>
                    <div className="container text-center m-0 py-3 h2 fw-bold text-uppercase " style={{ color: 'rgb(255, 255, 255)' }}>
                        <b style={{ letterSpacing: '1px', color: 'white' }}>
                            Upload  <font color="red">Certificate Data</font>
                        </b>
                    </div>
                </div>
                <div class="row">

                    <div class="col-md-6">
                        <input type="text" class="form-control my-2" placeholder="Student Name" />
                        <input type="text" class="form-control my-2" placeholder="Complete Duration in Months" />
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control my-2" placeholder="Course Name (Full)" />
                        <input type="text" class="form-control my-2" placeholder="Grade & Percentage " />
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control my-2" placeholder="Course Name (Full)" />

                        <div className="input-group mb-3 p-0 m-0 d-flex justify-content-center align-items-center" > <i className="bi bi-calendar-month  input-group-text "></i>
                            <input type="date" class="form-control my-2" placeholder="Date of issue" />

                        </div>

                        <input type="file" accept="image/*" className="form-control my-2 float-start" id="choose-file" onChange={handleFileChange} />
                    </div>


                    <div class="col-md-6">
                        {imgPreview && (
                            <div id="img-preview" style={{ display: "block" }}>
                                <img src={imgPreview} style={{ maxWidth: '100px' }} className="border" alt="Preview" />
                            </div>
                        )}
                    </div>

                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        {error && <div style={{ color: "red", fontSize: '0.7rem' }}>{error}</div>}
                    </div>

                </div>
                <div className="col-md-12 pb-2 text-center mt-5">
                    <button type="button" className="btn btn-sm btn-primary text-white 
                                yellow-btn border border-white fw-bold" > Upload </button>
                </div>
            </form>


        </div>
    );
};

export default VerificationForm;
