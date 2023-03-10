function Check(pic){
    let value=document.getElementById('imgBox');
    value.src=pic;
    value.name=pic;
    document.getElementById("imgcontainer").style.display="block";
    console.log(value);
}
let remove=()=>{
    document.getElementById("imgcontainer").style.display="none";
}