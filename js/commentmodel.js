
(function(OC, OCA) {
	var NS_OWNCLOUD = 'http://owncloud.org/ns';
	/**
	 * @class OCA.AnnouncementCenter.Comments.CommentModel
	 * @classdesc
	 *
	 * Comment
	 *
	 */
	var CommentModel = OC.Backbone.Model.extend(
		/** @lends OCA.Comments.CommentModel.prototype */ {
		sync: OC.Backbone.davSync,

		defaults: {
			actorType: 'users',
			objectType: 'announcement'
		},

		davProperties: {
			'id': '{' + NS_OWNCLOUD + '}id',
			'message': '{' + NS_OWNCLOUD + '}message',
			'actorType': '{' + NS_OWNCLOUD + '}actorType',
			'actorId': '{' + NS_OWNCLOUD + '}actorId',
			'actorDisplayName': '{' + NS_OWNCLOUD + '}actorDisplayName',
			'creationDateTime': '{' + NS_OWNCLOUD + '}creationDateTime',
			'objectType': '{' + NS_OWNCLOUD + '}objectType',
			'objectId': '{' + NS_OWNCLOUD + '}objectId',
			'isUnread': '{' + NS_OWNCLOUD + '}isUnread'
		},

		parse: function(data) {
			return {
				id: data.id,
				message: data.message,
				actorType: data.actorType,
				actorId: data.actorId,
				actorDisplayName: data.actorDisplayName,
				creationDateTime: data.creationDateTime,
				objectType: data.objectType,
				objectId: data.objectId,
				isUnread: (data.isUnread === 'true')
			};
		}
	});

	OCA.AnnouncementCenter.Comments.CommentModel = CommentModel;
})(OC, OCA);

