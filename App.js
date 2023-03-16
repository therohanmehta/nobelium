import React from 'react'
import { ImageChanger } from './Components/imageChanger'
import { LoginRegistration } from './Components/loginRegistration'
import { TextFieldProblem} from './Components/textField'


export default function App() {
 
return (
  <>
<ImageChanger/>
<br /><hr /><br />
<TextFieldProblem/>
<br /><hr /><br />
<LoginRegistration/>
  </>
)
}