<template>
<div class="sidebar">
  <ul style="list-style-type:none;">
    <li><a  href="#home">Registrations</a></li>
    <li><a href="#news">Contestants</a></li>
    <li><a href="#contact">Interviews</a></li>
    <li><a href="#about">Manage Rounds</a></li>
  </ul>
<div>
<div class="progress">
  <span class="progress-bar" style="width: 75%"></span>
</div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar {
  margin: 0;
  padding: 0;
  width: 260px;
  background-color: #ffffff;
  position: fixed;
  height: 100%;
  overflow: auto;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.4);
 margin-top: 70px;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  float: left;
  margin-left: 20px;
}
 
 .sidebar li{
      margin-bottom: 10px;
 }
 
/* .sidebar a.active {
  background-color: #04AA6D;
  color: white;
} */

 .sidebar a:hover:not(.active)  {
  background-color: #ffffff;
  /* color: white; */
  } 


.sidebar .li a:hover{
    width: 100%;
 background-color: #dbd6d0;
}
@media screen and (max-width: 700px) {
  .sidebar {
    width: 300px;
    height: auto;
    position: relative;
    margin-left: 30px;

  }

  .progress{
    margin-top: -50px;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

.progress{
  width: 100%;
  max-width: 200px;
  height: 6px;
  background: #e1e4e8;
  border-radius: 3px;
  overflow: hidden;
  margin-left: 10px;
  margin-top: 300px;}
  
  .progress-bar{
    display: block;
    height: 100%;
    background: linear-gradient(90deg,#ffd33d,#ea4aaa 17%,#b34bff 34%,#01feff 51%,#ffd33d 68%,#ea4aaa 85%,#b34bff);
    background-size: 300% 100%;
    animation: progress-animation 2s linear infinite;
  }
@keyframes progress-animation{
  0%{
    background-position: 100%}
  100%{
    background-position: 0;}}
</style>