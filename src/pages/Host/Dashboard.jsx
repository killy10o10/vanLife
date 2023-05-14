import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="income">Income</Link> <br />
      <Link to="reviews">Reviews</Link>
    </div>
  )
}

export default Dashboard
