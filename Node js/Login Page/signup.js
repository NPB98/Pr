var na=document.getElementById('name');
  var email=document.getElementById('email');
  var password=document.getElementById('password');
  document.addEventListener("submit",signup);
  
  function signup(e){
          e.preventDefault();
      const signUpDetails = {
          name: na.value,
          email:email.value,
          password:password.value
      }
      const response=axios.post("http://localhost:4000/user/signup",signUpDetails);
      if (response.status=== 201){
          console.log('Added');
      }
      else{
          document.body.innerHTML+="<br><div class='container'><h6>Something Went Wrong</h6></div>";
      }
  }