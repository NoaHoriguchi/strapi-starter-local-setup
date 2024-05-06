import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function layout({children} : {children: React.ReactNode}) {
  return (
    <UserProvider>
      <div>{children}</div>
    </UserProvider>
  )
}
