import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { authStore } from '../store/authStore';

// TODO make two components Login, RegisterForm
export const LoginForm: FC = observer(() => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <>
            <br/>
            <br/>
            <div>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    value={email}
                />

                <br/>
                <br/>

                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    value={password}
                />

                <br/>
                <br/>

                <button onClick={() => authStore.login(email, password)}>Sign In</button>

                <br/>
                <br/>

                <button onClick={() => authStore.registration(email, password)}>Sign Up</button>
            </div>
        </>

    );
});