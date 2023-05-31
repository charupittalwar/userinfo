import { useState } from "react";

const UserManagement = () => {

    type cmptype = "arc"| "vigo" ;
    
    type usertype ={
    name :string ,
    age:number,
    cmp : cmptype }


    const [name , setName ] = useState <string>(" ");

    const [age , setAge] = useState <number> (0);

    const [cmp , setCmp] = useState <cmptype> ('arc');
        const userarr  :{


        name :string ,
        age:number,
        cmp : cmptype


    }[]
    =
    [{

       name :'virat',
       age:34,

       cmp : "arc"


    }]
    const [userData ,setUserData ] = useState <usertype[]>(userarr)
   const saveuserdata = ():void => {

      console.log (name,age,cmp);

      //userarr.push ({name ,age , cmp})

      //setUserData ([{name ,age , cmp}])

      const newarr:usertype[] = [...userData , {name,age , cmp}]

      setUserData(newarr);

    //  userData.push ({name,age,cmp})

      console.log ("userarr " , userarr);

    };

    const userarrdata = userData.map(user =>{

       return(
         
        <div>

        <p>name : {user.name }</p>

        <p>age: {user.age}</p>

        <p>cmp : {user.cmp}</p>
        </div>




       )



    })




return (
 
    <div>
       <input type = "text" name ="name" value = {name} onChange={ (e)=> setName (e.target.value)} /><br></br>
       <input type = "number" name ="age" value = {age} onChange={(e)=>setAge (parseInt(e.target.value))} /><br></br>
       <input type = "text" name ="cmp"  value = {cmp} onChange={(e)=> {
       const   newvalue :any = e.target.value ;

        setCmp (newvalue);

       }}></input><br></br>

       <button onClick = {saveuserdata}>save</button>

        <p>user management</p>

        {userarrdata}
    </div>


)



}

export default UserManagement ;