# DarkSky Weather App

While Dark Sky's website can provide you with all the weather data you could ever want, you don't always need it.  I decided to simplify their data down to what you most likely want to see when you check the weather - what's happening right now, what's happening in the next few hours while you're out, and a five-day forecast to help you plan your week.

Dark Sky's team chose to disable CORS on their servers to increase security, so I used Freeboard's [thingproxy](https://github.com/Freeboard/thingproxy) to easily take care of the necessary header content for my API calls.  Google's [Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) is what is used to reverse the lat/long coordinates into a readable location.

A sample of what kind of data is returned by the Dark Sky API can be found in [sample-output.json](https://github.com/alexmelagrano/DarkSky/blob/master/sample-output.json).

To run this app, navigate to the [forecast.js file](https://github.com/alexmelagrano/DarkSky/blob/master/app/services/forecast.js) and provide it with your Dark Sky API key, and the lat/long coordinates you want your data for.  Then all you have to do is set up a simple server for it to run on!


## Wishlist

- automatically get user's location
- allow user to toggle between a few predetermined locations
- clean up the main.controller.js file

Built as an introduction to AngularJS 1.x, and the Bourbon+Neat Sass library.
The majority of this was developed while at [MullenLowe](http://us.mullenlowe.com/)'s Boston office.