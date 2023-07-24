import "./footer.scss";
import "normalize.css";
import { Carousel } from "antd";
import React from "react";
// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };
function Footer() {
  return (
    // <div className="footer">
    //   <Carousel style={{  }}>
    //     <div>
    //       <h3 style={contentStyle}>1</h3>
    //     </div>
    //     <div>
    //       <h3 style={contentStyle}>2</h3>
    //     </div>
    //     <div>
    //       <h3 style={contentStyle}>3</h3>
    //     </div>
    //     <div>
    //       <h3 style={contentStyle}>4</h3>
    //     </div>
    //   </Carousel>
    // </div>
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="/">about us</a></li>
  	 				<li><a href="/">our services</a></li>
  	 				<li><a href="/">privacy policy</a></li>
  	 				<li><a href="/">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="/">FAQ</a></li>
  	 				<li><a href="/">shipping</a></li>
  	 				<li><a href="/">returns</a></li>
  	 				<li><a href="/">order status</a></li>
  	 				<li><a href="/">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="/">watch</a></li>
  	 				<li><a href="/">bag</a></li>
  	 				<li><a href="/">shoes</a></li>
  	 				<li><a href="/">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="/"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="/"><i class="fab fa-twitter"></i></a>
  	 				<a href="/"><i class="fab fa-instagram"></i></a>
  	 				<a href="/"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
    </footer>
  );
}
export default Footer;
