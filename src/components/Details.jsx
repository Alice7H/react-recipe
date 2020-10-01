import React from 'react'
import './Details.css'

export default function Details({nutrients}) {
    // console.log(nutrients);

    return (
        <div className="detail-container">
            <div className="row">
                <div> 
                    <p> {nutrients.CHOCDF.label}: {nutrients.CHOCDF.quantity.toFixed(2)} {nutrients.CHOCDF.unit}</p>
                    <p> {nutrients.PROCNT.label}: {nutrients.PROCNT.quantity.toFixed(2)} {nutrients.PROCNT.unit}</p>
                    <p> {nutrients.NA.label}: {nutrients.NA.quantity.toFixed(2)} {nutrients.NA.unit} </p>
                </div>
                <div> 
                    <p> {nutrients.FAT.label}: {nutrients.FAT.quantity.toFixed(2)} {nutrients.FAT.unit}</p>
                    <p> {nutrients.FASAT.label}: {nutrients.FASAT.quantity.toFixed(2)} {nutrients.FASAT.unit}</p>
                    <p> {nutrients.FATRN.label}: {nutrients.FATRN.quantity.toFixed(2)} {nutrients.FATRN.unit}</p>
                </div>
            </div>
        </div>

        
    )
}
