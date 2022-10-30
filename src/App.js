import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                
import "primeicons/primeicons.css";
import { Avatar } from "primereact/avatar";

import "primeflex/primeflex.css";
import { Button } from "primereact/button";




function App() {
  return (
    <div className="p-m-4" style={{backgroundColor:"#f0f0f0"}}>
                  <div className="p-d-flex p-jc-center p-ai-center">
                        <div>
                          <Avatar style={{marginTop:"70px"}} image={require("./img/GEE.jpg")} alt='splash' id="profile_img"  size="xlarge" shape="circle"
                          className="p-overlay-badge">
                             
                          </Avatar>
                        </div>

                          <div style={{marginTop:"0%", paddingTop:"0%"}}>
                              <i style={{marginLeft:"2300%", marginTop:"0%"}} className="pi  pi-arrow-circle-right p-px-8"></i>
                          </div>
                          
                    </div>

                    <div className="p-d-flex p-jc-center" style={{display:"flex", alignItems:"center", flexDirection:"column" }}>
                          <h3 style={{marginTop:"0", paddingTop:"0"}}>Lotanna Nnamani</h3>
                          <h6 style={{marginTop:"0", paddingTop:"0"}}>FRONTEND WEB DEV -- REACTJS AND DJANGO. www.github.com/Lotanna1989</h6>
                          
                    </div>

                    <div className="p-d-flex p-jc-center">
                        <div className="p-d-flex p-flex-column " style={{width:"90%"}}>
                       
                              <Button className="p-px-4 p-py-8 p-jc-center p-button-secondary" style={{marginBottom: "5px", width:"100%", backgroundColor:"darkgrey", border:"none"}}>
                                    <i className="pi pi-twitter p-px-8"></i>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration:"none"}} >
                                      <span className="p-px-4" id="Twitter"> Twitter Link @PhilipNnamani </span>
                                     </a> 
                              </Button>
                            

                           
                              <Button className="p-p-2  p-jc-center p-button-secondary"  style={{marginBottom: "5px", backgroundColor:"darkgrey", border:"none"}}>
                              <a href="https://background.zuri.team" target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration:"none"}} >
                                      <span className="p-px-2" id="btn__zuri"> Zuri Team </span>
                              </a>
                              </Button>
                            

                            
                              <Button className="p-p-2 p-jc-center p-button-secondary"  style={{marginBottom: "5px", backgroundColor:"darkgrey", border:"none"}}>
                              <a href="http://books.zuri.team" target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration:"none"}} >      
                                      <span className="p-px-2" id="books"> Zuri Books </span>
                                      </a>
                              </Button>
                              

                              
                              <Button className="p-p-2 p-jc-center p-button-secondary"  style={{marginBottom: "5px", backgroundColor:"darkgrey", border:"none"}}>
                                     <a href="https://github.com/Lotanna1989" target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration:"none"}} >
                                      <span className="p-px-2" id="book__python"> Python Books </span>
                                      </a>
                              </Button>
                              

                             
                              <Button className="p-p-2 p-jc-center p-button-secondary"  style={{marginBottom: "5px", backgroundColor:"darkgrey", border:"none"}}>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration:"none"}} > 
                                      <span className="p-px-2" id="pitch"> Background Checks for Coders </span>
                                      </a>
                              </Button>
                              


                              
                              <Button className="p-p-2 p-jc-center p-button-secondary"  style={{marginBottom: "5px", backgroundColor:"darkgrey", border:"none"}}>
                                   <a href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration:"none"}} >
                                      <span className="p-px-2" id="book__design"> Design Books </span>
                                    </a>
                              </Button>
                              

                             
                              <div className="p-p-2 p-d-flex p-jc-center p-ai-center">
                                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{  color: "black", textDecoration:"none"}} >
                                      
                                      <i className="pi pi-slack p-px-2"></i>
                                      <i  className=" pi   pi-github p-px-2"></i>
                                    </a>
                              </div>
                              
                          </div>
                    </div>

                    <div style={{alignItems:"center", display:"flex",flexWrap:"wrap", justifyContent:"space-between", flexDirection:"row", borderTop:"1px solid darkgrey"}}>
                              <div><img style={{width:"240px",height:"160px"}} src={require("./img/zuritraining2.jpg")}/></div>
                              <div><h5>HNG Internship9 Frontend Task</h5></div>
                              <div> <img style={{width:"280px",height:"120px"}} img src={require("./img/ing4good.jpg")}/></div>
                    
                    </div>
     </div>
   
  );
}

export default App;
