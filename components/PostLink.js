import Link from "next/link";

const PostLink = props => {
  return (
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a className="link-to-post">{props.children}</a>
    </Link>
  );
};

export default PostLink;
