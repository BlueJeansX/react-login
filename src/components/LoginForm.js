import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    //detalji sa forme koji će se provjeravati za ispravnost:
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    //ovo hendla submit sa forme:
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    //DOM stablo:
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>React - Login forma</h2>
                <h3>Za uspješno logiranje koristi 'test@test.hr' i 'password'</h3>
                {(error !== "") ? (<div>{error}</div>) : ""}
                <div class="form-group">
                    <label>Ime:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name}></input>
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input type="text" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}></input>
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}></input>
                </div>
                <input type="submit" value="LOGIN"></input>
            </div>

        </form>
    )
}

export default LoginForm