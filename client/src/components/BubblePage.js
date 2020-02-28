import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [reRend, setReRend] = useState(false)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  console.log(reRend)

  useEffect(()=> {
    axiosWithAuth().get('/api/colors')
    .then(res => {
      setColorList(res.data)
      setReRend(false)
    })
    .catch(err => {
      console.log(err)
    })
  },[reRend])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setReRend={setReRend}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
