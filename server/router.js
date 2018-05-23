module.exports = function(router) {
	router.get('/', async function(ctx, next) {
		await ctx.render('home:index.html');
	});
}