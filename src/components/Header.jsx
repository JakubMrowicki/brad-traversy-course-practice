import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({ title }) {
  return (
    <header>
      <div className='container'>
        <h2>
          <Link className='header-link' to='/'>
            {title}
          </Link>
        </h2>
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
