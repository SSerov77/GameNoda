const allowedCors = [
  'https://practicum.yandex.ru',
  'https://students-projects.ru',
  'http://localhost:3000'
];

function cors(req, res, next) {
  const { origin } = req.headers;
  
  if (allowedCors.includes(origin)) { // Если это наш друг
      res.header('Access-Control-Allow-Origin', '*'); // Открываем доступ всем
      res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
  next();
}
