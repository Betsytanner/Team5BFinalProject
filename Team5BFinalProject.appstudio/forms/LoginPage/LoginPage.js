/*
//select all of the net IDs from database 
    //put into an array 
    //if the user name enetered in array - get the index 
    //do the same with the passwords 
      //then check to see if passwords match 
let req = ""
let query = ""
let results = ""
let pw = "Bluejay1"
let allUsers = []


query = "SELECT `net_id` FROM `user`"
    // Below change from my netID to yours (twice: user and database)    
  
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)
   if (req.status == 200) { //transit worked.
   results = JSON.parse(req.responseText)
            // names now in results array - load names into the dropdown
          allUsers = results
          console.log(allUsers)
            
    } else {        
        NSB.MsgBox(`Error: ${req.status}`)
    }
allPasswords = [] 

query= "SELECT `password` FROM `user`"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)

if (req.status == 200) { //transit worked.
    results = JSON.parse(req.responseText)
            // names now in results array - load names into the dropdown
    allPasswords = results
    console.log(allPasswords)
            
    } else {        
        NSB.MsgBox(`Error: ${req.status}`)
    }

userEnter.onclick=function(){

let newpassword = allpassword.includes(password)
let username = lblusername.value
let password = lblpassword.value 
    if newpassword = allUsers.includes(username)
    let newIndex = allUsers.findIndex(username)
  if allpassword.includes(password)
    let passIndex = allPasswords.findIndex(password)
    

}
} else {        
        NSB.MsgBox(`Error: ${req.status}`)
    } 
*/

btnHome1.onclick=function(){
    ChangeForm(HomePage)
}

btnNewUser.onclick=function(){
  ChangeForm(NewUserForm)
}
