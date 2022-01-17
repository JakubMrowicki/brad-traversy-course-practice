import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({ title }) {
  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <h2>{title}</h2>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Feedback UI',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
