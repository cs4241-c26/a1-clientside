const http = require('http'),
      fs   = require('fs'),
      port = 3000;

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' );
      break;
    case '/index.html':
      sendFile( response, 'index.html' );
      break;
    case '/hobby.html':
      sendFile( response, 'hobby.html' );
      break;
    default:
      response.end( '404 Error: File Not Found' );
  }
});

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' );
   });
}

server.listen( process.env.PORT || port, () => {
  console.log("Server listening on port " + port);
} );
