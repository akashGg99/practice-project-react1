import { useState } from "react"
import Table from "./Table";



function Form() {
    console.log("form");

    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")
    const [input4, setInput4] = useState("")

    const [var1, setVar1] = useState("")
    const [var2, setVar2] = useState("")
    const [var3, setVar3] = useState("")
    const [var4, setVar4] = useState("")
 

    const handleChange1=() =>setInput1(event.target.value)
    const handleClick1=(e)=>setVar1(input1)

    const handleChange2=() =>setInput2(event.target.value)
    const handleClick2=(e)=>setVar2(input2)

    const handleChange3=() =>setInput3(event.target.value)
    const handleClick3=(e)=>setVar3(input3)

    const handleChange4=() =>setInput4(event.target.value)
    const handleClick4=(e)=>setVar4(input4)



    return (
        <div>
            <div>
                <h1>Form Component</h1>
                <input id="idfirstname" type="text" placeholder="First name" onChange={handleChange1}></input>
                <button onClick={handleClick1}>Button 1</button>
                <br />
                <input id="lastname" type="text" placeholder="Last name" onChange={handleChange2}></input>
                <button onClick={handleClick2}>Button 2</button>
                <br />
                <input id="mobileNumber" type="text" placeholder="Mobile No." onChange={handleChange3}></input>
                <button onClick={handleClick3}>Button 3</button>
                <br />
                <input id="address" type="text" placeholder="Address"  onChange={handleChange4}></input>
                <button onClick={handleClick4}>Button 4</button>
            </div>

          <Table data={[var1,var2,var3,var4]} />                                                                                                                          

        </div>


    )
}

export default Form