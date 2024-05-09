import React,{useContext,useState,useEffect} from "react";
import axios   from "axios";

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const baseURL="http://127.0.0.1:8000/";
    const [isLogedIn,setIsLogedIn]=useState(false)
    const [userName,setUserName]=useState("")
    const [uid,SetUid]=useState(-1)
    const [blogList,setBlogList]=useState([])
    const [conBlog,setConBlog]=useState({})
    const [adminBlog,setAdminBlog]=useState([])
    const [userblog,setUserBlog]=useState([])

    const registeUser=async(username,password)=>{
        fetch(baseURL+'appuser',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.hasOwnProperty("message")){
                alert(result.message);
            }else{
                alert("ADDED!!!")
            }
        },
        (error)=>{
            alert('Failed');
        })
    }

    const authUser=async(username,password)=>{
        fetch(baseURL+'appuser',{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.hasOwnProperty("message")){
                alert(result.message);
            }else{
                setIsLogedIn(true);
                setUserName(username);
                SetUid(result.uid)
            }
        },
        (error)=>{
            alert('Failed');
        })  
    }

    const getallblog= async()=>{
        fetch(baseURL+'blog/',{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.hasOwnProperty("message")){
                alert(result.message);
            }else{
                setBlogList(result);
            }
        },
        (error)=>{
            alert('Failed');
        })  
    }

    const getOneBlog=async(id)=>{
        fetch(baseURL+'blog/'+id,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.hasOwnProperty("message")){
                alert(result.message);
            }else{
                setConBlog(result);
            }
        },
        (error)=>{
            alert('Failed');
        })  
    }

    const addBlog=async(uid,title,text,btype)=>{
        fetch(baseURL+'blog/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                uid:uid,                         
                title:title,
                text:text,
                btype:btype
            })

        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.hasOwnProperty("message")){
                alert(result.message);
            }else{
                setBlogList(result)
            }
        },
        (error)=>{
            alert('Failed');
        })
    }

    const getUserBlog= async (uid)=>{
        fetch(baseURL+'update/'+id,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.hasOwnProperty("message")){
                alert(result.message);
            }else{
                setUserBlog(result)
            }
        },
        (error)=>{
            alert('Failed');
        }) 
    }

    const updateBlog=async(bid,title,text,btype)=>{
        fetch(baseURL+'update/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                bid:bid,                         
                title:title,
                text:text,
                btype:btype
            })

        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.hasOwnProperty("message")){
                alert(result.message);
            }else{
                alert("updated!!")
            }
        },
        (error)=>{
            alert('Failed');
        })
    }

    const delBlog=async(bid)=>{
        fetch(baseURL+'update/',{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                bid:bid
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.hasOwnProperty("message")){
                alert(result.message);
            }else{
                alert("Deleted!!!")
            }
        },
        (error)=>{
            alert('Failed');
        })
    }

    const adminChange=async(id,value)=>{
        fetch(baseURL+'change/'+id+'/'+value,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }

        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.hasOwnProperty("message")){
                alert(result.message);
            }else{
                alert(result);
            }
        },
        (error)=>{
            alert('Failed');
        })
    }

    const adminBlogList= async()=>{
        fetch(baseURL+'admin/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }

        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.hasOwnProperty("message")){
                alert(result.message);
            }else{
                setAdminBlog(result)
            }
        },
        (error)=>{
            alert('Failed');
        })
    }

    return <AppContext.Provider value={{isLogedIn,userName,uid,blogList,conBlog,adminBlog,userblog,setIsLogedIn,setUserName,SetUid,
        setBlogList,setConBlog,setAdminBlog,setUserBlog,registeUser,authUser,getallblog,getOneBlog,addBlog,getUserBlog,updateBlog,
        delBlog,adminBlogList,adminChange
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export{AppProvider,AppContext}

