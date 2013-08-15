// MODEL: weapon
var Weapon = Backbone.Model.extend({
	idAttributes: "slug",
	defaults: {
		name: "Aphrodite\'s Sword",
		type: "Sword",
		slug: "aphrodites-sword",
		number_slain: "9001"
	}
});

// collection: weapons
var Weapons = Backbone.Collection.extend({
	model: Weapon
});

// router: everything
var AppRouter = Backbone.Router.extend({
	routes: {
		'weapons/:slug':'showWeapon'
	},
	showWeapon: function() {
		var show_weapon_view = new ShowWeaponView;
		show_weapon_view.render();
	}
});

// views: AppView, ShowWeaponView, IndexWeaponsView
var ShowWeaponView = Backbone.View.extend({
	render: function() {
		var weapon = new Weapon,
		source = $('#weapon-show-template').html(),
		template = Handlebars.compile(source),
		templateHTML = template(weapon.toJSON());
	$('#main').html(templateHTML);
	}
});

// jQuery: Onload function
$(function() {
	var app_router = new AppRouter;
	Backbone.history.start();
});