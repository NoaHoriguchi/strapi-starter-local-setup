import PageHeader from '@/app/en/components/PageHeader';
import { fetchAPI } from '@/app/en/utils/fetch-api';
import BlogList from '@/app/en/views/blog-list';

async function fetchPostsByCategory(filter: string) {
    try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const path = `/articles`;
        const urlParamsObject = {
            sort: { createdAt: 'desc' },
            filters: {
                category: {
                    slug: filter,
                },
            },
            populate: {
                cover: { fields: ['url'] },
                category: {
                    populate: '*',
                },
                authorsBio: {
                    populate: '*',
                },
            },
        };
        const options = { headers: { Authorization: `Bearer ${token}` } };
        const responseData = await fetchAPI(path, urlParamsObject, options);
        return responseData;
    } catch (error) {
        console.error(error);
    }
}

export default async function CategoryRoute({ params }: { params: { category: string } }) {
    const filter = params.category;
    const { data } = await fetchPostsByCategory(filter);

    //TODO: CREATE A COMPONENT FOR THIS
    if (data.length === 0) return <div>Not Posts In this category</div>;

    const { name, description } = data[0]?.attributes.category.data.attributes;

    return (
        <div>
            <PageHeader heading={name} text={description} />
            <BlogList data={data} />
        </div>
    );
}

export async function generateStaticParams() {
    return [];
}

// import { fetchAPI } from '@/app/en/utils/fetch-api';
// import Post from '@/app/en/views/post';
// import type { Metadata } from 'next';

// async function getPostBySlug(slug: string) {
//     const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//     const path = `/articles`;
//     const urlParamsObject = {
//         filters: { slug },
//         populate: {
//             cover: { fields: ['url'] },
//             authorsBio: { populate: '*' },
//             category: { fields: ['name'] },
//             blocks: { 
//                 populate: {
//                     '__component': '*', 
//                     'files': '*',
//                     'file': '*',
//                     'url': '*',
//                     'body': '*',
//                     'title': '*',
//                     'author': '*',
//                 }
//             },
//         },
//     };
//     const options = { headers: { Authorization: `Bearer ${token}` } };
//     const response = await fetchAPI(path, urlParamsObject, options);
//     return response;
// }

// async function getMetaData(slug: string) {
//     const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//     const path = `/articles`;
//     const urlParamsObject = {
//         filters: { slug },
//         populate: { seo: { populate: '*' } },
//     };
//     const options = { headers: { Authorization: `Bearer ${token}` } };
//     const response = await fetchAPI(path, urlParamsObject, options);
//     return response.data;
// }

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//     const meta = await getMetaData(params.slug);
//     const metadata = meta[0].attributes.seo;

//     return {
//         title: metadata.metaTitle,
//         description: metadata.metaDescription,
//     };
// }

// export default async function PostRoute({ params }: { params: { slug: string } }) {
//     const { slug } = params;
//     const data = await getPostBySlug(slug);
//     if (data.data.length === 0) return <h2>no post found</h2>;
//     return <Post data={data.data[0]} />;
// }

// export async function generateStaticParams() {
//     const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//     const path = `/articles`;
//     const options = { headers: { Authorization: `Bearer ${token}` } };
//     const articleResponse = await fetchAPI(
//         path,
//         {
//             populate: ['category'],
//         },
//         options
//     );

//     return articleResponse.data.map(
//         (article: {
//             attributes: {
//                 slug: string;
//                 category: {
//                     slug: string;
//                 };
//             };
//         }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
//     );
// }
