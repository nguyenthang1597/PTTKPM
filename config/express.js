module.exports = function (app, express, session, hbs, logger, cookieParser, bodyParser, passport, flash) {
	
	app.engine('handlebars', hbs.engine);
	app.set('view engine', 'handlebars');
	app.set('views', 'views');

	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static('public'));


	app.use(session({
		secret: 'abcd',
		resave: false,
		saveUninitialized: true
	}));

	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());

	app.use((req, res, next) => {
		res.locals = ({
			user: req.user
		});
		return next();
	})

}