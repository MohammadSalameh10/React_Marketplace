import React from 'react'

export default function Create() {
  return (
    <div className='w-50 mx-auto p-5'>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Product Category</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product Name</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product Price</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product Description</label>
   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button className='btn d-block btn-outline-secondary mb-3 p-2'><span className='fs-5'>+</span> Upload Images</button>
  <button type="submit" className="btn btn-dark p-3">Add Product</button>
</form>
    </div>
  )
}
