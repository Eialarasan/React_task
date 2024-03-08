import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
const PdfViewer = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState(null);
  const [pdfData, setPdfData] = useState(null);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const upload = (e) => {
    const files = e.target.files[0]
    const reader = new FileReader()
    reader.onload = e => {
      setPdfData(e.target.result)
    }
    reader.readAsDataURL(files)
    setFile(files)
  }

  const goToPrevPage = () => {
    if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
    }
};

const goToNextPage = () => {
    if (pageNumber < numPages) {
        setPageNumber(pageNumber + 1);
    }
};
  return (
    <div className='p-4'>
      <h4>File Upload</h4>
      <div className="Container ">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card" >
              <div className="card-body">
                <div className="header-text text-center">
                  <input onChange={(e) => upload(e)} type='file'></input>
                </div>
              </div>
            </div>
          </div>
        </div></div>
      
      <div className="Container ">
      
        <div className="row justify-content-center ">
          <div className="col-md-8">
          <h4 className='p-4'>Pdf View</h4>
            <div className="card" style={{ marginTop: '80px' }}>
              <div className="card-body">
              { pdfData&& <>
              <p >
                Page {pageNumber} of {numPages}
            </p>
                <nav className=''>
                <button className="btn btn-primary m-4" onClick={goToPrevPage}>Prev</button>
                <button className="btn btn-primary" onClick={goToNextPage}>Next</button>
            </nav>
            </>}
                <Document
                  file={pdfData}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>

              </div>
            </div>
          </div>
        </div></div>
    </div>
  );
};

export default PdfViewer;
