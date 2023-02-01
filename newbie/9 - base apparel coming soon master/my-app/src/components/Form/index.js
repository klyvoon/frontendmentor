import styled from "styled-components";

import iconError from "../../assets/icon-arrow.svg";
import erreur from "../../assets/icon-error.svg";


import { useState } from 'react';

function Form (props) {

    const [state, setState] = useState();
    const [name, setName] = useState();
    const [errors, setErrors] = useState({});

    const [validateb, setValidateb] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });

    const handleSubmit = (e) => {
        console.log("bobobobobo");
        e.preventDefault();
        console.log("click");
        if ( validate() ) {
            console.log("TRUE");
            setValidateb(true);      
        } else {
            console.log("FAUX");
            setValidateb(false);   
        }
    }
    function validate() {
        const newErrors = {};
        if (!formData.email) {
          newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid.";
          return setValidateb(false);
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      }
    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setFormData((prevState) => 
        ({ ...prevState, [name]: value }) )
    }

   
    return(
      <>
      <Wrap>
        
          <Wrapper onSubmit={e => {handleSubmit(e)}} noValidate>
              <InputEmail 
                type="email"
                id="email"
                name="email"
                value={formData.email} 
                onChange={handleChange}     
              />   
                {!validateb ? <Sam> <img src={erreur}/> </Sam> :  null}
              <IntputSubmit
                marginRight="64px"
                type="submit" 
                value=" ">
                  <img src={iconError} alt="submit email address"></img>  
              </IntputSubmit>
          </Wrapper>
            { !validateb ? <ProvideMail>Please provide a valid email</ProvideMail> : null}
        
        </Wrap>
    </>
    )
}

const Wrap = styled.div`
  margin-left: '32px';
  margin-right: '32px';
  @media ( min-width:1000px) {
    margin: unset;
    margin-left:10%;
  }
`;

const Sam = styled.span`
  width: 0;
  position: relative;
  left: -111px;
  top: 17px;
  @media (min-width: 1000px) {
        left: -100px;
        
  }  
`;
const ProvideMail = styled.p`
  margin-left: 57px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  margin-top: 0px;
  color: #F96464;
  @media (min-width: 1000px) {
        width: 50%;
        margin-top: 16px;
  }  
`;  
const Point = styled.img`
  position: relative;
  right: 89px;
  width: 30px;
  height: 30px;
`;
const Wrapper = styled.form`
  padding:1.2rem;
  display: flex;
  @media (min-width: 1000px) {
        width: 49%; 
        padding: unset; 
        margin: unset;
        padding: unset;
        margin-top: 40px;
        
  }  
`;
const InputEmail = styled.input`
  border-radius: 50px;
  border: 1px solid hsl(0, 36%, 70%);
  width: 100%;
  height: 56px;
  padding-left: 25px;
  color: hsl(0, 36%, 70%);
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 1em;
  outline: none;
  &:focus {
    border: 1px solid red;
  }
`;
const IntputSubmit = styled.button`
  position: absolute;
  right: 18px;
  cursor: pointer;
  width: 75px;
  height: 61px;
  border-radius: 50px;
  align-self: flex-end;
  border: 0;
  background-image: url('${iconError}');
  background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 10px 10px rgba(245, 176, 176, 0.5);
  @media (min-width: 1000px) {
        position:relative;
        right:63px;
        
  }  

`;

export default Form;