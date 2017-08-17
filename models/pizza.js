module.exports = function(sequelize, DataTypes) {
	var Pizza = sequelize.define('Pizza', {
		// id: {
		// 	type: DataTypes.INTEGER,
		// 	autoIncrement: true,
		// 	primaryKey: true,
		// 	allowNull: false
		// },
		name : {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		}
		
	},
	{
	timestamps: false
	});
	return Pizza;
};