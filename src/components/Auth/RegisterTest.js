import React, { useState, useEffect } from 'react'
import stepUp from '../../../../assets/images/home/stepup-new.png'
import Logo from '../../../../assets/images/home/Logo.png'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { addNewUser } from 'store/user-management/slice'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import States from '../../../../states/ind/states.json'
import './Home.css'
// import Select from 'react-select'
// import { AiOutlineFacebook, AiOutlineGooglePlus } from 'react-icons/ai'

const RegisterTest = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const history = useHistory()
    const [stateError, setStateError] = useState(null)
    const [initialState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        state: '',
        pincode: '',
        password: '',
        c_password: '',
        mobile_number: '',
    })
    const [selectedState, setSelectedState] = useState(null)
    const [state, setState] = useState(null);
    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .required('First Name is required')
            .strict(false)
            .trim()
            .min(3, "Minimum of 3 characters")
            .max(30, "Maximum of 30 characters")
            .matches(/^[aA-zZ\s]+$/, "Only characters are allowed"),
        last_name: Yup.string()
            .required('Last Name is required')
            .strict(false)
            .trim()
            .min(3, "Minimum of 3 characters")
            .max(30, "Maximum of 30 characters")
            .matches(/^[aA-zZ\s]+$/, "Only characters are allowed"),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        gender: Yup.string()
            .required('Gender is required'),
        password: Yup.string().required('No password provided.')
            .min(8, 'Password should be 8 chars minimum.'),
        c_password: Yup.string().required('Confirm password is required.')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
        ,
        mobile_number: Yup.string()
            .required('Mobile Number is required')
            .matches(/^[0-9\s]+$/, "Only numbers are allowed")
            .min(10, 'Invalid Mobile Number')
            .max(10, 'Invalid Mobile Number'),
        // state: Yup.string()
        //   .required('State is required'),
        pincode: Yup.string()
            .required('Pincode is required')
            .matches(/^[0-9\s]+$/, "Only numbers are allowed"),
    });
    const handleSelectState = state => {
        setSelectedState(state)
        setStateError(null)
    }
    const handleState = state => {
        console.log(state.target.value)
        setState(state.target.value)
    }
    const handleRegister = (values) => {
        // alert(JSON.stringify(values, null, 2));
        let isValidate = true
        // if (!selectedState) {
        //     setStateError('Please select state')
        //     isValidate = false
        // }
        if (isValidate) {
            const obj = {
                first_name: values.first_name,
                last_name: values.last_name,
                name: `${values.first_name} ${values.last_name}`,
                email: values.email,
                password: values.password,
                mobile_number: values.mobile_number,
                state: selectedState?.value,
                pincode: values.pincode,
                gender: values.gender,
                user_role: 'General Student',
            }
            dispatch(addNewUser({ data: { ...obj }, history, login: true }))
        }
    }
    useEffect(() => {
        // setState(States.map((state) => (
        //     <option key={state.value} value={state.label}>
        //         {state.label}
        //     </option>
        // )))
    }, [])
    return (<>
        <Formik
            initialValues={initialState}
            onSubmit={handleRegister}
            validationSchema={validationSchema}>
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                } = props;
                return (<>

                    <section>
                        <div className='box'>
                            <div className='container'>
                                <div className='form'>
                                    <div className='square'><img src={stepUp} /></div>
                                    <form className='form' onSubmit={handleSubmit}>
                                        <h2>Personal Info</h2>
                                        <div className='combo'>
                                            <div className='input-box'>
                                                <input id="first_name"
                                                    name="first_name"
                                                    type="text"
                                                    value={values.first_name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder='First Name'
                                                    required
                                                    className={
                                                        errors.first_name && touched.first_name
                                                            ? "err-field form-fields"
                                                            : "form-fields"
                                                    }
                                                />
                                                <div className='first-name-error'>
                                                    <div className={errors.first_name && touched.first_name ? 'error-feedback' : 'error'}>

                                                        <div className="error-feedback">{errors.first_name}</div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className='input-box'>
                                                <input id="last_name"
                                                    name="last_name"
                                                    type="text"
                                                    value={values.last_name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder='Last Name'
                                                    required
                                                    className={
                                                        errors.last_name && touched.last_name
                                                            ? "err-field form-fields"
                                                            : "form-fields"
                                                    } /> {errors.last_name && touched.last_name && (
                                                        <div className="error-feedback">{errors.last_name}</div>
                                                    )}
                                            </div>
                                        </div>
                                        <div className='combo'>
                                            <div className='input-box'>
                                                <input id="email"
                                                    name="email"
                                                    type="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder='Email'
                                                    required
                                                    className={
                                                        errors.email && touched.email
                                                            ? "err-field form-fields"
                                                            : "form-fields"
                                                    } />
                                                {errors.email && touched.email && (
                                                    <div className="error-feedback">{errors.email}</div>
                                                )}
                                            </div>
                                            <div className='input-box'>
                                                <input id="mobile_number"
                                                    name="mobile_number"
                                                    type="text"
                                                    value={values.mobile_number}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder='Mobile Number'
                                                    required
                                                    className={
                                                        errors.mobile_number && touched.mobile_number
                                                            ? "err-field form-fields"
                                                            : "form-fields"
                                                    } />
                                                {errors.mobile_number && touched.mobile_number && (
                                                    <div className="error-feedback">{errors.mobile_number}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='combo'>
                                            <div className='input-box'>
                                                <input id="password"
                                                    name="password"
                                                    type="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder='Password'
                                                    required
                                                    className={
                                                        errors.password && touched.password
                                                            ? "err-field form-fields"
                                                            : "form-fields"
                                                    } />
                                                {errors.password && touched.password && (
                                                    <div className="error-feedback">{errors.password}</div>
                                                )}</div>
                                            <div className='input-box'>
                                                <input id="c_password"
                                                    name="c_password"
                                                    type="password"
                                                    value={values.c_password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder='Confirm Password'
                                                    required
                                                    className={
                                                        errors.c_password && touched.c_password
                                                            ? "err-field form-fields"
                                                            : "form-fields"
                                                    } />
                                                {errors.c_password && touched.c_password && (
                                                    <div className="error-feedback">{errors.c_password}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='combo'>
                                            <div className='input-box'>
                                                <label><h4>Gender</h4></label>
                                            </div>
                                            <div className='input-box'>
                                                <input
                                                    id="male"
                                                    type="radio"
                                                    value="Male"
                                                    name="gender"
                                                    style={{ height: 16, width: 16, verticalAlign: 'middle' }}
                                                    className={
                                                        errors.gender
                                                            ? 'err-field form-fields mr-2'
                                                            : 'form-fields mr-2'
                                                    }
                                                    onChange={handleChange}
                                                    checked={values.gender === 'Male'} /><span>Male</span></div>
                                            <div className='input-box'>
                                                <input
                                                    id="female"
                                                    type="radio"
                                                    value="Female"
                                                    name="gender"
                                                    style={{ height: 16, width: 16, verticalAlign: 'middle' }}
                                                    className={
                                                        errors.gender
                                                            ? 'err-field form-fields mx-2'
                                                            : 'form-fields mx-2'
                                                    }
                                                    onChange={handleChange}
                                                    checked={values.gender === 'Female'} /><span>Female</span></div>
                                        </div>
                                        <div className='combo'>
                                            <div className='input-box'>
                                                {/* <Select
                                                    placeholder={'Select State'}
                                                    options={States}
                                                    value={selectedState}
                                                    onChange={handleSelectState}
                                                /> */}
                                                <select value={state} onChange={(e) => handleState(e)}>
                                                    {/* <option></option> */}
                                                    {States.map((state) => (
                                                        <option key={state.value} value={state.label}>
                                                            {state.label}
                                                        </option>
                                                    ))
                                                    }

                                                </select>
                                                <div className="error-feedback">{stateError}</div>

                                            </div>
                                            <div className='input-box'>
                                                <input id="pincode"
                                                    name="pincode"
                                                    type="text"
                                                    value={values.pincode}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder='Pincode'
                                                    required
                                                    className={
                                                        errors.pincode && touched.pincode
                                                            ? "err-field form-fields"
                                                            : "form-fields"
                                                    } />
                                                {errors.pincode && touched.pincode && (
                                                    <div className="error-feedback">{errors.pincode}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='input-box'>
                                            <button type='submit'>Next</button>
                                        </div>
                                        <p className='forget'>Already have an account?<Link to='/account/login'>Login</Link></p>
                                    </form>
                                    {/* <ul>

                                        <li><span ><AiOutlineGooglePlus className='google' /></span><span>Login with Google</span></li>

                                        <li><span ><AiOutlineFacebook className='facebook' /></span><span>Login with Facebook</span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className='square footer-logo'><h3>Powered by</h3> <img src={Logo} />   <h3>@2021</h3></div>
                    </section></>);
            }}
        </Formik> </>)
}
export default RegisterTest
