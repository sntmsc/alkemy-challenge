import {useState, useContext} from 'react' 
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Formik } from 'formik'
import useLocalStorage from '../../hooks/useLocalStorage'
import { ContextSaveToken } from '../../context/SaveToken'

const Login = () => {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token', '');
  const [errorApi, setErrorApi] = useState('')
  const {setSaveToken} = useContext(ContextSaveToken);


  const handleSubmitFormik = (values) =>{
    const loginFormData = new FormData();
    loginFormData.append("email", values.email)
    loginFormData.append("password", values.password)
   
      axios.post("http://challenge-react.alkemy.org/",loginFormData)
        .then(response => {
          setToken(response.data.token);
          setSaveToken(response.data.token);
          setErrorApi('');
          navigate("/home")
      }).catch(error => {
      console.log(error);
        setErrorApi('Authentication error. Please verify the data entered.');
        })
  }

    return(

        <div className="container w-100 vh-100 d-flex flex-column justify-content-center align-items-center">

          <Formik
          initialValues={{
            email: '',
            password:''
          }}
          validate={(values)=>{
            let errors = {};
            if(!values.email){
              errors.email = 'The field is empty. Please, enter your email'
            }
            if(!values.password){
              errors.password = 'The field is empty. Please, enter your password'
            }
            return errors
          }}
          onSubmit={(values)=> {
            handleSubmitFormik(values);
          }}>

           {({values, handleSubmit, handleChange, handleBlur, errors, touched})=> (
           <form onSubmit={handleSubmit} className="d-flex container col-sm-10 col-md-8 p-5
            flex-column border border-secondary rounded justify-content-center align-items-center">
              <div className="container mb-3">
                <label htmlFor="inputEmail" className="col-form-label fw-bold">Email</label>
                <input 
                  type="text" 
                  name={'email'} 
                  value={values.email} 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  placeholder= "name@example.com" 
                  className="form-control" 
                  id="inputEmail" />

                  {touched.email && errors.email && 
                    <div className="alert alert-danger mt-2" role="alert">
                      {errors.email}
                    </div>
                  }

              </div>
              <div className="container mb-3">
                <label htmlFor="inputPassword" className=" col-form-label fw-bold">Password</label>
                  <input 
                  type="password" 
                  name={'password'} 
                  value={values.password} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  className="form-control" 
                  id="inputPassword"/>
                  
                  {touched.password && errors.password && 
                    <div className="alert alert-danger mt-2" role="alert">
                      {errors.password}
                    </div>
                  }

              </div>
              <button className="btn btn-secondary" type="submit">Login</button>

              {errorApi && 
                    <div className="alert alert-danger mt-2" role="alert">
                      {errorApi}
                    </div>
                  }
            </form>
           )}

          </Formik>
        </div> 
      
    )
  }

  export default Login 