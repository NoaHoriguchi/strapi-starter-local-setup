import { formatDate, getStrapiMedia } from '@/app/en/utils/api-helpers';
import { postRenderer } from '@/app/en/utils/post-renderer';
import Image from 'next/image';

// interface Article {
//     id: number;
//     attributes: {
//         title: string;
//         description: string;
//         slug: string;
//         cover: {
//             data: {
//                 attributes: {
//                     url: string;
//                 };
//             };
//         };
//         authorsBio: {
//             data: {
//                 attributes: {
//                     name: string;
//                     avatar: {
//                         data: {
//                             attributes: {
//                                 url: string;
//                             };
//                         };
//                     };
//                 };
//             };
//         };
//         blocks: any[];
//         publishedAt: string;
//     };
// }
interface Article {
    id: number;
    attributes: {
        Title: string;
        Summary: string;
        Slug: string;
        thumbnail: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        // authorsBio: {
        //     data: {
        //         attributes: {
        //             name: string;
        //             avatar: {
        //                 data: {
        //                     attributes: {
        //                         url: string;
        //                     };
        //                 };
        //             };
        //         };
        //     };
        // };
        // Body: any[];
        blocks: any[];
        publishedAt: string;
        Upload_date: string;
        Order_id: number;
    };
}
export default function Post({ data }: { data: Article }) {
    const { Title, Summary, Upload_date, thumbnail, blocks} = data.attributes;
    // const author = authorsBio.data?.attributes;
    // const imageUrl = getStrapiMedia(Thumbnail.data?.attributes.url);
    const imageUrl = "/frontend/public/undraw-women.png"
    // const authorImgUrl = getStrapiMedia(authorsBio.data?.attributes.avatar.data.attributes.url);

    return (
        <article className="space-y-8 dark:bg-black dark:text-gray-50">
            {/* {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="article cover image"
                    width={400}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                />
            )} */}
            <div className="space-y-6">
                <h1 className="leading-tight text-5xl font-bold ">{Title}</h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        {/* {authorImgUrl && (
                            <Image
                                src={authorImgUrl}
                                alt="article cover image"
                                width={400}
                                height={400}
                                className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                            />
                        )} */}
                        {/* <p className="text-md dark:text-violet-400">
                            {author && author.name} • {formatDate(publishedAt)}
                        </p> */}
                    </div>
                </div>
            </div>

            <div className="dark:text-gray-100">
                <p>{Summary}</p>

                {data.attributes.blocks.map((section: any, index: number) => postRenderer(section, index))}
            </div>
        </article>
    );
}
