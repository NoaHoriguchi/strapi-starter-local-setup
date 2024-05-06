// app/login/page.tsx
'use client'
import { redirect } from 'next/navigation';

export default function LoginPage() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        var formData = new FormData(e.target as HTMLFormElement);
        const form_values = Object.fromEntries(formData);
        console.log('form values' + form_values)
    }
    return (
        <div className="w-1/3 max-w-sm mx-auto">
            <form method="POST" onSubmit={handleSubmit}>
                <label className="block">
                    <span className="text-gray-700">Password:</span>
                    <input
                        type="password"
                        name="password"
                        className="form-input mt-1 block w-full bg-gray-900"
                        placeholder="Your site password"
                        required
                    />
                </label>
                <button type="submit" className="mt-3 bg-green-400 text-white p-2 font-bold rounded hover:bg-green-600">
                    Login
                </button>
            </form>
        </div>
    );
}

// // import Login from "../components/login"

// // const LoginPage = () => {
// //     const redirectPath = "/en/admin/protected"

// //     return (
// //         <div>
// //             <Login/>
// //         </div>
// //     );
// // };

// // export default LoginPage;

// // pages/login.js
// // 'use client'
// // import { useRouter } from 'next/navigation';

// // export default function Login() {
// //   const router = useRouter();

// //   const handleLogin = async (event) => {
// //     event.preventDefault();
// //     const password = event.target.password.value;

// //     const response = await fetch('/api/login', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ password }),
// //     });

// //     if (response.ok) {
// //       router.push('/en/admin/protected');
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
// //             type="password"
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

// // app/login/page.tsx

// 'use client'
// import { useRouter } from 'next/navigation';
// import { ActionData } from './action';

// export default function LoginPage() {
//     const router = useRouter();

//     return (
//         <div className="w-1/3 max-w-sm mx-auto">
//             <form method="post">
//                 <label className="block">
//                     <span className="text-gray-700">Password</span>
//                     <input
//                         type="password"
//                         name="password"
//                         className="form-input mt-1 block w-full bg-gray-900"
//                         placeholder="Your site password"
//                         required
//                     />
//                 </label>
//                 <button
//                     type="submit"
//                     className="mt-3 bg-green-400 text-white p-2 font-bold rounded hover:bg-green-600"
//                 >
//                     Login
//                 </button>
//                 {/* {actionData?.error && <p className="text-red-500">{actionData.error}</p>} */}
//             </form>
//         </div>
//     );
// }