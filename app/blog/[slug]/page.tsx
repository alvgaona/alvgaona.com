// export async function generateStaticParams() {
//   const posts = await getPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export default ({ params, searchParams }: {
//   params: { slug: string },
//   searchParams: { id: string },
// }) => {
//   return (
//     <>
//       <p>{params.slug}</p>
//       <p>{searchParams.id}</p>
//     </>
//   );
// }