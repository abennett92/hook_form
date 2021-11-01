import React, {useState} from 'react';

const User = () => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    return (
        <div className = "container">
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input onChange = {(e)=>setfirstName(e.target.value)} type="text" name="" id="" className="form-control" />
                    {firstName.length < 2? <p>First name must be at least 2 characters long!</p>:
                    ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input onChange = {(e)=>setlastName(e.target.value)} type="text" name="" id="" className="form-control" />
                    {lastName.length < 2? <p>Last name must be at least 2 characters long!</p>:
                    ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input onChange = {(e)=>setemail(e.target.value)} type="email" name="" id="" className="form-control" />
                    {email.length < 2? <p>Email must be at least 2 characters long!</p>:
                    ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input onChange = {(e)=>setpassword(e.target.value)} type="password" name="" id="" className="form-control" />
                    {password.length < 8? <p>Password must be at least 8 characters long!</p>:
                    ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    <input onChange = {(e)=>setconfirmPassword(e.target.value)} type="password" name="" id="" className="form-control" />
                    {password != confirmPassword? <p>Password's must match!</p>:
                    ""
                    }
                </div>
            </form>

            <h3>Your form data:</h3>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};


export default User;