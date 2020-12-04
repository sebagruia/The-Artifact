import Link from "next/link";

const PostLink = (props) => {
  const { title, country, countryCode, keyword, categoryValue, children } = props;
  return (
    <Link
      href={{
        pathname: `/post/${title}`,
        query: { title, country, countryCode, keyword, categoryValue },
      }}
    >
      <a className="link-to-post">{children}</a>
    </Link>
  );
};

export default PostLink;
