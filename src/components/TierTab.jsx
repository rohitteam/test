import React, {useState} from "react";

const TierTab =({id, tiers}) => {
    const [tshow, settShow] =useState(false);
    return(<>
        {id===1? <>
            <button onClick={() => settShow(!tshow)} className={!tshow? 'timebtn btnactive' : 'timebtn'}>{tiers}</button>
          </>:<>
          <button onClick={() => settShow(!tshow)} className={tshow? 'timebtn btnactive' : 'timebtn'}>{tiers}</button>
          </>}
</>
    );
};

export default TierTab;