import React, { useEffect, useState } from 'react'
import { getHistoryApi,deleteHistoryApi } from '../services/allApi'

function History() {


  const [historylist,setHistorylist]=useState([])
  const [resp,setresp]=useState({})

  useEffect(()=>{
    getData()
  },[resp])

  const getData=async()=>{
    const result=await getHistoryApi()
    if(result.status==200){
      setHistorylist(result.data)
      console.log(result.data)
    }
  }

  const deleteHis=async(id)=>{
    const result=await deleteHistoryApi(id)
    if(result.status == 200){
      setresp(result)
    }
  }

  return (
    <>
     <h2>Watch History</h2>
     {historylist?.length>0 ?
     <table className='table table-secondary table-bordered table-striped'>
      <thead>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Video URL</td>
          <td>Date and Time</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {historylist.map(item=>(
        <tr>
          <td>{item.vid}</td>
          <td>{item.title}</td>
          <td>{item.url}</td>
          <td>{item.date}</td>
          <td>
            <button className='btn' onClick={()=> {deleteHis(item.id)}}>
            <i className="fa-solid fa-trash" size="lg" style={{color: "#f20707",}} />
            </button>
          </td>
        </tr>
        ))
      }
      </tbody>
     </table>
     :
     <h3>No History</h3>
    }
    </>
  )
}

export default History