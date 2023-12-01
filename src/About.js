import React, { useEffect, useState } from "react";
import{useNavigate} from "react-router-dom"

function About(){
	//form
	const navigate=useNavigate()
	const[logout,setlogout]=useState(false)

	   useEffect(()=>{
		if(!localStorage.getItem("auth"))navigate("")
	   },[logout])

	const handlelogout=(e)=>{
		e.preventDefault()
		localStorage.removeItem("athu")
		setlogout(true)
		
	}
	return(
		<div>
                <section class="about-section">
		     <div class="about-container">
			     <div class="about-heading">
				     <h1>About us</h1>
				 </div>
			     <div class="about-row">
				     <div class="about-column">
					     <div><img src="images/about.jpg"/></div>
					     
					     
					 </div>
					 
					 <div class="about-column">
					     <div class="about-icon-div">
						     <div class="abouticon"><i class="fa fa-files-o" aria-hidden="true"style={{color:"#ffc451"}}></i></div>
                                 <h4>Est labore ad<br/><span>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi
								 ut </span></h4>
						 
					     </div>
						 <div class="about-icon-div">
						     <div class="abouticon"><i class="fa fa-cube" aria-hidden="true"style={{color:"#ffc451"}}></i></div>
                                 <h4>Harum esse qui<br/><span>Excepteur sint occaecat cupidatat non proident,
								 sunt in culpa qui officia deserunt</span></h4>
						 
					     </div>
						 <div class="about-icon-div">
						     <div class="abouticon"><i class="fa fa-picture-o" aria-hidden="true" style={{color:"#ffc451"}}></i></div>
                                 <h4>Aut occaecati<br/><span>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</span></h4>
								 
						 
					     </div>
						 <div class="about-icon-div">
						     <div class="abouticon"><i class="fa fa-shield" aria-hidden="true" style={{color:"#ffc451"}}></i></div>
                                 <h4>Beatae veritatis<br/><span>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta
								</span></h4>
						 
					     </div>
				 </div>
				 </div>
				        <div class="about-companyname-row">
						     <div class="about-img-cloumn">
					             <div><img src="images/client1.png"/></div>
							 </div>
							 <div class="about-img-cloumn">
					             <div><img src="images/client-2.png"/></div>
							 </div>
							 <div class="about-img-cloumn">
					             <div><img src="images/client3.png"/></div>
							 </div>
							 <div class="about-img-cloumn">
					             <div><img src="images/client-4.png"/></div>
							 </div>
							 <div class="about-img-cloumn">
					             <div><img src="images/clinent.png"/></div>
							 </div>
							 
							 
					     
					     </div>
						 <div class="about-row">
				             
						 <div class="about-column">
					     <div class="about-icon-div">
						     <div class="abouticon"><i class="fa fa-check" aria-hidden="true" style={{color:"#ffc451"}}></i></div>
                                 <h4>Est labore ad<br/><span>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi
								 ut </span></h4>
						 
					     </div>
						 <div class="about-icon-div">
						     <div class="abouticon"><i class="fa fa-check" aria-hidden="true" style={{color:"#ffc451"}}></i></div>
                                 <h4>Harum esse qui<br/><span>Excepteur sint occaecat cupidatat non proident,
								 sunt in culpa qui officia deserunt</span></h4>
						 
					     </div>
						 <div class="about-icon-div">
						     <div class="abouticon"><i class="fa fa-check" aria-hidden="true" style={{color:"#ffc451"}}></i></div>
                                 <h4>Aut occaecati<br/><span>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</span></h4>
								 
						 
					     </div>
						 <div class="about-icon-div">
						     <div class="abouticon"><i class="fa fa-check" aria-hidden="true" style={{color:"#ffc451"}}></i></div>
                                 <h4>Beatae veritatis<br/><span>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta
								</span></h4>
						 
					     </div>
				 </div>
				         <div class="about-column">
					         <div><img src="images/2.jpg"/></div>
					     
					     
					         </div>

				 </div>
				 </div>
			 
		 </section>
		 <button onClick={handlelogout}>Log out</button>
		</div>
	)
}
export default About