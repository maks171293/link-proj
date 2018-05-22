import styled from 'emotion/react'
import { Link } from 'react-router-dom'

//Images
import Framework from '../../assets/Framework.png'
import LinkButton from '../../assets/linkButton.png'

//Colors
const blueColor = '#0ba6bb'
const lightBlackColor = '#333333'
const greyColor = '#d4d4d4'

//JS
let body = document.getElementsByTagName('body')[0]
body.style.backgroundImage = `url(${Framework})`
body.style.backgroundRepeat= 'no-repeat';
body.style.backgroundAttachment = 'fixed';
body.style.backgroundSize = 'cover'; 


export const Body = styled.div`
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100vw;
`

export const Title = styled.h1`
  font-family: sans-serif;
  font-weight: 100;
  margin: 30px 30px 20px 30px;
`

const Github = styled.span`
  vertical-align: middle;
  padding: 6px 10px;
  border: 1px solid rgb(213, 213, 213);
  font-size: 14px;
  font-weight: 400;
  outline: none;
  font-family: sans-serif;
`

export const GithubButton = styled(Github)`
  border-radius: 3px 0 0 3px;
  background: rgb(248, 248, 248);
  &:hover {
    background: rgb(238, 238, 238);
  }
`

export const GithubCount = styled(Github)`
  margin-left: -1px;
  border-radius: 0 3px 3px 0;
  width: 100px;
`

export const GithubLink = styled.a`
  display: block;
  text-decoration: none;
  color: black;
`

export const Message = styled.h2`
  font-family: sans-serif;
  font-weight: 100;
  margin-top: 30vh;
`

export const Blue = styled.span`color: rgb(0, 128, 255);`

export const FormTitle = styled.h4`
  color: grey;
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
  color: #000;
  text-align: left;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 400;
`
export const FormDescr = styled.h4`
  color: grey;
  margin: 0;
  margin-bottom: 10px;
  margin-top: 30px;
  padding: 0;
  color: #000;
  text-align: left;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 400;
`


export const FormWrapper = styled.div`
  width: 540px;
  margin: auto;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
`

export const TextField = styled.input`
  display: block;
  border: 2px solid ${greyColor};
  width: ${props => props.center ? '297px' : '400px'};
  padding: 5px;
  outline: none;
  font-size: 17px;
  box-sizing: border-box;
  appearance: none;
  &:focus {
    border-color: rgb(0, 128, 255);
  }
`

export const TextLabel = styled.label`
  display: block;
  font-size: 16px;
  color: ${lightBlackColor};
  text-align: left;
  width: ${props => props.checkbox ? 'auto' : '100%'};
  float: left;
  margin-top: ${props => props.checkbox ? '25px' : '15px'}; 
  margin-bottom: ${props => props.checkbox ? '20px' : '5px'};
  font-family: 'sans-serif';
  font-family: sans-serif;
  font-weight: 400;
`

export const Submit = styled.input`
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: lighter;
  background: ${blueColor};
  outline: none;
  cursor: pointer;
  margin-top: 25px;
  padding: 10px 85px;
  border-radius: 6px;
`

export const SignInLinkedin = styled.input`
  background-image: url(${LinkButton});
  width: 200px;
  height: 40px;
  background-size: contain;
  outline: none;
  background-repeat: no-repeat;
  border: none;
  color: white;
  font-size: 14px;
  padding-left: 43px;
  padding-bottom: 1px;
  font-family: sans-serif;
  font-weight: 200;
  cursor: pointer;
  margin-top: 30px;
`

export const FooterLink = styled(Link)`
  position: fixed;
  left: 0;
  bottom: 15px;
  width: 100%;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 100;
  text-decoration: none;
  color: rgb(10, 10, 10);
  &:hover {
    color: rgb(0, 0, 0);
  }
`

export const CheckBox = styled.input`
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const HeaderWrapp = styled.div`
  width: 100%;
  height: 80px;
  top: 0px;
`