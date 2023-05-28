const { json } = require('express');

let path='19tr1a05a6';
console.log(path)
let url;
url='https://results-restapi.up.railway.app/all-r18/'+path;
console.log("fetch")
 
fetch(url).then(res=>res.json()).then(json=>{
    // console.log(json['data'])
     
    // document.getElementById('p').innerHTML="hello"
    // console.log(json['data']['details'])
    var det=json['data']['details']
    var ress=json['data']['results']
    var cgpa=json['data']['overall_gpa']
    // console.log(cgpa)
    let n=ress.length
    for(let i=0;i<n;i++){
        console.log(fun(ress[i]))
    }
    // console.log(json['data']['results'])
    // console.log(json['data']['overall_gpa'])
    // Object.keys(json['data']).forEach(e=>e.forEach((ele,k)=>{
    //     console.log(ele+" "+k)
    // }))
}
) 
function fun(mp){
    Object.keys(mp).forEach((val,k)=>{
        console.log(val)
    })
    // mp.forEach((values,keys)=>{
    //     console.log("values: ",values+
    //                    ", keys: ",keys)
    //   })
}