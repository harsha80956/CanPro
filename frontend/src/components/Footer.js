import React from 'react'
import {Link} from 'react-router-dom';
function Footer() {
    return (
        <div>
                <footer className="footer" style={{backgroundColor:"#334068"}}>
      <div className="row">
      <div className="col-3">
        <p>Know about us</p>
        <Link>About Us</Link>
        <Link>Careers</Link>
        <Link>Blogs</Link>
        </div>
        <div className="col-3">
        <p>Get in touch</p>
        <Link>facebook</Link>
        <Link>instagram</Link>
        <Link>twitter</Link>
        <Link>linkedin</Link>
        </div>
        <div className="col-3">
        <p>Enroll yourself</p>
        <Link>Become our partner</Link>
        <Link>Become an affliate</Link>
        <Link>Advertise your brand</Link>
        </div>
        <div className="col-3">
        <p>Contact US</p>
        <p className="footer-address">
          bangalore-560001
        </p>
        <Link>Helpline number: 1234567890</Link>
        <Link>Email: customercare@totcery.com</Link>
        </div>
      </div>
      <hr />
      <p className="text-center">Designed & Developed by PartNets</p>
    </footer>
        </div>
    )
}

export default Footer
