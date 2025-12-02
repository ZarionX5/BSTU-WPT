import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type {
  UserRegister,
  BodyLoginAccessTokenApiV1LoginAccessTokenPost as AccessToken
} from "@/client"
import {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery
} from "@/app/services/auth"
import { handleError } from "@/utils"
import { useDispatch } from "react-redux"
import { authApi } from "@/app/services/auth"
import type { AppDispatch } from "@/app/store"

const isLoggedIn = () => {
  return localStorage.getItem("access_token") !== null
}

const useAuth = () => {
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  // RTK Query mutations and queries
  const [register, signUpMutation] = useRegisterMutation()
  const [login, loginMutation] = useLoginMutation()
  const { data: user } = useGetCurrentUserQuery(undefined, {
    skip: !isLoggedIn(),
  })

  const signUp = async (data: UserRegister) => {
    try {
      await register(data).unwrap()
      navigate("/login")
    } catch (err) {
      handleError(err)
    }
  }

  const loginUser = async (data: AccessToken) => {
    try {
      const response = await login(data).unwrap()
      localStorage.setItem("access_token", response.access_token)
      navigate("/")
    } catch (err) {
      handleError(err)
    }
  }
  const logout = () => {
    localStorage.removeItem("access_token")
    dispatch(authApi.util.resetApiState())
    navigate("/")
  }

  return {
    signUpMutation: {
      mutate: signUp,
      isLoading: signUpMutation.isLoading,
      error: signUpMutation.error,
    },
    loginMutation: {
      mutate: loginUser,
      isLoading: loginMutation.isLoading,
      error: loginMutation.error,
    },
    logout,
    user: isLoggedIn() ? user : null,
    error,
    resetError: () => setError(null),
  }
}

export { isLoggedIn }
export default useAuth
