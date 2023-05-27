import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import {
  useAuth,
  clearErrors,
  register,
  loadUser,
} from '../../context/auth/AuthState';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const [authState, authDispatch] = useAuth();

  const { error, isAuthenticated } = authState;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors(authDispatch);
    }
    loadUser(authDispatch);
  }, [error, setAlert, authDispatch]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    department: '',
  });

  const { name, email, password, department } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      register(authDispatch, {
        name,
        email,
        password,
        department,
      });
    }
  };

  if (isAuthenticated) return <Navigate to='/' />;

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div>
          Choose one department:
          <select
            name='department'
            id='department'
            value={department}
            onChange={onChange}
          >
            <option value='DepartmentA'>DepartmentA</option>
            <option value='DepartmentB'>DepartmentB</option>
            <option value='DepartmentC'>DepartmentC</option>
            <option value='DepartmentD'>DepartmentD</option>
            <option value='DepartmentE'>DepartmentE</option>
          </select>
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type='text'
//             name='name'
//             value={name}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Account</label>
//           <input
//             type='email'
//             name='email'
//             value={email}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type='password'
//             name='password'
//             value={password}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <label>
//           Choose one department:
//           <select name='department' onChange={onChange}>
//             <option value=''>Please select a department</option>
//             <option value='DepartmentA'>DepartmentA</option>
//             <option value='DepartmentB'>DepartmentB</option>
//             <option value='DepartmentC'>DepartmentC</option>
//             <option value='DepartmentD'>DepartmentD</option>
//             <option value='DepartmentE'>DepartmentE</option>
//           </select>
//         </label>
//         <div>
//           <input type='submit' value='Register' />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;
