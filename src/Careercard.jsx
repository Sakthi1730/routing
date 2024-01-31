import React from 'react'

function Careercard(props) {
  return (
    <div className='col-4'>
      <div className='row'>
        <div className="card" style={{ width: '30rem', height: '33rem' }}>
          <img src={props.Ccourse.img} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.Ccourse.title}</h5>
            <p className="card-text">{props.Ccourse.discription}</p>

            <hr />
            <div className="d-flex justify-content-between">
              <p className="card-text">{props.Ccourse.date}</p>
              <p className="card-text">{`.no comment`}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Careercard