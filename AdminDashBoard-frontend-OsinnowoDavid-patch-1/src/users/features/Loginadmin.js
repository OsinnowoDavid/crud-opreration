import classes from './assests/css/admin.css'
 function  Adminloginform () {
    return(
    <form action="">
      <h1 className={classes.head}>Login Form</h1>
      {/* <div className={classes.formcontainer}> */}
      <hr/>
      <div className={classes.formcontainer}>
        <label for="uname"><strong>Username</strong></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>

        <label for="psw" className={classes.psw}><strong>Password</strong></label>
        <input className={classes.input} type="password" placeholder="Enter Password" name="psw" required/>
      </div>

      <button type="submit" className={classes.button}>Login</button>
      <div className={classes.container } >
        <label >
        <input className={classes.input} type="checkbox"  checked="checked" name="remember"/> Remember me
        </label>
        <span class="psw" className={classes.psw}><a href="/"> Forgot password?</a></span>
      </div>
      {/* </div> */}
    </form>

  


    )

   
 
}

export default Adminloginform ;