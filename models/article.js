var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	link: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: "Comment"
	}]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;