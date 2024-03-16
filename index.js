var t1=document.querySelector(".t1")
var t2=document.querySelector(".t2")
var t3=document.querySelector(".t3")
var btn1=document.querySelector(".btn1")
var btn2=document.querySelector(".btn2")
var data=document.querySelector(".data")
function add()
{
    this.name=t1.value
    this.phone=t2.value
    this.email=t3.value
}
 var ob=[]
 btn1.addEventListener("click",function()
 {
    ob.push(new add())
 })

 function display()
 {
    var t=ob.map((item,index)=>`<tr>
    <td >${item.name}</td>
    <td>${item.phone}</td>
    <td>${item.email}</td>
    <td onclick="disp(${index})"><ion-icon name="trash-outline"></ion-icon></td>
    </tr>`).join('')
    data.innerHTML=t
 }
 btn2.addEventListener("click",function(){
    display()
 
 })

 function disp(index)
 {
  var x=confirm("Are you sure? you delete this file")
  if(x)
  {
    ob.splice(index,1)
    t1.value=([])
    t2.value=([])
    t3.value=([])
    display()
  }
 }