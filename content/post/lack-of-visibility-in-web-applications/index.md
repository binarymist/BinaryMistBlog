+++
date = 2015-11-26
lastmod = 2015-11-26
draft = false
tags = ["application-security", "book", "cybersecurity", "express", "holistic-info-sec-for-web-developers", "information-security", "infosec", "javascript", "kali", "kali-linux", "logging", "monit", "morgan", "nmap", "nodejs", "nodemailer", "npm", "posix", "rsyslog", "security", "security-weaknesses", "web-application-security", "web-security", "winston", "winston-syslog", "winston-syslog-posix"]
title = "Lack of Visibility in Web Applications"
math = true
# By default the submission of new comments is enabled.
#comments = true

summary = """
Not being able to introspect your application at any given time or being able to know how the health status is, is not a comfortable place to be in and there is no reason you should be there.
"""

[header]
#image = "headers/getting-started.png"
#caption = "Image credit: [**Academic**](https://github.com/gcushen/hugo-academic/)"

+++

This post was taken from the content of the Web Applications chapter of Kim's book [Holistic Info-Sec for Web Developers F1](https://f1.holisticinfosecforwebdevelopers.com/)

## Risks

I see this as an indirect risk to the asset of web application ownership (That's the assumption that you will always own your web application).

Not being able to introspect your application at any given time or being able to know how the health status is, is not a comfortable place to be in and there is no reason you should be there.

### Insufficient Logging and Monitoring

![average-widespread-veryeasy-moderate](/media/post/2015/11/average-widespread-veryeasy-moderate.png)

Can you tell at any point in time if someone or something is:

* Using your application in a way that it was not intended to be used
* Violating policy. For example circumventing client side input sanitisation.

How easy is it for you to notice:

* Poor performance and potential DoS?
* Abnormal application behaviour or unexpected logic threads
* Logic edge cases and blind spots that stake holders, Product Owners and Developers have missed?

## Countermeasures

As Bruce Schneier said: "_Detection works where prevention fails and detection is of no use without response_". This leads us to application logging.

With good visibility we should be able to see anticipated and unanticipated exploitation of vulnerabilities as they occur and also be able to go back and review the events.

### Insufficient Logging

![PreventionAVERAGE](/media/post/2015/11/preventionaverage.png)

When it comes to logging in NodeJS, you can't really go past winston. It has a lot of functionality and what it does not have is either provided by extensions, or you can create your own. It is fully featured, reliable and easy to configure like NLog in the .NET world.

I also looked at `express-winston`, but could not see why it needed to exist.

`package.json`
{{< highlight json >}}
{
   ...
   "dependencies": {
      ...,
      "config": "^1.15.0",
      "express": "^4.13.3",
      "morgan": "^1.6.1",
      "//": "nodemailer not strictly necessary for this example,",
      "//": "but used later under the node-config section.",
      "nodemailer": "^1.4.0",
      "//": "What we use for logging.",
      "winston": "^1.0.1",
      "winston-email": "0.0.10",
      "winston-syslog-posix": "^0.1.5",
      ...
   }
}
{{< /highlight >}}

[`winston-email`](https://www.npmjs.com/package/winston-email) also depends on [`nodemailer`](https://www.npmjs.com/package/nodemailer).

#### Opening UDP port

with [`winston-syslog`](https://www.npmjs.com/package/winston-syslog) seems to be what a lot of people are using. I think it may be due to the fact that `winston-syslog` is the first package that works well for `winston` and syslog.

If going this route, you will need the following in your `/etc/rsyslog.conf`:

{{< highlight bash >}}
$ModLoad imudp
# Listen on all network addresses. This is the default.
$UDPServerAddress 0.0.0.0
# Listen on localhost.
$UDPServerAddress 127.0.0.1
$UDPServerRun 514
# Or the new style configuration.
Address <IP>
Port <port>
# Logging for your app.
local0.* /var/log/yourapp.log
{{< /highlight >}}

I Also looked at `winston-rsyslog2` and `winston-syslogudp`, but they did not measure up for me.

If you do not need to push syslog events to another machine, then it does not make much sense to push through a local network interface when you can use your posix syscalls as they are faster and safer. The line `514/udp open|filtered syslog no-response` below shows the open port.

###### nmap with `winston-syslog`
{{< highlight shell "hl_lines=7" >}}
root@kali:~# nmap -p514 -sU -sV <target IP> --reason

Starting Nmap 6.47 ( http://nmap.org )
Nmap scan report for kali (<target IP>)
Host is up, received arp-response (0.0015s latency).
PORT STATE SERVICE REASON VERSION
514/udp open|filtered syslog no-response
MAC Address: 34:25:C9:96:AC:E0 (My Computer)
{{< /highlight >}}

#### Using Posix

The [`winston-syslog-posix`](https://www.npmjs.com/package/winston-syslog-posix) package was inspired by [blargh](http://tmont.com/blargh/2013/12/writing-to-the-syslog-with-winston). `winston-syslog-posix` uses [`node-posix`](https://www.npmjs.com/package/posix).

If going this route, you will need the following in your `/etc/rsyslog.conf` instead of the above:

{{< highlight bash >}}
# Logging for your app.
local0.* /var/log/yourapp.log
{{< /highlight >}}

Now you can see on the `514/udp closed syslog port-unreach` line below that the syslog port is no longer open:

###### nmap with `winston-syslog-posix`
{{< highlight shell "hl_lines=7" >}}
root@kali:~# nmap -p514 -sU -sV <target IP> --reason

Starting Nmap 6.47 ( http://nmap.org )
Nmap scan report for kali (<target IP>)
Host is up, received arp-response (0.0014s latency).
PORT STATE SERVICE REASON VERSION
514/udp closed syslog port-unreach
MAC Address: 34:25:C9:96:AC:E0 (My Computer)
{{< /highlight >}}

Logging configuration should not be in the application startup file. It should be in the configuration files. This is discussed further under the [Store Configuration in Configuration files](http://blog.binarymist.net/2015/09/17/risks-and-countermeasures-to-the-management-of-application-secrets/#store-configuration-in-configuration-files) section.

Notice the syslog transport in the configuration below starting on the `syslogPosixTransportOptions: {` line.

###### `default.js`
{{< highlight javascript "linenos=inline,hl_lines=39-51" >}}
module.exports = {
   logger: {
      colours: {
         debug: 'white',
         info: 'green',
         notice: 'blue',
         warning: 'yellow',
         error: 'yellow',
         crit: 'red',
         alert: 'red',
         emerg: 'red'
      },
      // Syslog compatible protocol severities.
      levels: {
         debug: 0,
         info: 1,
         notice: 2,
         warning: 3,
         error: 4,
         crit: 5,
         alert: 6,
         emerg: 7
      },
      consoleTransportOptions: {
         level: 'debug',
         handleExceptions: true,
         json: false,
         colorize: true
      },
      fileTransportOptions: {
         level: 'debug',
         filename: './yourapp.log',
         handleExceptions: true,
         json: true,
         maxsize: 5242880, //5MB
         maxFiles: 5,
         colorize: false
      },
      syslogPosixTransportOptions: {
         handleExceptions: true,
         level: 'debug',
         identity: 'yourapp_winston'
         //facility: 'local0' // default
            // /etc/rsyslog.conf also needs: local0.* /var/log/yourapp.log
            // If non posix syslog is used, then /etc/rsyslog.conf or one
            // of the files in /etc/rsyslog.d/ also needs the following
            // two settings:
            // $ModLoad imudp // Load the udp module.
            // $UDPServerRun 514 // Open the standard syslog port.
            // $UDPServerAddress 127.0.0.1 // Interface to bind to.
      },
      emailTransportOptions: {
         handleExceptions: true,
         level: 'crit',
         from: 'yourusername_alerts@fastmail.com',
         to: 'yourusername_alerts@fastmail.com',
         service: 'FastMail',
         auth: {
            user: "yourusername_alerts",
            pass: null // App specific password.
         },
         tags: ['yourapp']
      }
   }
}
{{< /highlight >}}

In development I have chosen here to not use syslog. You can see this on the `syslogPosixTransportOptions: null` line below. If you want to test syslog in development, you can either remove the logger object override from the `devbox1-development.js` file or modify it to be similar to the above. Then add one line to the `/etc/rsyslog.conf` file to turn on. As mentioned in a comment above in the `default.js` config file on the line `// /etc/rsyslog.conf also needs: local0.* /var/log/yourapp.log`.

###### `devbox1-development.js`
{{< highlight javascript "hl_lines=4" >}}
wraplines="false" highlight="3" firstline="1"]
module.exports = {
   logger: {
      syslogPosixTransportOptions: null
   }
}
{{< /highlight >}}

In production we log to syslog and because of that we do not need the file transport you can see configured starting on line 30 above in the `default.js` configuration file, so we set it to null as seen on line 6 below in the `prodbox-production.js` file.

I have gone into more depth about how we handle syslogs [here](http://blog.binarymist.net/2015/04/25/web-server-log-management/), where all of our logs including these ones get streamed to an off-site syslog server. Thus providing easy aggregation of all system logs into one user interface that DevOpps can watch on their monitoring panels in real-time and also easily go back in time to visit past events. This provides excellent visibility as one [layer of defence](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-management-of-application-secrets).

There were also some other [options](http://help.papertrailapp.com/kb/configuration/configuring-centralized-logging-from-nodejs-apps/) for those using [Papertrail](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-lack-of-visibility-web-server-log-management-improving-the-strategy) as their off-site syslog and aggregation PaaS, but the solutions were not as clean as simply logging to local syslog from your applications and then sending off-site from there.

###### `prodbox-production.js`
{{< highlight javascript >}}
wraplines="false" highlight="6" firstline="1"]
module.exports = {
   logger: {
      consoleTransportOptions: {
         level: {},
      },
      fileTransportOptions: null,
      syslogPosixTransportOptions: {
         handleExceptions: true,
         level: 'info',
         identity: 'yourapp_winston'
      }
   }
}
{{< /highlight >}}

###### `local.js`
{{< highlight javascript >}}
// Build creates this file.
module.exports = {
   logger: {
      emailTransportOptions: {
         auth: {
            pass: 'Z-o?(7GnCQsnrx/!-G=LP]-ib' // App specific password.
         }
      }
   }
}
{{< /highlight >}}

The `logger.js` file wraps and hides extra features and transports applied to the logging package we are consuming.

###### `logger.js`
{{< highlight javascript >}}
var winston = require('winston');
var loggerConfig = require('config').logger;
require('winston-syslog-posix').SyslogPosix;
require('winston-email').Email;

winston.emitErrs = true;

var logger = new winston.Logger({
   // Alternatively: set to winston.config.syslog.levels
   exitOnError: false,
   // Alternatively use winston.addColors(customColours); There are many ways
   // to do the same thing with winston
   colors: loggerConfig.colours,
   levels: loggerConfig.levels
});

// Add transports. There are plenty of options provided and you can add your own.

logger.addConsole = function(config) {
   logger.add (winston.transports.Console, config);
   return this;
};

logger.addFile = function(config) {
   logger.add (winston.transports.File, config);
   return this;
};

logger.addPosixSyslog = function(config) {
   logger.add (winston.transports.SyslogPosix, config);
   return this;
};

logger.addEmail = function(config) {
   logger.add (winston.transports.Email, config);
   return this;
};

logger.emailLoggerFailure = function (err /*level, msg, meta*/) {
   // If called with an error, then only the err param is supplied.
   // If not called with an error, level, msg and meta are supplied.
   if (err) logger.alert(
      JSON.stringify(
         'error-code:' + err.code + '. '
         + 'error-message:' + err.message + '. '
         + 'error-response:' + err.response + '. logger-level:'
         + err.transport.level + '. transport:' + err.transport.name
      )
   );
};

logger.init = function () {
   if (loggerConfig.fileTransportOptions)
      logger.addFile( loggerConfig.fileTransportOptions );
   if (loggerConfig.consoleTransportOptions)
      logger.addConsole( loggerConfig.consoleTransportOptions );
   if (loggerConfig.syslogPosixTransportOptions)
      logger.addPosixSyslog( loggerConfig.syslogPosixTransportOptions );
   if (loggerConfig.emailTransportOptions)
      logger.addEmail( loggerConfig.emailTransportOptions );
};

module.exports = logger;
module.exports.stream = {
   write: function (message, encoding) {
      logger.info(message);
   }
};
{{< /highlight >}}

When the app first starts it initialises the logger on the `logger.init();` line below.

###### `app.js`
{{< highlight javascript "hl_lines=7" >}}
//...
var express = require('express');
var morganLogger = require('morgan');
var logger = require('./util/logger'); // Or use requireFrom module so no relative paths.
var app = express();
//...
logger.init();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//...
// In order to utilise connect/express logger module in our third party logger,
// Pipe the messages through.
app.use(morganLogger('combined', {stream: logger.stream}));
//...
app.use(express.static(path.join(__dirname, 'public')));
//...
require('./routes')(app);

if ('development' == app.get('env')) {
   app.use(errorHandler({ dumpExceptions: true, showStack: true }));
   //...
}
if ('production' == app.get('env')) {
   app.use(errorHandler());
   //...
}

http.createServer(app).listen(app.get('port'), function(){
   logger.info(
      "Express server listening on port " + app.get('port') + ' in '
      + process.env.NODE_ENV + ' mode'
   );
});
{{< /highlight >}}

* You can also optionally log JSON metadata
* You can provide an optional callback to do any work required, which will be called once all transports have logged the specified message

Here are some examples of how you can use the logger. The `logger.log(<level>` can be replaced with `logger.<level>(` where level is any of the levels defined in the `default.js` configuration file above:

###### Anywhere you need logging
{{< highlight javascript >}}
// With string interpolation also.
logger.log('info', 'test message %s', 'my string');
logger.log('info', 'test message %d', 123);
logger.log('info', 'test message %j', {aPropertyName: 'Some message details'}, {});
logger.log('info', 'test message %s, %s', 'first', 'second', {aPropertyName: 'Some message details'});
logger.log('info', 'test message', 'first', 'second', {aPropertyName: 'Some message details'});
logger.log('info', 'test message %s, %s', 'first', 'second', {aPropertyName: 'Some message details'}, logger.emailLoggerFailure);
logger.log('info', 'test message', 'first', 'second', {aPropertyName: 'Some message details'}, logger.emailLoggerFailure);
{{< /highlight >}}

Also consider hiding cross cutting concerns like logging using Aspect Oriented Programing (AOP)

### Insufficient Monitoring

![PreventionEASY](/media/post/2015/11/preventioneasy.png)

There are a couple of ways of approaching monitoring. You may want to see the health of your application even if it is all fine, or only to be notified if it is not fine (sometimes called the dark cockpit approach).

[Monit](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-lack-of-visibility-proactive-monitoring-monit) is an [excellent tool](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-lack-of-visibility-proactive-monitoring-getting-started-with-monit) for the dark cockpit approach. It's easy to configure. Has excellent short [documentation](https://mmonit.com/monit/documentation/monit.html) that is easy to understand and the configuration file has lots of examples commented out ready for you to take as is and modify to suite your environment.

## Risks that Solution Causes

### Lack of Visibility

With the added visibility, you will have to make decisions based on the new found information you now have. There will be no more blissful ignorance if there was before.

### Insufficient Logging and Monitoring

There will be learning and work to be done to become familiar with libraries and tooling. Code will have to be written around logging as in wrapping libraries, initialising and adding logging statements or hiding them using AOP.

## Costs and Trade-offs

### Insufficient Logging and Monitoring

You can do a lot for little cost here. I would rather trade off a few days work in order to have a really good logging system through your code base that is going to show you errors fast in development and then show you different errors in the places your DevOps need to see them in production.

Same for monitoring. Find a tool that you find working with a pleasure. There are just about always free and open source tools to every commercial alternative. If you are working with a start-up or young business, the free and open source tools can be excellent to keep ongoing costs down. Especially mature tools that are also well maintained like Monit.

## Additional Resources

* [Details](https://gist.github.com/rtgibbons/7354879) that [helped](https://thejsf.wordpress.com/2015/01/18/node-js-logging-with-winston/) setup NodeJS logging
* Application logging to syslog server on another machine:
  * http://unix.stackexchange.com/questions/67250/where-does-rsyslog-keep-facility-local0
  * http://wiki.rsyslog.com/index.php/Very_simple_config_--_starting_point_for_modifications
* Or the [new style configuration](http://www.rsyslog.com/doc/v8-stable/configuration/modules/imudp.html)
* [Syslog compatible protocol severities](https://wiki.gentoo.org/wiki/Rsyslog#Severity)

