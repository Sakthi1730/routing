import React from 'react'

function Card(props) {
  return (
    <div className='col-4'>
      <div className='row'>
        <div className="card" style={{ width: '30rem', height: '33rem' }}>
          <img src={props.course.img} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.course.title}</h5>
            <p className="card-text">{props.course.discription}</p>

            <hr />
            <div className="d-flex justify-content-between">
              <p className="card-text">{props.course.date}</p>
              <p className="card-text">{`.no comment`}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Card