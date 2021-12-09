import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1> Loading... </h1>;
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  /**
   *
   * true - basically the same as blocking, only without the loading ( isFallback)
   * false - everything that is not pre-rendered is a 404!
   * blocking=  We'll pre-render only these paths at build time. { fallback: blocking } will server-render pages on-demand if the path doesn't exist.
   */
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  // to show a 404 page here!
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
    revalidate: 30,
  };
}

// this is running every request instead of rendering the html build time
export async function getServerSideProps() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
