#!/usr/bin/env node

'use strict';

var cLib = require('../cLib');

var baseService = require('../../base-service');
var BaseEmailService = baseService.EmailService;

var EmailService = require('../lib/emailservice');
var Networks = cLib.Networks;

var context = {
	EmailService: EmailService,
	Networks: Networks
};

class CEmailService extends BaseEmailService {
	constructor(config) {
	  super(context, config);
	}
};

// Start the service with base configuration (default).
var service = new CEmailService();
service.start();
