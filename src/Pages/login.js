import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/actions/actions';

export default function LoginPage (props) {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const dispatch = useDispatch();

    const validateLogin = () => {
        console.log(user);
        console.log(pass);
        dispatch(login(user, pass))
    }

    return (
        <div className="full-height flex-center">
            <div className="card">
                <div className="card-content">
                    <p className="title">
                        Athena
                    </p>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input onChange={($event) => setUser($event.target.value)} className="input is-rounded" type="text" placeholder="Login"/>
                            <span className="icon is-small is-left">
                                <i className="material-icons">account_circle</i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input onChange={($event) => setPass($event.target.value)} className="input is-rounded" type="password" placeholder="Password"/>
                            <span className="icon is-small is-left">
                                <i className="material-icons">lock</i>
                            </span>
                        </p>
                    </div>
                    <div className="control flex-center">
                        <button className="button is-primary" onClick={($event) => {validateLogin()}}>Login!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
