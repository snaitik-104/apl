import React from 'react'
import '../cssFiles/footer.css'

function Footer() {
  return (
 
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="footer-about">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu lectus a leo tristique dictum nec non quam. Suspendisse convallis, tortor eu placerat rhoncus, lorem quam iaculis felis, sed eleifend lacus neque id eros. Integer convallis volutpat neque
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-8">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="footer-link">
                  <h3> SPONSORS</h3>
                  <a href="">MY TEAM 11</a>
                  <a href="">BSV SPORTS</a>
                  
                 </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="footer-link">
                  <h3>QUICK LINKS</h3>
                  <a href="">HOME</a>
                  <a href="">TEAMS</a>
                  <a href="">SCHEDULE</a>
                  <a href="">POINTS TABLE</a>
                  <a href="">BLOGS</a>
                   <a href="">GALLERY</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="footer-contact">
                  <h3>Get In Touch</h3>
                  <p><i className="fa fa-map-marker-alt"></i>SP-42 ARYA COLLEGE OF ENGINEERING & I.T.</p>
                  <p><i className="fa fa-phone-alt"></i>+91 9785171020</p>
                  <p><i className="fa fa-envelope"></i>snaitik104@gmail.com</p>
                  <div className="footer-social">
                    
                  
                    <a href="https://www.youtube.com/channel/UCVOyq8xshRagLTudoGDx2kg"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.instagram.com/aryapremierleague/?igshid=YmMyMTA2M2Y%3D"><i className="fab fa-instagram"></i></a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-menu">
        <div className="f-menu">
          <a href="">Terms of use</a>
          <a href="">Privacy policy</a>
          <a href="">Cookies</a>
          <a href="">Help</a>
          <a href="">FQAs</a>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; <a href="#">ARYA APL</a> All Right Reserved.</p>
          </div>
          <div className="col-md-6">
            <p>Designed By <a href="https://htmlcodex.com">TEAM ZERO</a></p>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Footer