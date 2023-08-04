import './App.css';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
 
  return (
    <>
    
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src="https://www.futurismtechnologies.com/wp-content/themes/futurism/images/icons/logo.png" alt="Futurism logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="/">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Solutions </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Industries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Partners</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Careers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>
            
          </ul>
        </div>
      </div>
     </nav>
   
{/* ------------------------------------------- */}
      <section className='first-bg d-flex align-items-center '>
        <div className='container for-text'>
           <div className='row'>
               <div className="d-flex flex-column ">
                   <h1>Careers</h1>
                   <p>Beam Your Growth To New Dimensions</p>
               </div>
               {/* <div className="col-lg-6 col-md-4 col-sm-5">

               </div> */}
           </div>
        </div>
      </section>

      {/* ------------------------------------------------- */}
     
      <section>
          <div className='container'>
          <div className='row'>
                <div className='whole-list'>
                  <div className='co-list'>
                      <ul >
                        <li>India</li>
                        <li>USA</li>
                        <li>UK</li>
                        <li>Dubai</li>
                        <li>Australia</li>
                        <li>Germany</li>
                      </ul>
                  </div>
                  <div className='job-list'>
                         <h5>React Js Front End Developer</h5>
                         <br/>
                         <h4>JOB DESCCRIPTION</h4>
                         <ul >
                            <li>Maintain existing React systems, including fixing bugs</li>
                            <li>Design and develop new custom components to meet project requirements</li>
                            <li>Install and configure server environments for React deployments</li>
                            <li>Maintain and update project dependencies as well as fix any conflicts</li>
                            <li>Working with other JavaScript developers and software engineers to develop front-end and back-end architecture that’s well structured and flexible, along with the APIs to support it</li>
                          
                          </ul>
                          <br/>
                          <div class="col-6 ">
                            <button style={{width:"60%"}} class="btn btn-info" type="button">Apply</button>
                          </div>
                  </div>
                </div>
                </div>
          </div>
      </section>
      {/* <br/>
      <br/> */}
      <div className='crew_out'>
      <section className='crew'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-12  d-flex flex-column text-center'>
              <h2>Join Our Crew</h2>
              <h3>Experience tomorrow’s workplace dynamics</h3>
              <p>We strive to provide an excellent corporate culture supported by management practices nurturing people to deliver the best. Our work environment encourages leadership, innovation, integrity, motivating to achieve excellence.</p>
              <p>State-of-the-art facilities, flexible working hours, and quality training programs – we offer a congenial atmosphere for the team to deliver unsurpassed quality and high-value services to our clients.</p>
            </div>
            <div className='col-xl-6 col-lg-12  d-flex flex-column justify-content-center align-items-center '>
              <video style={{width:"100%",height:"auto"}} controls poster="https://www.futurismtechnologies.com/wp-content/uploads/2023/04/career-video-thumbnail.jpg">
                     <source src="https://www.futurismtechnologies.com/wp-content/themes/futurism/videos/futurism-career-video.mp4" type/>
              </video>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* ------------------------------------------------------------------ */}

      <section className='Tech-sec'>
        <div className='container'>
              <div className='row'>
                <div className='col p-5'>
                  <div className='tech-head d-flex flex-column text-center align-items-center'>
                    <h1>Why Futurism Technologies?</h1>
                    <h3>Experience tomorrow’s workplace dynamics</h3>
                  </div>
                </div>
              </div>
              <div className='row heading-why'>
                  <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-3'>
                    <div class="icon-box d-flex flex-column text-center align-items-center">
                      <div class="icon"><i style={{color:"white"}} class="fa fa-wpexplorer" ></i></div>
                      <p style={{color:"white"}} class="description">RESPECT FOR CALIBER ACROSS LEVELS</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-3'>
                      <div class="icon-box d-flex flex-column text-center align-items-center">
                          <div class="icon"><i style={{color:"white"}} class="fa fa-users" ></i></div>
                          <p style={{color:"white"}} class="description">TEAM WORK WITH ACCOUNTABILITY</p>
                      </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-3'>
                      <div class="icon-box d-flex flex-column text-center align-items-center">
                          <div class="icon"><i style={{color:"white"}} class="fa fa-line-chart" ></i></div>
                          <p style={{color:"white"}} class="description">IMPRESSIVE GROWTH PLAN</p>
                      </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-3'>
                      <div class="icon-box d-flex flex-column text-center align-items-center">
                          <div class="icon"><i style={{color:"white"}} class="fa fa-eercast" ></i></div>
                          <p style={{color:"white"}} class="description">ENTREPRENEURIAL MINDSET</p>
                      </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-3'>
                      <div class="icon-box d-flex flex-column text-center align-items-center">
                          <div class="icon"><i style={{color:"white"}} class="fa fa-low-vision" ></i></div>
                          <p style={{color:"white"}} class="description">BACKED BY A STRONG COMPANY VISION</p>
                      </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-3'>
                      <div class="icon-box d-flex flex-column text-center align-items-center">
                          <div class="icon"><i style={{color:"white"}} class="fa fa-building" ></i></div>
                          <p style={{color:"white"}} class="description">PROFESSIONAL WORKING ENVIRONMENT</p>
                      </div>
                  </div>

              </div>
        </div>
      </section>

      {/* ---------------------------------------- */}

      <section className='life_div'>
        <div className='container'>
           <div className='row'>
             <div className='col d-flex text-center align-items-center justify-content-center'>
                <div className='life-head'>
                  <h1>Culture & Life At Futurism</h1>
                </div>
             </div>
           </div>
           <div className='row'>
             <div className='col-lg-6 col-md-12 '>
                <div className='content'>
                    <div className='content-overlay'></div>
                    <div className='sub_content'>
                      <h1>Culture</h1>
                      <h2>at Futurism</h2>
                    </div>
                    <div className='content-details fadeIn-left'>
                      <ul>
                        <li> <i className='fa fa-arrow-right' aria-hidden="true"/>&nbsp; Highly Creative</li>
                        <li> <i className='fa fa-arrow-right' aria-hidden="true"/>&nbsp;Highly Creative</li>
                        <li> <i className='fa fa-arrow-right' aria-hidden="true"/>&nbsp;Highly Creative</li>
                        <li> <i className='fa fa-arrow-right' aria-hidden="true"/>&nbsp;Highly Creative</li>
                        <li> <i className='fa fa-arrow-right' aria-hidden="true"/>&nbsp;Highly Creative</li>
                      </ul>
                    </div>
                </div>
             </div>
             <div className='col-lg-6 col-md-12 '>
             <div className='content'>
                    <div className='content-overlay'></div>
                    <div className='sub_content-sec'>
                      <h1>Life</h1>
                      <h2>at Futurism</h2>
                    </div>
                    <div className='content-details fadeIn-left'>
                      <ul>
                        <li> <i className='fa fa-arrow-right' aria-hidden="true"/>&nbsp; Highly Creative</li>
                        <li> <i className='fa fa-arrow-right' aria-hidden="true"/>&nbsp;Highly Creative</li>
                        <li> <i className='fa fa-arrow-right' aria-hidden="true"/>&nbsp;Highly Creative</li>
                        <li> <i className='fa fa-arrow-right' aria-hidden="true"/>&nbsp;Highly Creative</li>
                        <li> <i className='fa fa-arrow-right' aria-hidden="true"/>&nbsp;Highly Creative</li>
                      </ul>
                    </div>
                </div>
             </div>
           </div>
        </div>
      </section>



      {/* -------------------------------------------------------------- */}
      <section className='form-div'>
        <div className='container'>
          <div className='row'>
               <div className='col d-flex justify-content-center form-head text-center'>
                <h2>Let's Talk About Your Needs</h2>
               </div>
          </div>
          <div className='row'>
             <div className='col'>
              <div className='form'>
                <div className='row'>
                    <div className='col input_div'>
                       <label for="fullName" class="form-label">Full name</label>
                       <input type='text' name='fname' className='input_box'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 input_div' >
                       <label for="fullName" class="form-label">Email</label>
                       <input type='text' name='fname' className='input_box'/>
                    </div>
                    <div className='col-lg-6 input_div'>
                       <label for="fullName" class="form-label">Company Name</label>
                       <input type='text' name='fname' className='input_box'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 input_div'>
                       <label for="fullName" class="form-label">Phone No</label>
                       <input type='text' name='fname' className='input_box'/>
                    </div>
                    <div className='col-lg-6'>
                       <label for="fullName" class="form-label">Invester</label>
                       <input type='text' name='fname' className='input_box'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col input_div'>
                       <label for="fullName" class="form-label">Any Massage</label>
                       <input type='text' name='fname' className='input_box'/>
                    </div>
                </div>
                <div className='row pt-3'>
                    <div className='col-lg-8 '>
                       <label for="fullName" class="form-label"><input type='checkbox' value={"Yes"} style={{width:"auto"}} tabIndex={"7"}/>&nbsp;I would like to receive information about Futurism Technologies’ news and events.</label>
                       
                    </div>
                    <div className='col-lg-4 d-flex justify-content-end'>
                       <button type='submit' className='btn btn-danger sub-btn'>Submit</button>
                    </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>



