'use strict';

/**
 * @ngdoc function
 * @name txtWebsiteApp.controller:MainCtrl
 * @descri
 * # MainCtrl
 * Controller of the txtWebsiteApp
 */
angular.module('txtWebsiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
   		{
   			label: 'Messaging - Re Invented',
   			descri: 'Txt = (T)exting + E(xt)ra. Txt is the chat messenger designed to feel elegant & to extend the limits of texting. Its a free app and platform to take messaging beyond possiblities'
   		},
   		{
   			label: 'Keep your moments within reach',
   			descri: 'Message threads allow you to reply to a specifc message in its own conversation. With Chat marks you can bookmark messages and find them faster. Together they make chatting more fun !'
   		},
   		{
   			label: 'Always stay connected!',
   			descri: 'Share voice messages, videos, photos, locations. Enjoy moments together with Txt anywhere. Share the Music you love on the on any device. Txt works on Mobiles, Tablets and Computers.'
   		},
   		{
   			label: 'Events Made Easy !',
   			descri: 'Hosting an event ? Need broadcasts file-sharing, voting and more ?? to scale to hundreds of people ? We have got you covered ! You can host a local a txt instance with no configuration required and make the event more fun then ever !'
   		},
   		{
   			label: 'Fill the cloud not your phone!',
   			descri: 'Send Files, Photos, Music or Whatever you feel like, access them on any device without filling your device. We use smart storage which doesnt fill your memory but allows you to store beyond possibilities.'
   		},
   		{
   			label: 'Designed to work with your IT',
   			descri: 'We use our chat at work, So we built in things that use ourselves commit messages, atom feeds, xkcd by default. It uses 256 bit SSL and you can host your own server which keeps your messages to you and not in cloud. Optimized for Colleges & Offices.'
   		},
   		{
   			label: 'Do More - Extend Messages',
   			descri: 'Txt comes with tons of widgets to extend possiblities of messages. Send task lists, timers, todos, add in your work feed use your chats and messages to a whole new level without needing to install anything else!'
   		},
   		{
   			label: 'We <3 Developers',
   			descri: 'Are you a developer ? You can build application on the top of our push platform -- completely free, and managed by our cloud. We believe that knowledge expands when shared and hence our platform itself is open-sourced'
    	}
    ];
  });
