import Link from "next/link";

const PostLink = props => {
  const { id, country, countryCode, keyword, categoryValue, children } = props;
  return (
    <Link
      href="/p/[...id]"
      as={`/p/${id}?country=${country ? country : countryCode}&q=${
        keyword ? keyword : ""
      }&category=${categoryValue ? categoryValue : ""}`}
    >
      <a className="link-to-post">{children}</a>
    </Link>
  );
};

export default PostLink;
