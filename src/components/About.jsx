import React from "react";

export default function About() {
  const styles = {
    services:{
      border:"2px solid #2c2c2c",
      margin:"20px",
      padding:"25px",
      background:"ivory",
      borderRadius:20,
      textAlign:"center",
    },
    h1:{
      color:"purple",
      fontSize:80
    }
  }
  return (
    <>
      <h1 style={{...styles.h1,...styles.services}}>Hello Zara</h1>
    </>
  );
}