{/* -------------------------------------------- */}


      <section className='Subscribe'>
        <div className='container'>
          <div className='row'>
            <div className='col d-flex flex-column text-center align-items-center'>
              <h5>Subscribe Now! Get Awesome Monthly Posts</h5>
              <p>Make your business more successful with latest tips and updates for technologies</p>
              <div className="input-group mb-3 sub-group">
                <input type="text" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2"/>
                <span className="input-group-text abc" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      


      {/* -------------------------------------------------------- */}


      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
               <ul>
                  <li className='title-link'>Cognitive Services</li>
                  <li>AI/ML</li>
                  <li>RPA</li>
                  <li>Data Science</li>
                  <li>Blockchain</li>
               </ul>

               <ul>
                  <li className='title-link'>Digital Services</li>
                  <li>UI/UX</li>
                  <li>Digital Marketing & Branding</li>
                  <li>Ecommerce</li>
                  <li>Mobility</li>
                  <li>IoT</li>
                  <li>Smart Factory</li>
                  <li>Data Analytics</li>
                  <li>Automation</li>
                  <li>Cloud Computing</li>
               </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                  <li className='title-link'>Business Services</li>
                  <li>Application Development & Maintenance</li>
                  <li>Infrastructure Management Services</li>
                  <li>Cybersecurity Services</li>
                  <li>Enterprise Application Integration</li>
                  <li>Product Engineering</li>
                  <li>Quality Assurance and Testing</li>
                  <li>IT Consulting</li>
                  <li>Enterprise Product Platforms</li>
                  
                </ul>
                <ul>
                  <li className='title-link'>Solutions</li>
                  <li>Futurism Diginyze</li>
                  <li>Futurism EndPoint Secure</li>
                  <li>Futurism Eagle Eye</li>
                  <li>Futurism Secure Access</li>
                  <li>Futurism Data Protect</li>
                  <li>Zero Trust Security</li>
                  <li>Futurism IoT Platform</li>
                  <li>BOT-AMI</li>
                  <li>WorkAnyWhere</li>
                  <li>Futurism Smart Warehouse Management</li>
                </ul>
            </div>
            <div className='col-lg-3 third_col' >
                <ul>
                  <li className='title-link'>Industries</li>
                  <li>BFSI</li>
                  <li>Education</li>
                  <li>Energy & Utilities</li>
                  <li>Government</li>
                  <li>Healthcare</li>
                  <li>Manufacturing</li>
                  <li>Media And Entertainment</li>
                  <li>Retail</li>
                  <li>Telecom</li>
                  <li>Transportation And Logistics</li>
                </ul>
                


                <ul>
                   <li className='title-link'>Call Us</li>
                   <li>USA +1 (732) 790-2938</li>
                </ul>
                <ul>
                  <li className='title-link'>Social Media</li>
                  <a href='/'><i class="fa fa-facebook"/></a>
                  <a href='/'><i class="fa fa-twitter"/></a>
                  
                </ul>
            </div>
            <div className='col-lg-3'>
                  <ul> 
                    <li className='title-link'>Home</li>
                    <li>About Us</li>
                    <li>Success Stories</li>
                    <li>Executive Team</li>
                    <li>Partners</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>Case Studies</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Sitemap</li>
                  </ul>
                  <ul>
                     <img src='https://www.futurismtechnologies.com/wp-content/themes/futurism/images/iso.png' alt=''/>
                  </ul> 
            </div>
          </div>
          <hr style={{color: "#989898"}}/>
          <div className='row'>
             <div className='col d-flex justify-content-center text-center align-items-center '>
               <p style={{marginTop:"1%",color:"#FFF",fontSize:"1em"}}>Copyright © 2023 Futurism Technologies, Inc. | All Rights Reserved.</p>
             </div>
          </div>
        </div>
      </footer>
      <BackToTopButton />
    </>
  )
}


export default App
