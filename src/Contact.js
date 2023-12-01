import React from "react";

function Contact(){
	return(
		<div>
             <section class="contactt-section">
		     <div class="contect-container">
			     <div class="contact-heading"><h1>CONTACT US</h1></div>
				 <div class="contact-map-row">
				     <div class="contact-map">
					     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.69863560108!2d77.29387868733338!3d8.964100521941052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c15ac547f7%3A0x9a707276cd8ae327!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1688877994368!5m2!1sen!2sin" style={{width:"600", height:"450" ,border:0 , allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
					 </div>
				 </div>
				 <div class="contact-form-row">
				     <div class="contact-iocn-colomun">
					     <div class="icon-div">
							     <div class="icon">
								     <i class="fa fa-map-marker" aria-hidden="true"></i></div>
									 <div><p>Location:<br/><span> A109 south street, Mudurai</span></p></div>
								 
							 </div>
							 <div class="icon-div">
							     <div class="icon">
								     <i class="fa fa-envelope-o" aria-hidden="true"></i></div>
									 <div><p>Email:<br/><span>sivasibi4545@gmail.com</span></p></div>
								 
							 </div>
							 <div class="icon-div">
							     <div class="icon">
								     <i class="fa fa-mobile" aria-hidden="true"></i></div>
									 <div><p>Call:<br/><span> 67367366232</span></p></div>
								 
							 </div>
					 </div>
					 <div class="contact-form-colomun">
					     <div class="form-first-row">
						     <div class="name-div">
							     <input type="text" id="name" placeholder="Name"/>
							 </div>
							 <div class="email-div">
							     <input type="email" id="name" placeholder="Your Email"/>
							 </div>
						 </div>
						 <div class="contact-subject-text">
						     <input type="text" id="name" placeholder="subject"/>
						 </div>
						 <div class="contact-message-box">
						     <textarea id="area" rows="4" cols="50" placeholder="Messages"></textarea>
						 </div>
						 <div class="form-button">
						     <a href="#">Send Message</a>
						 </div>
					 </div>
				 </div>
			 </div>
		 </section>
		</div>
	)
}
export default Contact