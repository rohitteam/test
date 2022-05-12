import React, {useState} from "react";

const TimeframeTab =({id, duration}) => {
    const [show, setShow] =useState(false);
    return(<>
 {id===1? <>
    <button onClick={() => setShow(!show)} className={!show? 'timebtn btnactive' : 'timebtn'}>{duration}</button>
  </>:<>
  <button onClick={() => setShow(!show)} className={show? 'timebtn btnactive' : 'timebtn'}>{duration}</button>
  </>}
  </>  );
};

export default TimeframeTab;