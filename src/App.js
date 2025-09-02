import React, { useState } from "react";
import './App.css';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { SelectButton } from 'primereact/selectbutton';

function App() {

  const options = ['Off', 'On'];
  const [value, setValue] = useState(options[0]);

  return (
    <div className="card flex align-items-center justify-content-center">
      <div className="flex flex-column gap-2 mr-2">
        <label htmlFor="username">Username</label>
        <InputText id="username" aria-describedby="username-help" />
        <small id="username-help">
            Enter your username to reset your password...
        </small>
      </div>
      <Button className="mr-2" label="Login" />
      <SelectButton className="mr-2" value={value} onChange={(e) => setValue(e.value)} options={options} />
    </div>
  );
}

export default App;
