import './Details.css'
import { toTwoDecimaNumbers } from '../../utils/Formatter.js';

export default function Details({ nutrients }) {
    return (
        <div className="detail-container">
            <div className="row">
                <div>
                    <p> {nutrients.CHOCDF.label}: {toTwoDecimaNumbers(nutrients.CHOCDF.quantity)} {nutrients.CHOCDF.unit}</p>
                    <p> {nutrients.PROCNT.label}: {toTwoDecimaNumbers(nutrients.PROCNT.quantity)} {nutrients.PROCNT.unit}</p>
                    <p> {nutrients.NA.label}: {toTwoDecimaNumbers(nutrients.NA.quantity)} {nutrients.NA.unit} </p>
                </div>
                <div>
                    <p> {nutrients.FAT.label}: {toTwoDecimaNumbers(nutrients.FAT.quantity)} {nutrients.FAT.unit}</p>
                    <p> {nutrients.FASAT.label}: {toTwoDecimaNumbers(nutrients.FASAT.quantity)} {nutrients.FASAT.unit}</p>
                    <p> {nutrients.FATRN.label}: {toTwoDecimaNumbers(nutrients.FATRN.quantity)} {nutrients.FATRN.unit}</p>
                </div>
            </div>
        </div>


    )
}
