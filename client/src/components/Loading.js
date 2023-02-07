import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
    return (
        <div>
            <div className='spinner-border' role='status' style={{ hight: '100px', width: '100px', marginTop: '100px' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
