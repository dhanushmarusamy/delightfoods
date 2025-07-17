import React from 'react'
import { ToastContainer,toast } from 'react-toastify'
const Upload = () => {
   const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;
        const name=form.name.value;
        const img=form.img.value;
        const quanity=form.quanity.value;
        
                    // const foods={name,img,quanity};

        if(name==="" || img==="" || quanity==="")
        {
            toast.warn('fill Required ');
        }else{
            const foods={name,img,quanity};
            // console.log(foods,"foods in object ");
            
            fetch('http://localhost:6900/foods',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(foods),

            })
            .then((res)=>res.json())
            .then((data)=>{
                toast.success('added successfully');
                form.reset();
                window.location.href="/update"
            }
            )

        }

        }
  return (
    <div>
        <ToastContainer/>
              <div class="card upload6">
         <div class="card-body upload5">
        <form onSubmit={handleSubmit} >
            <h2>UPLOAD</h2>
            <div class="upload0">
                <label value="name"><b>name</b></label>
                <input type="text" name="name" className='ms-3'/>
            </div><br></br>
            <div class="upload1">
                <label value="img"><b>IMAGE</b></label>
                <input type='img' name="img" className='ms-3'/>
                </div>
                <br></br>
                <div class="upload2">
                <label value="quantity"><b>Quanity</b></label>
                <input type='numbers' name="quanity" className='ms-3'/>
            </div>
<br></br>
            <div class="upload7">
                <button type="submit" class="btn btn-primary">upload</button>
                
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Upload