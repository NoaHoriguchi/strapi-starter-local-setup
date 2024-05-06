'use strict';

/**
 * article-en service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-en.article-en');
