import { useAuth0 } from '@auth0/auth0-react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const useIsAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

export const useAuthUser = () => {
  const { user, isLoading } = useAuth0()
  return { user, isLoading }
}

export function IfAuthenticated(props: Props) {
  const { children } = props
  return useIsAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated(props: Props) {
  const { children } = props
  return !useIsAuthenticated() ? <>{children}</> : null
}

export const useAccessToken = () => {
  const { getAccessTokenSilently } = useAuth0()
  return getAccessTokenSilently
}
