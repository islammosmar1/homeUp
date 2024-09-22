import React from 'react'
import Heading from '../../header/Heading'
import { team } from '../../data/Data'
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className="container">
            <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'></Heading>
            <div className="content mtop grid3 ">
                {team.map((val,index)=>{
                    return(
                   
                    <div className="box" key={index}>
                        <button className='btn3'>{val.list} Listing</button>
                        <div className="details">
                            <div className="img">
                                <img src={val.cover} alt="" />
                                <i className='fa fa-circle-check'></i>
                            </div>
                            <i className='fa fa-location-dot'></i>
                            <label htmlFor="">{val.address}</label>
                            <h4>{val.name}</h4>

                            <ul>
                                {val.icon.map((icon,index)=>(
                                    <li key={index}>{icon}</li>
                ))}
                            </ul>
<div className="button flex">
    <button><i className='fa fa-envelope'></i> Massage</button>
    <button className='btn4'><i className='fa fa-phone-alt'></i> </button>

</div>

                        </div>
                        </div> 
                    )
                })}
            </div>
        </div>

      </section>
    </>
  )
}

export default Team
