import React, { Fragment } from "react";
import './Modal.css'
const Modal = ({ receivedCartData }) => {
  let totalPrice = 0
  if (receivedCartData) {
    Object.keys(receivedCartData).map(key => {
      totalPrice += receivedCartData[key].price
    })
  }


  
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {receivedCartData && (
                <>
                      <table style={{ border: "2px solid red" }}>
                        <thead>
                          <tr><th>Product name</th>
                          <th>Count</th>
                          <th>Price</th></tr>
                          </thead>
                          {Object.keys(receivedCartData).map((key) => (
                            <Fragment key={key.name}>
                              {receivedCartData[key].price > 0 && (
                                 <tr>
                                  <td>{receivedCartData[key].name}</td>
                                  <td><img src={receivedCartData[key].image} width={100} height={100}/></td>
                                  <td>{receivedCartData[key].count}</td>
                                  <td>{receivedCartData[key].price}</td>
                                  </tr>
                              )}
                             
                            
                             
                            </Fragment>
                          ))}
                         
                         <tr><td>Total price:{totalPrice}</td></tr>
                      </table>
                      

                    {/* </Fragment>
                  ))} */}
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
