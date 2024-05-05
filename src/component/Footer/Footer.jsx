import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        
                <div className="container">
                <div class="footer">
        <div class="footer-col">
        <img  style={{width:'150px',marginTop:'-30px'}} src="https://static.vecteezy.com/system/resources/thumbnails/028/861/825/small/svg-letter-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" alt=""/>
        </div>
        <div className="footer-col">
          <ul> <h1>Pages</h1>
         <li><a href="#" class="">Home</a></li>
          <li><a href="#" class="">Contact</a></li>
           <li><a href="#" class="">Contact</a></li>
            <li>  <a href="#" class="">Contact</a></li>
              <li><a href="#" class="">Properties</a></li></ul>
          </div>
          <div class="footer-col">
            <ul><h1>CMS Pages</h1>
              <li><a href="#" class="">Property</a></li>
             <li> <a href="#" class="">Property Single</a></li>
             <li> <a href="#" class="">Blog Categories</a></li>
             <li> <a href="#" class="">Blog Single</a></li>
              <li><a href="#" class="">Agent Single</a></li></ul>
            </div>
            <div class="footer-col">
              <ul><h1>Utility Pages</h1>
           
                <li><a href="" class="">Style Guide</a></li>
             <li> <a href="#" class="">Changelog</a></li>
             <li> <a href="#" class="">Licenses</a></li>
              <li><a href="#" class="">404</a></li>
              <li><a href="#" class="">Password</a></li>
             <li> <a href="#" class="">Search</a></li>
              </ul>
              </div>

              <div class="footer-col">
                <h1>Subscribe</h1>
                <p>Join our newsletter to stay up to date on features and releases.</p>

             <div class="input">
              <div class="input-all">
                <label for="email">
                  <input type="email" placeholder="Enter your email" name="email" id="email"/>
                </label>
              </div>
              <div class="input-all">
                <button class="btn9"><p>Get started</p></button>
              </div>
             </div>

                </div>
            
        </div>
        </div>
        </div>
    );
}

export default Footer;
