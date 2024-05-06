// app/protected/page.tsx
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function ProtectedPage() {
    const cookies = getCookie('SiteReadCookie');
    const isAuthenticated = cookies === "yourPassword"; // Check cookie value

    if (!isAuthenticated) {
        return <p>Access Denied</p>;
    }
    const router = useRouter();
    const handleEndGameClick = () => {
        router.push('https://grand-choux-1a7bc2.netlify.app/en/final/');
    };
    return (
        <div className="bg-black text-green-700 min-h-screen flex flex-col items-center justify-start p-4 md:p-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="order-2 md:order-1 mt-4 md:mt-0">
            <link href="https://www.google.com">
                <a target="_blank" className="text-green-700 underline">Back to Blog</a>
            </link>
            </div>
            <div className="order-1 md:order-2 text-xl md:text-2xl mb-4 md:mb-0">
            <p>Current User: Ray</p>
            </div>
        </div>
        <div className="w-full mt-10 flex flex-col items-center">
            <h1 className="text-xl md:text-2xl">Blog Drafts</h1>
            <textarea
            className="mt-4 w-full max-w-lg bg-black text-green-700 border border-green-700 p-3"
            rows={10}
            defaultValue={`How is everyone doing~ It’s Ray^^ Do you remember the blog I uploaded recently about the drive with my dad?? Actually, the restaurant shown at around 45 seconds was run by my family. To prove that, my parents named the restaurant after me! That’s all! See you in the next blog(^^)／`}
            />
            <button
            onClick={handleEndGameClick}
            className="mt-4 px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-bold rounded"
            >
            End Game
            </button>
        </div>
        </div>
    );
};
