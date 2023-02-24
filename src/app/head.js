export default function Head() {

  const baseURL = process.env.BASE_URL_TYPE ? process.env.BASE_URL_DEV : process.env.BASE_URL_PROD;

  console.log(baseURL)

  return (
    <>
      <title>EnvPartager</title>
      <meta content="" name />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="" />
      <meta name="theme-color" content="" />
      <meta name="title" content="" />
      <meta name="keywords" content="" />
      <meta name="language" content="" />
      <meta name="revisit-after" content="" />
      <meta name="robots" content="all" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image:width" content="NumberoEnPixeles" />
      <meta property="og:image:height" content="NumberoEnPixeles" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content="" />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image" content="" />
    </>
  );
}
