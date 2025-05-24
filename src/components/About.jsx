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
    },
    p:{
      fontSize:20,
      color:"#2c2c2c",
      margin:20,
      padding:25,
    }
  }
  return (
    <>
      <h1 style={{...styles.h1,...styles.services}}>Hello Zara</h1>
      <p style={styles.services}>this is react style testing</p>
    </>
  );
}
