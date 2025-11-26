import "./RegisterForm.css";
import mainLogo from "/src/assets/logo.svg"

import { SubmitHandler, useForm } from 'react-hook-form'

import useAuth from "@/hooks/useAuth"
import { UserRegister } from "@/client";
import { passwordRules } from "@/utils";

function RegisterForm() {
  const { signUpMutation, error, resetError } = useAuth();

  const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm<UserRegister>({
      mode: "onBlur",
      criteriaMode: "all",
      defaultValues: {
        name: '',
        email: '',
        password: '',
      },
    });

    const onSubmit: SubmitHandler<UserRegister> = async (data) => {
      console.log('----- response')

      if (isSubmitting) return

      resetError()

      try {
        await signUpMutation.mutate(data)
      } catch {
        console.log('server not response')
      }
    }

  return (
    <>
      <div className="register">
        <div className="register-title">
          <div className="register-logo">
            <img alt="logo" src={mainLogo}/>
          </div>
          <div>
            <h2>
              Регистрация в Tracker
            </h2>
          </div>
        </div>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="register-name">
            <div className="register-name-title">
              Login:
            </div>
            <input
            {...register('name', {required: 'Username is required'})}
            type='text'
            placeholder="Введите имя пользователя"/>
          </div>
          <div className="register-email">
            <div className="register-email-title">
              Email:
            </div>
            <input
            {...register('email', {required: 'Email is required'})}
            type='email'
            placeholder="Введите email"/>
          </div>
          <div className="register-password">
            <div className="register-password-title">
              Password:
            </div>
            <input
            {...register('password', passwordRules())}
            type='password'
            placeholder="Введите пароль"/>
          </div>
          <div className="register-interaction">
            <button className="register-btn" type="submit" name="commit">
              Регистрация
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterForm
