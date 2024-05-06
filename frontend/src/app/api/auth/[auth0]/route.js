import { handleAuth, handleLogin, handleLogout } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/blog",
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
    },
    returnTo: "/blog",
  }),
  logout: handleLogout({
    authorizationParams: {
        screen_hint: "logout",
      },
      returnTo: "/api/auth/login",
  })
});