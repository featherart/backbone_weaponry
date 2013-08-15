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
// views: AppView, ShowWeaponView, IndexWeaponsView
// jQuery: Onload function