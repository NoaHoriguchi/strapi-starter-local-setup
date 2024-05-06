'use strict';

/**
 * article-tw service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-tw.article-tw');
