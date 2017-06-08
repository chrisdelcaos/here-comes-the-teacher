'use strict';

const db = require('../../db');
const Profile = require('../models/profile');
const Page = require('../models/page');

const PageProfile = db.sequelize.define('pageProfile', {
    status: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
});

PageProfile.belongsTo(Profile, {foreignKey: 'profileId', targetKey: 'id'});
PageProfile.belongsTo(Page, {foreignKey: 'pageId', targetKey: 'id'});

module.exports = PageProfile;