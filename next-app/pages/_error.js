import Link from "next/link";

const Error404 = () => {
  return (
    <div className="error404">
      <p>Page Not Found</p>
      <p className="sign404">404</p>

      <Link href="/">
        <a>
          <button className="button-secondary">back to home</button>
        </a>
      </Link>
    </div>
  );
};

export default Error404;
