
import { React, useState} from 'react'
import Label from './Label'
import Input from './Input'
import {BiHome} from 'react-icons/bi'


const DownBar = () => {
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

  return (
    <>
        <div className='DownBar'>
            <div className='DownBars'>
                <form method='post'>
                <ul className='DownBar-Items'>
                    <li>
                        <Label 
                        name="Property Type"
                        className="label" />

                        <select name='type'
                        onChange={e => setType(e.target.value)}
                         value={type} className='Input1' style={{position:'absolute',marginLeft:'-170px'}}>
                        <option>All</option>
                        <option>Single</option>
                        <option>Double</option>
                        <option>Self</option>
                        <option>Apartment</option>
                        </select>

                    </li>
                    <li>
                        <Label 
                        name="Location"
                        className="label1" />
                        <Input 
                        type="text"
                        onChange={e => setLocation(e.target.value)}
                        value={location}
                        name="location"
                        className="Input2"
                        placeholder="Any"
                        icon={<BiHome />}
                        />

                    </li>
                    <li>
                        <Label 
                        name="Prince Range"
                        className="label" />
                        <select name="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                       className='Input1' style={{position:'absolute',marginLeft:'-170px'}}>
                            <option disabled>Choose Price</option>
                        <option>50000Tshs - 100000Tshs </option>
                        <option>50000Tshs - 100000Tshs </option>
                        <option>50000Tshs - 100000Tshs </option>
                        <option>50000Tshs - 100000Tshs </option>
                        <option>50000Tshs - 100000Tshs </option>
                        </select>

                    </li>
              
                </ul>
                </form>
            </div>
        </div>
    </>
  )
}

export default DownBar