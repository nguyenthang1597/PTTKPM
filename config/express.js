module.exports = function (app, express, logger, cookieParser, bodyParser) {
	app.set('views', 'views');
	app.set('view engine', 'hbs');


	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static('public'));


}