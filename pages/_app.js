import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Lobster+Two:wght@700&family=Monoton&family=Old+Standard+TT:wght@700&family=Philosopher:ital@1&family=Playfair+Display:wght@500&display=swap"
        rel="stylesheet"></link>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
