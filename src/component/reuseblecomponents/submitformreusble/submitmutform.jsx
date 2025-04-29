import React from 'react';
import { Link } from 'react-router-dom'; // Don't forget to import Link if you're using it

import './submit.css';
import Button from '../../reusebleelement/button/Button';
import Input from '../../reusebleelement/input/Input';
import Label from '../../reusebleelement/label/Lebel';


export default function Submitmutform({
  onSubmit,
  fields,
  title,
  btntext,
  ptext,
  linkbtn,
  linkpath
  
}) {
  return (
    <div className='formcontainer'>
    <form onSubmit={onSubmit} className="submit-form">
      <div className="form-header">
        <h3>{title}</h3>
      </div>
    
      <div className="form-fields">

        {fields.map((item)=>
        <div className="form-field" key={item.placeholder}>
          <Label htmlFor={item.name} text={item.label} />
          <Input
            className={item.className}
            type={item.type}
            placeholder={item.placeholder}
            onChange={item.onChange}
          />
        </div>
      )}
       
      </div>
      <div className="form-submit">
        <Button type={'submit'} color={'green'} text={btntext} className="submit-btn" />
      </div>
      <div className="form-footer">
        <p>
          {ptext} <Link to={linkpath} className="login-link">{linkbtn}</Link>
        </p>
      </div>
     
    </form>
    </div>
  );
}
