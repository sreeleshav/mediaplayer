import React,{useEffect,useState} from 'react'
import VideoCard from './VideoCard'
import { getVideosApi } from '../services/allApi'


function Videos(result) {

  const[data,setData]=useState([])
  const [resp,setresp]=useState({})

  useEffect(()=>{
      getData()
  },[result,resp])

  const getData=async()=>{
    const result= await getVideosApi()
    console.log(result)
    if(result.status==200){
      setData(result.data)
    }
  }


  return (
    <>
       <div className='container-fluid border border-2  shadow p-1'>
        {
          data?.length>0 ?
          <div className='row p-2 justify-content-aruond'>
            {data?.map(item=>(
                     <VideoCard video={item} res={setresp} />
            ))}
          </div>
          :
          <h4 className='text-danger text-center'>No Videos Available!!</h4>
        }
       </div>
    </>
  )
}

export default Videos