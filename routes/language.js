/*
The MIT License (MIT)

Copyright (c) 2015 IBM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var express = require('express');
var acceptLanguage = require('accept-language');
var router = express.Router();

/*
 * GET to parse the client's requested lanaguge and select
 * the best available suppored language
 */

router.get('/parse', function(req, res) {
  /*
  * This is the list of supported languages for the service,
  * the first language is the fallback language that will be used in the event
  * someone requests a language that is unsupported.
  */

  var supportedLanguages = ['en-US', 'fr-FR', 'es-ES', 'de-DE'];
  acceptLanguage.languages(supportedLanguages);

  // Get the requested client side language
  var requestedLanguage = req.headers['accept-language'].toString();
  var bestLanguageMatch = acceptLanguage.get(requestedLanguage);

  var dateStamp = new Intl.DateTimeFormat(bestLanguageMatch).format(new Date());

  /*
  * Determine the best language match and return the best match and the
  * original requested language
  */
  var languageNegotiation = {
    available : bestLanguageMatch,
    requested: requestedLanguage,
    date: dateStamp
  };

  res.json(languageNegotiation);
});


module.exports = router;
