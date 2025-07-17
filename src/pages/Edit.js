import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
const Edit = () => {
  const{id}=useParams();

    const [productsItems,setproductsItems]=useState ({
    })

    useEffect(()=>{
     fetch(`http://localhost:6900/getbyid/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))

      },[])

    const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name= form.name.value;
    const img=form.img.value;
    const quanity=form.quanity.value;
    const update={name,quanity,img};
    console.log(update);

    fetch(`http://localhost:6900/allproductsnacks/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(update),
        })
        .then((res)=>res.json())
        .then((data)=>{
        toast.warn("successfully updated");
        window.location.href="/upload";
        })
    } 
  return (
    <div>
      <ToastContainer />
    <div class="card update6">
    <div class="card-body update5">
<form onSubmit={handleUpdate}>
       <h2>EDIT</h2>
       
       <div class="upload0">
                <label value="name"><b>name</b></label>
                <input type="text" name="name" className='ms-3' defaultValue={productsItems.name}/>
            </div><br></br>
            <div class="upload1">
                <label value="img"><b>IMAGE</b></label>
                <input type='img' name="img" className='ms-3'defaultValue={productsItems.img}/>
                </div>
                <br></br>
                <div class="upload2">
                <label value="quanity"><b>Quanity</b></label>
                <input type='numbers' name="quanity" className='ms-3'defaultValue={productsItems.quanity}/>
            </div>
<br></br>
 <section className='update9'>
            <div class="upload7">
                <button type="submit" class="btn btn-primary">Edit</button>
                
            </div>
    </section>
   </form>
   </div>
   </div>
    </div>
  )
}

export default Edit