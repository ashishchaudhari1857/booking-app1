var  form=document.getElementById('myform');
form.addEventListener('submit' ,add);
function add(e){
    e.preventDefault();
    var cname = document.getElementById('name').value;
    var Ccontact = document.getElementById('contact').value;
    var cdate = document.getElementById('date').value;
  // console.log(cname ,Ccontact,cdate);
   
  const obj={
  name:cname,
contact:Ccontact,
date:cdate
};
// localStorage.setItem(obj.name,JSON.stringify(obj));
  axios
.get('https://crudcrud.com/api/796d475c1adc4a25af8cc5b6c01b25b2/appointmentData')
.then(res=>{
  console.log(res);
  for(let i=0 ;i<res.data.length;i++){
  showonscreen(res.data[i]);
 
  }
})
.catch(err=>{console.log(err)});
// showonscreen(obj);
  
}
function showonscreen(obj){
   var parent=document.getElementById('demo');

   var btn =document.createElement('button');
   var ebtn=document.createElement('button');
   
   btn.appendChild(document.createTextNode("delete"));
   ebtn.appendChild(document.createTextNode("edit"));
   var  li =document.createElement('li');
   var  text=document.createTextNode(`${obj._id} ${obj.name} ${obj.contact} ${obj.date}`);
   li.appendChild(text);
   li.appendChild(btn);
   li.appendChild(ebtn);
   parent.appendChild(li);
   btn.addEventListener('click' ,function(){ del()});
   ebtn.addEventListener('click' ,function() {edit()});
   function del(e){ 
    usreid=`${obj._id}`;
     console.log( usreid);
      // // localStorage.removeItem(obj.name);

      axios
      .delete(`https://crudcrud.com/api/796d475c1adc4a25af8cc5b6c01b25b2/appointmentData/${usreid}`)
      .then(res=>{
      parent.removeChild(li);
        })
        .catch(err=>console.log(err));

   }
   function edit(e){
      // localStorage.removeItem(obj.name);
      // console.log()
      parent.removeChild(li);
      document.getElementById('name').value=obj.name
     document.getElementById('contact').value=obj.contact;
     document.getElementById('date').value=obj.date;
     form.addEventListener('submit' ,function(){
      var cname = document.getElementById('name').value;
      var Ccontact = document.getElementById('contact').value;
      var cdate = document.getElementById('date').value;
      axios.put('https://crudcrud.com/api/796d475c1adc4a25af8cc5b6c01b25b2/appointmentData/' + obj._id,{name: cname,
      contact: Ccontact,
      date: cdate}) 
      .then(res=>showonscreen(res.data))
      .catch(err=> console.log(err))

     })
       
    
   }

   
}
  var  passCheck= document.getElementById("cpass");
  var  tk=document.getElementById("togelkey");

  function Show_Hide(){
     var typecheck = passCheck.getAttribute("type");
      if(typecheck==='password'){
        passCheck.setAttribute("type" ,"text");
        togelkey.innerText="Hide Pass";
      }else{
         passCheck.setAttribute("type" ,"password");
         togelkey.innerText="Show Pass";
      }
  
}
  var mainpass=document.getElementById('pass');
function check(data){
     var errortxt=document.getElementById("alert");
  if(data.value.length > 0 ){
          if(data.value != mainpass.value){
            errortxt.innerText="Password Doesn't Match";
          }else{
            errortxt.innerText= "";
          }

  }else{

   errortxt.innerText="Please Enter Confirm Password";
  }

         
}
 window.addEventListener('keyup' , event=>{
 var  iscapon =event.getModifierState('CapsLock')
  if(iscapon){
   document.getElementById("ale").innerText=" CapsLock is  ON"
  }else{
   document.getElementById("ale").innerText=""
  }

 })
