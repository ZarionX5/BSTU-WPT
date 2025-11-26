import { data } from "react-router-dom";
import "./LoginForm.css";
import mainLogo from "/src/assets/logo.svg"

import { SubmitHandler, useForm } from 'react-hook-form'

import useAuth from "@/hooks/useAuth"
import { BodyLoginAccessTokenApiV1LoginAccessTokenPost as AccessToken } from "@/client";
import { passwordRules } from "@/utils";


function LoginForm() {
  const { loginMutation, error, resetError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccessToken>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<AccessToken> = async (data) => {
    console.log(data)
    if (isSubmitting) return

    resetError()

    try {
      await loginMutation.mutate(data)
    } catch {
      console.log('server not response')
    }
  }

  return (
    <>
      <div className="login">
        <div className="login-title">
          <div className="login-logo">
            <img alt="logo" src={mainLogo}/>
          </div>
          <div>
            <h2>
              Войти в Tracker
            </h2>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-email">
            <div className="login-email-title">
              Email:
            </div>
            {/* <input type="email" placeholder="Введите email" name="email"/> */}
            <input
            {...register('username', {required: 'Email is required'})}
            type="email"
            placeholder="Введите email"/>
          </div>
          <div className="login-password">
            <div className="login-password-title">
              Password:
            </div>
            {/* <input type="password" placeholder="Введите пароль" name="password"/> */}
            <input
            {...register('password', passwordRules())}
            type="password"
            placeholder="Введите пароль"/>
          </div>
          <div className="login-interaction">
            <button className="login-btn" type="submit" name="commit">
              Войти
            </button>
            <a className="forget-password-btn" href="./null.html">
              Забыл пароль?
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm
