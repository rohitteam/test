import React from 'react';
import Closen from '../images/close.svg';
import Cake from '../images/cake-rounded.png';
import TimeFramData from '../components/TimeFramData.jsx';
import TimeframeTab from '../components/TimeframTab';
import TierData from '../components/TierData.jsx';
import TierTab from '../components/TierTab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';




export default function Test1(){
    return(
        <div>
            <div className='container'>
                <div className="calcontainer">
                    <div className="headtitle">
                        <h1>ROI Calculator </h1>
                        <button><img src={Closen} alt='close' /></button>
                    </div>
                    <div className="caketoggle">
                        <img src={Cake} alt="" />
                        <span>CAKE</span>
                        <label class="switch">
                            <input type="checkbox"/>
                                  <span class="slider round"></span>
                            </label>
                        <span>USD</span>
                    </div>
                    <input className='cakeinput' type="text" placeholder="0.000 USD"/>
                    <div className="amounttag">
                        <button>$1000</button>
                        <button>$100</button>
                        <p>~ CAKE 0.000</p>
                    </div>
                    <div className="timeframe">
                        <p>Timeframe</p>
                        <div>
                            {TimeFramData.map((curElem) =>{
                                const {id} =curElem;
                                return <TimeframeTab key={id} {...curElem}/>
                            })}
                        </div>
                    </div>
                    <div className="apytab">
                        <div className="apytoggle">
                            <h3>Enable Accelerated APY</h3>
                            <label class="switch">
                            <input type="checkbox"/>
                                  <span class="slider round"></span>
                            </label>
                        </div>
                        <h4>Select Tier</h4>
                        <div>
                            {TierData.map((tierElem) => {
                                const {id} =tierElem;
                                return <TierTab key={id} {...tierElem}/>
                            })}
                        </div>
                        <p>ROI at Current Rates</p>
                        <input className='cakeinput' type="text" placeholder="0.000 USD"/>
                        <p className='apyp'>~ 0.000 CAKE + 0.000000 DON</p>
                    </div>
                    <div className="accordian">
                        <h4>Hide Details <KeyboardArrowUpIcon/></h4>
                        <div className="accordian-apy">
                            <span>APY</span>
                            <span>9.0 %</span>
                        </div>
                        <ul>
                            <li>Calculated based on current rates</li>
                            <li>All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}