import React, { Component } from 'react';

export default class Footer extends Component {
    render (){
        return (
            <footer class="Footer"> 
   <div class="container-fluid footer-text text-white"> 
    <div class="row"> 
     <div class="col-xs-12 col-md-3 align-self-center mb-3"> 
      <a><img class="navbar-logo-inner" src="/apps/myuc/clientlibs/theme-myuc/images/logos/uoc.svg" alt="University of Canberra Logo"></img></a> 
     </div> 
     <div class="col-sm-12 col-xl-3 align-self-center footer-icons"> 
      <ul class="list-inline"> 
       <li class="mr-3"> <a class="footer-icon" href="https://www.facebook.com/UniversityOfCanberra/" target="_blank" title="Facebook"><i class="mdi mdi-facebook"></i> </a> </li> 
       <li class="mr-3"> <a class="footer-icon" href="https://twitter.com/UniCanberra" target="_blank" title="Twitter"><i class="mdi mdi-twitter"></i> </a> </li> 
       <li class="mr-3"> <a class="footer-icon" href="https://www.youtube.com/user/uniofcanberra" target="_blank" title="YouTube"><i class="mdi mdi-youtube-play"></i> </a> </li> 
       <li class="mr-3"> <a class="footer-icon" href="https://www.instagram.com/unicanberra" target="_blank" title="Instagram"><i class="mdi mdi-instagram"></i> </a> </li> 
      </ul> 
     </div> 
    </div> 
    <div class="row mt-4"> 
     <div class="col-12 align-self-center">
       University of Canberra, ACT 2601 Australia, Switchboard +61 2 6201 5111, ©2017 University of Canberra. 
     </div> 
    </div> 
    <div class="row mt-2"> 
     <div class="col-12 align-self-center">
       CRICOS number: University of Canberra / University of Canberra College #00212K. 
     </div> 
    </div> 
    <div class="row mt-2"> 
     <div class="col-12 align-self-center">
       The University of Canberra is located on Ngunnawal Country. 
     </div> 
    </div> 
    <div class="row mt-4" style="display: none"> 
     <div class="col-md-12"> 
      <div class="card"> 
       <div class="card-body"> 
        <h4 class="card-title">Environment Information</h4> 
        <h6 class="card-subtitle"><code>This block provides environment information and is visible only in non-prod environments.</code></h6> 
        {/* <!-- Nav tabs -->  */}
        <ul class="nav nav-tabs customtab" role="tablist"> 
         <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#build" role="tab"><span class="hidden-sm-up"><i class="ti-home"></i></span> <span class="hidden-xs-down">Build</span></a> </li> 
         <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#headers" role="tab"><span class="hidden-sm-up"><i class="ti-user"></i></span> <span class="hidden-xs-down">Headers</span></a> </li> 
        </ul> 
      {/* Tab Panes */}
        <div class="tab-content" style="color: #000 !important;"> 
         <div class="tab-pane active" id="build" role="tabpanel"> 
          <div class="p-2"> 
           <ol> 
            <li>Instance ID: P-P-02</li> 
            <li>Version: 9.1.35</li> 
            <li>Published On: Thu Sep 23 22:25:26 AEST 2021</li> 
           </ol> 
          </div> 
         </div> 
         <div class="tab-pane" id="headers" role="tabpanel"> 
          <div class="p-2"> 
          </div> 
         </div> 
        </div> 
       </div> 
      </div> 
     </div> 
    </div> 
   </div> 
  </footer>
        )
    }
}