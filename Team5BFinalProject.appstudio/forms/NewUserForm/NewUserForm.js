
//form to create new user 
  let pw ="Bluejay1"
  let username1 = net_id.value
  let password1 = password.value
  let first_name1 = first_name.value
  let last_name1 = last_name.value
btnCreateUser.onclick=function(){
  query = "INSERT INTO user (net_id, password, first_name, last_name) VALUES ('" + username1 + "', '" + password1 + "', '" + first_name1 + "', '" + last_name1 + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)

  lblAdded.value = `You have sucessfully been added, please log in!`
 
if (req.status == 200) { 
    results = JSON.parse(req.responseText)
} 
else 
    // transit error
    console.log(`Error: ${req.status}`);

btnGoHome.onclick=function(){
  ChangeForm(HomePage)
}

