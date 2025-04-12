import React from 'react'

const MeomolearnC = React.memo(function({name}){
console.log("child renderd")
return <h2>Hello, {name}</h2>
});
export default MeomolearnC
