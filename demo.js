let data = [
  {
    id: 1,
    title: "umer",
  },
  {
    id: 2,
    title: "umer",
  },
  {
    id: 3,
    title: "umer",
  },
];
// data.splice(0,2)
// data = data.filter((value)=>{
//     return value.id !== 3
// })

data=data.map((value)=>{
    if(value.id===1){
        return{...value,title:"how are u doing"}
    }
    return value
})


console.log(data);
