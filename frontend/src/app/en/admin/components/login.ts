// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
      console.log("POST POG")
        const { password } = req.body;
        const expectedPassword = "yourPassword"; // Your desired password

        if (password === expectedPassword) {
            setCookie('SiteReadCookie', password, { req, res, path: '/', maxAge: 86400 }); // Set cookie for 1 day
            res.redirect(303, '/en/admin/protected'); // Redirect to the protected page
        } else {
            res.status(401).json({ error: 'Invalid password' });
        }
    } else {
      console.log("NOT POST PEPEHANDS")
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// // import { useState } from 'react';
// // // import Cookies from 'universal-cookie';
// // import consts from './consts';
// // import { cookies } from 'next/headers'

// // const Login = ({ redirectPath }) => {
// //   const [password, setPassword] = useState('');

// //   return (
// //     <div className="w-1/3 max-w-sm mx-auto">
// //       <form>
// //         <label className="block">
// //           <span className="text-gray-700">Password</span>
// //           <input
// //             type="text"
// //             className="form-input mt-1 block w-full bg-gray-900"
// //             placeholder="Your site password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           ></input>
// //         </label>
// //         <button
// //           type="submit"
// //           className="mt-3 bg-green-400 text-white p-2 font-bold rounded hover:bg-green-600"
// //           onClick={(e) => {
// //             e.preventDefault();
// //             const cookieStore = cookies()
// //             cookieStore.set(consts.SiteReadCookie, password, {
// //               path: '/',
// //             });
// //             // consts.SiteReadCookie = password;
// //             console.log("COOKIEMONSTER: " + cookieStore)
// //             window.location.href = redirectPath ?? '/';
// //           }}
// //         >
// //           Login
// //         </button>
// //       </form>
// //       {/* <Component {...pageProps} /> */}
// //     </div>
// //   );
// // };

// // export default Login;

// // pages/login.js
// // 'use client'

// // import { useRouter } from 'next/navigation';
// // import { setCookie } from 'cookies-next';

// // export default function Login() {
// //   const router = useRouter();
  
// //   const handleLogin = async (event) => {
// //     event.preventDefault();
// //     const password = event.target.password.value;

// //     // This POSTs password to the API route which handles authentication
// //     const response = await fetch('/api/login', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ password }),
// //     });

// //     if (response.ok) {
// //       router.push(router.query.redirect || '/');
// //     } else {
// //       console.error('Failed to login');
// //     }
// //   };

// //   return (
// //     <div className="w-1/3 max-w-sm mx-auto">
// //       <form onSubmit={handleLogin}>
// //         <label className="block">
// //           <span className="text-gray-700">Password</span>
// //           <input
// //             type="password" // Change type to password to hide input
// //             name="password"
// //             className="form-input mt-1 block w-full bg-gray-900"
// //             placeholder="Your site password"
// //             required
// //           />
// //         </label>
// //         <button
// //           type="submit"
// //           className="mt-3 bg-green-400 text-white p-2 font-bold rounded hover:bg-green-600"
// //         >
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // // pages/api/login.js
// // export function handler(req, res) {
// //   if (req.method === 'POST') {
// //     const { password } = req.body;

// //     // You would typically validate the password here and authenticate the user
// //     if (password === 'unpredictable') { // Replace 'expected_password' with your actual password check
// //       setCookie('SiteReadCookie', password, { req, res, path: '/' });
// //       res.status(200).send({ success: true });
// //     } else {
// //       res.status(401).send({ error: 'Unauthorized' });
// //     }
// //   } else {
// //     res.setHeader('Allow', ['POST']);
// //     res.status(405).end(`Method ${req.method} Not Allowed`);
// //   }
// // }

// // pages/api/login.js
// import { setCookie } from 'cookies-next';

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     const { password } = req.body;
//     const expectedPassword = "test1234"; // Set your expected password here

//     if (password === expectedPassword) {
//       setCookie('SiteReadCookie', password, { req, res, path: '/', maxAge: 60 * 60 * 24 }); // 1 day cookie
//       res.status(200).json({ success: true });
//     } else {
//       res.status(401).json({ error: 'Unauthorized' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
