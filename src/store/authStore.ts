import { IUser } from '../models/IUser';
import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import axios, { AxiosError } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import { baseURL } from '../http';

class AuthStore {
    user = {} as IUser;
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth = (bool: boolean) => {
        this.isAuth = bool;
    }

    setUser = (user: IUser) => {
        this.user = user;
    }

    login = async (email: string, password: string) => {
        try {
            const response = await AuthService.login(email, password);
            console.log('login resp:', response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (err: AxiosError | any) {
            console.log('login err:', err.response?.data?.message);
        }
    }

    registration = async (email: string, password: string) => {
        try {
            const response = await AuthService.registration(email, password);
            console.log('registration resp:', response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (err: AxiosError | any) {
            console.log('registration err:', err.response?.data?.message);
        }
    }

    logout = async () => {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (err: AxiosError | any) {
            console.log('logout err:', err.response?.data?.message);
        }
    }

    checkAuth = async () => {
        // try {
        //     const response = await axios.post<AuthResponse>(
        //         `${baseURL}/refresh`,
        //         {withCredentials: true}
        //     );
        //     localStorage.setItem('token', response.data.accessToken);
        //     console.log('checkAuth resp:', response);
        //     this.setAuth(true);
        //     this.setUser(response.data.user);
        // } catch (err: AxiosError | any) {
        //     console.log('checkAuth err:', err.response?.data?.message);
        // }
    }
}

export const authStore = new AuthStore();