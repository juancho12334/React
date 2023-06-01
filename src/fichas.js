import React from 'react';

// export function FichasGrandes() {
//   return (
//     <section style={{backgroundColor:"white",width:"620px", height:"258px",borderRadius:"10px",marginTop:"20px"}}>
//       <img src="/images/FG.png" alt="aimage" style={{marginLeft:"30px", marginTop:"13px"}}/>
//       <span style={{marginTop:"-190px"}}>Sueter Básico Negro</span>
//       <img src="/images/Star.png" alt="aimage" style={{marginBottom:"160px", marginLeft:"30px"}} />
//       <img src="/images/Corazon.png" alt="aimage" style={{marginBottom:"12px", marginLeft:"-100px"}} />
//       <span style={{marginBottom:"90px"}}>( 200+ Reviews )</span>
//       <span style={{marginBottom:"90px"}}>Sueter básico ideal para combinar con todas tus prendas</span>
//     </section>
//         );
// }

export function FichasGrandes() {
    return (
      <section style={{backgroundColor:"white",width:"620px", height:"258px",borderRadius:"10px",marginTop:"20px"}}>
     <span style={{marginTop:"-180px", fontSize:"21px", marginLeft:"238px"}}>Sueter Básico Negro</span>
     <span style={{display:"block", marginLeft:"315px", fontSize:"15px"}}>( 200+ Reviews )</span>
     <span style={{marginLeft:"237px", marginTop:"10px", display:"flex"}}>Sueter básico ideal para combinar con todas</span>
     <span style={{marginLeft:"237px", marginTop:"30px"}}>tus prendas</span>
     <span style={{display:"block",color:"pink", marginLeft:"237px", marginTop:"20px"}}>Price $ 450.55</span>
     <img src="/images/FG.png" alt="aimage" style={{display:"block",marginLeft:"30px", marginTop:"-120px"}}/>
     <img src="/images/Star.png" alt="aimage" style={{display:"flex", marginLeft:"235px",marginTop:"-220px", width:"73px"}} />
     <img src="/images/Corazon.png" alt="aimage" style={{display:"flex",marginLeft:"225px",marginTop:"140px"}} />
     <button style={{display:"flex",marginLeft:"320px", marginTop:"-35px", borderRadius:"7px", borderColor:"rgba(255, 193, 211, 1)",height:"38px",width:"107px", fontSize:"18px", paddingTop:"3px", backgroundColor:"white"}}>add to cart</button>
     <button style={{display:"flex", marginLeft:"450px",marginTop:"-38px", backgroundColor:"pink", borderRadius:"7px",height:"38px",width:"107px",fontSize:"18px", paddingLeft:"17px", paddingTop:"5px", borderColor:"pink"}}>Buy Now</button>
        
      </section>
          );
  }



export function Card()
{
    return(<section style={{backgroundColor:"white", width:"210px", height:"254px", marginTop:"120px", marginLeft:"230px", borderRadius:"20px"}}>
        <img src="/images/tarjetas.png" alt="ejemplotarjeta" style={{marginLeft:"5px", marginTop:"14px"}}/>
        <span style={{fontSize:"24px", marginBottom:"70px", marginLeft:"15px"}}>Ropa carnavalera</span>
        <span style={{color:"pink", display:"block", marginLeft:"16px", fontSize:"23px"}}>Precio $33.38</span>
        <img src="/images/onestar.png" alt="star" style={{marginLeft:"15px"}}/>
        <span style={{color:"gray", fontSize:"20px", marginLeft:"10px"}}>4.9</span>
        <img src="/images/iconoplus.png" alt="plus" style={{marginLeft:"165px",marginTop:"-15px"}}/>
        </section>)
    
}
