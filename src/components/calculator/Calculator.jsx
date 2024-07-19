import { useState } from "react"
import "./Calculator.css"

export default function Calculator() {
  const [value,setValue]=useState("")

  const handleButtonClick = (e) => {
    setValue(value + e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      const result = new Function(`return ${value}`)();
      setValue(String(result));
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="Calculator">
      <form  className="Calculator__form" >

        <div className="Calculator__display">
        <input style={{background:value?"rgb(77, 98, 76)":"rgb(77, 78, 79)"}} value={value} type="text" />
        </div>

        <div className="Calculator__bt__container">

          <div className="Calculator__bt__container__line">
           <input onClick={handleClear} type="button" value="AC" />
           <input onClick={handleDelete} type="button" value="DE" />
           <input onClick={handleButtonClick} type="button" value="/" />
           <input onClick={handleButtonClick} type="button" value="." />
          </div>
          <div className="Calculator__bt__container__line">
           <input onClick={handleButtonClick} type="button" value="7" />
           <input onClick={handleButtonClick} type="button" value="8" />
           <input onClick={handleButtonClick} type="button" value="9" />
           <input onClick={handleButtonClick}  type="button" value="*" />
          </div>
          <div className="Calculator__bt__container__line">
           <input onClick={handleButtonClick} type="button" value="4" />
           <input onClick={handleButtonClick} type="button" value="5" />
           <input onClick={handleButtonClick} type="button" value="6" />
           <input onClick={handleButtonClick} type="button" value="+" />
          </div>
          <div className="Calculator__bt__container__line">
           <input onClick={handleButtonClick} type="button" value="1" />
           <input onClick={handleButtonClick} type="button" value="2" />
           <input onClick={handleButtonClick}  type="button" value="3" />
           <input onClick={handleButtonClick} type="button" value="-" />
          </div>
          <div className="Calculator__bt__container__line">
           <input onClick={handleButtonClick} type="button" value="00" />
           <input onClick={handleButtonClick} type="button" value="0" />
           <input onClick={handleEquals} type="button" value="=" className="equal" />
           
          </div>
         

        </div>

      </form>
    </div>
  )
}
