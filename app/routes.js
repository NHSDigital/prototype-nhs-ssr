// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'

// Clear all session data and refresh the current page
router.get('/clear-data-development', (req, res) => {
  req.session.data = {};
  const refererUrl = req.headers.referer || '/';
  const urlParts = refererUrl.split('?');
  const baseUrl = urlParts[0];
  res.redirect(baseUrl);
})



// Smartcard v5 routes


router.post('/applicant/v5/smartcard/upload', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var formatSmartcard = req.session.data['format-smartcard']

  // Check whether the variable matches a condition
  if (formatSmartcard == "camera"){
    // Send user to next page
    res.redirect('/applicant/v5/smartcard/camera-mobile')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v5/smartcard/upload')
  }

})

router.post('/applicant/v5/smartcard/confirmation', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['passport-1']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v5/smartcard/confirmation')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v5/smartcard/format')
  }

})

router.post('/applicant/v5/smartcard/desktop/confirmation', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewImage = req.session.data['passport-2']

  // Check whether the variable matches a condition
  if (reviewImage == "yes"){
    // Send user to next page
    res.redirect('/applicant/v5/smartcard/desktop/confirmation')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v5/smartcard/desktop/upload')
  }

})



// Doc selector v6

router.post('/applicant/v6/dpoa/', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var accessibility = req.session.data['accessibility']

  // Check whether the variable matches a condition
  if (accessibility == "no"){
    // Send user to next page
    res.redirect('/applicant/v6/offline')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/dpoa')
  }

})

router.post('/applicant/v6/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v6/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/address-postcode')
  }

})

router.post('/applicant/v6/save-selection', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v6/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/save-selection')
  }

})

router.post('/applicant/v6/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v6/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/2-photo-id')
  }

})

router.post('/applicant/v6/save-selection-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v6/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/save-selection-2')
  }

})

router.post('/applicant/v6/no-poa-face', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var noPOA = req.session.data['no-poa']

  // Check whether the variable matches a condition
  if (noPOA == "online"){
    // Send user to next page
    res.redirect('/applicant/v6/dpoa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/no-poa-face')
  }

})




// Smartcard and doc selector v7


router.post('/applicant/v7/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v7/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/1-photo-id')
  }

})

router.post('/applicant/v7/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v7/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/address-postcode')
  }

})

router.post('/applicant/v7/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v7/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/2-photo-id')
  }

})

router.post('/applicant/v7/step-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v7/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/step-2')
  }

})

router.post('/applicant/v7/no-poa-face', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var noPOA = req.session.data['no-poa']

  // Check whether the variable matches a condition
  if (noPOA == "online"){
    // Send user to next page
    res.redirect('/applicant/v7/dpoa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/no-poa-face')
  }

})

router.post('/applicant/v7/smartcard-upload', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var formatSmartcard = req.session.data['format-smartcard']

  // Check whether the variable matches a condition
  if (formatSmartcard == "camera"){
    // Send user to next page
    res.redirect('/applicant/v7/smartcard-camera')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/smartcard-upload')
  }

})

router.post('/applicant/v7/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['passport-1']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v7/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/smartcard-format')
  }

})




// dpoa v8


router.post('/applicant/v8/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v8/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v8/1-photo-id')
  }

})

router.post('/applicant/v8/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v8/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v8/address-postcode')
  }

})

router.post('/applicant/v8/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v8/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v8/2-photo-id')
  }

})

router.post('/applicant/v8/step-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v8/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v8/step-2')
  }

})

router.post('/applicant/v8/no-poa-face', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var noPOA = req.session.data['no-poa']

  // Check whether the variable matches a condition
  if (noPOA == "online"){
    // Send user to next page
    res.redirect('/applicant/v8/dpoa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v8/no-poa-face')
  }

})

// dpoa v9 - for dev


router.post('/applicant/v9/passport', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v9/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v9/passport')
  }

})

router.post('/applicant/v9/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v9/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v9/address-postcode')
  }

})

router.post('/applicant/v9/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v9/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v9/address-postcode')
  }

})

router.post('/applicant/v9/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v9/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v9/2-photo-id')
  }

})

router.post('/applicant/v9/poa-preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v9/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v9/poa-preferred-name')
  }

})


router.post('/applicant/v9/save-selection', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v9/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v9/save-selection')
  }

})

// inviter v8 - verify emails

router.post('/inviter/v8/support-verify', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var supportEmail = req.session.data['support']

  // Check whether the variable matches a condition
  if (supportEmail == "different"){
    // Send user to next page
    res.redirect('/inviter/v8/support-verify')
  } else {
    // Send user to ineligible page
    res.redirect('/inviter/v8/enter-details')
  }

})


// inviter v9 - logged in nav

router.post('/inviter/v9/support-verify', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var supportEmail = req.session.data['support']

  // Check whether the variable matches a condition
  if (supportEmail == "different"){
    // Send user to next page
    res.redirect('/inviter/v9/support-verify')
  } else {
    // Send user to ineligible page
    res.redirect('/inviter/v9/enter-details')
  }

})

// inviter v10 - notifications

router.post('/inviter/v10/support-verify', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var supportEmail = req.session.data['support']

  // Check whether the variable matches a condition
  if (supportEmail == "different"){
    // Send user to next page
    res.redirect('/inviter/v10/support-verify')
  } else {
    // Send user to ineligible page
    res.redirect('/inviter/v10/enter-details')
  }

})

// inviter dev ready 

router.post('/inviter/dev-ready/support-verify', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var supportEmail = req.session.data['support']

  // Check whether the variable matches a condition
  if (supportEmail == "different"){
    // Send user to next page
    res.redirect('/inviter/dev-ready/support-verify')
  } else {
    // Send user to ineligible page
    res.redirect('/inviter/dev-ready/enter-details')
  }

})


// dpoa v10


router.post('/applicant/v10/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v10/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v10/address-postcode')
  }

})

router.post('/applicant/v10/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v10/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v10/preferred-name')
  }

})

router.post('/applicant/v10/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v10/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v10/preferred-name')
  }

})

router.post('/applicant/v10/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v10/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v10/2-photo-id')
  }

})

router.post('/applicant/v10/poa-preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v10/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v10/poa-preferred-name')
  }

})


router.post('/applicant/v10/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v10/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v10/save-selection')
  }

})

// dpoa v11


router.post('/applicant/v11/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v11/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v11/address-postcode')
  }

})

router.post('/applicant/v11/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v11/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v11/profile')
  }

})

router.post('/applicant/v11/profile', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v11/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v11/profile')
  }

})

router.post('/applicant/v11/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v11/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v11/2-photo-id')
  }

})

router.post('/applicant/v11/poa-profile', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v11/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v11/poa-profile')
  }

})


router.post('/applicant/v11/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v11/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v11/save-selection')
  }

})

router.post('/applicant/v11/switch-qr', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var mobile = req.session.data['move-mobile']

  // Check whether the variable matches a condition
  if (mobile == "qr"){
    // Send user to next page
    res.redirect('/applicant/v11/switch-qr')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v11/switch-text')
  }

})

router.post('/applicant/v11/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v11/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v11/smartcard-camera')
  }

})

router.post('/applicant/v11/poa-preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['poa-profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v11/poa-preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v11/poa-smartcard-camera')
  }

})


// dpoa v12


router.post('/applicant/v12/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v12/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v12/address-postcode')
  }

})

router.post('/applicant/v12/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v12/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v12/profile')
  }

})

router.post('/applicant/v12/profile', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v12/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v12/profile')
  }

})

router.post('/applicant/v12/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v12/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v12/2-photo-id')
  }

})

router.post('/applicant/v12/poa-profile', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v12/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v12/poa-profile')
  }

})


router.post('/applicant/v12/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v12/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v12/save-selection')
  }

})

router.post('/applicant/v12/switch-qr', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var mobile = req.session.data['move-mobile']

  // Check whether the variable matches a condition
  if (mobile == "qr"){
    // Send user to next page
    res.redirect('/applicant/v12/switch-qr')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v12/switch-text')
  }

})

router.post('/applicant/v12/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v12/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v12/smartcard-camera')
  }

})

router.post('/applicant/v12/poa-preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['poa-profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v12/poa-preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v12/poa-smartcard-camera')
  }

})

// dpoa v13


router.post('/applicant/v13/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v13/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v13/address-postcode')
  }

})

router.post('/applicant/v13/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v13/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v13/step-2')
  }

})

router.post('/applicant/v13/step-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v13/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v13/step-2')
  }

})

router.post('/applicant/v13/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v13/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v13/2-photo-id')
  }

})

router.post('/applicant/v13/poa-step-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v13/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v13/poa-step-2')
  }

})


router.post('/applicant/v13/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v13/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v13/check-your-details')
  }

})


router.post('/applicant/v13/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v13/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v13/profile-photo-upload')
  }

})

router.post('/applicant/v13/poa-preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['poa-profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v13/poa-preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v13/poa-profile-photo-upload')
  }

})

// applicant v14


router.post('/applicant/v14/step-1/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v14/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-1/address-postcode')
  }

})

router.post('/applicant/v14/step-1/dpoa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/v14/step-1/int-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-1/dpoa')
  }

})

router.post('/applicant/v14/step-1/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v14/step-1/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-2/start')
  }

})

router.post('/applicant/v14/step-2/start', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v14/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-2/start')
  }

})

router.post('/applicant/v14/step-1/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v14/offline/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-1/2-photo-id')
  }

})

router.post('/applicant/v14/offline/no-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v14/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-2/start')
  }

})


router.post('/applicant/v14/step-2/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v14/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-2/check-your-details-dpoa')
  }

})


router.post('/applicant/v14/step-2/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v14/step-2/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-2/profile-photo-upload')
  }

})

router.post('/applicant/v14/step-2/delivery', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v14/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-2/delivery')
  }

})

router.post('/applicant/v14/step-2/check-your-details-poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v14/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-2/check-your-details-dpoa')
  }

})

router.post('/applicant/v14/step-2/check-your-details-dpoa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v14/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-2/check-your-details-dpoa')
  }

})

router.post('/applicant/v14/step-2/profile-photo-upload', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var upload = req.session.data['upload-photo']

  // Check whether the variable matches a condition
  if (upload == "take-photo"){
    // Send user to next page
    res.redirect('/applicant/v14/step-2/profile-photo-take')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v14/step-2/profile-photo-upload')
  }

})

// applicant v15


router.post('/applicant/v15/step-1/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v15/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-1/address-postcode')
  }

})

router.post('/applicant/v15/step-1/dpoa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/v15/step-1/int-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-1/dpoa')
  }

})

router.post('/applicant/v15/step-1/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v15/step-1/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-2/start')
  }

})

router.post('/applicant/v15/step-2/start', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v15/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-2/start')
  }

})

router.post('/applicant/v15/step-1/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v15/offline/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-1/2-photo-id')
  }

})

router.post('/applicant/v15/offline/no-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v15/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-2/start')
  }

})


router.post('/applicant/v15/step-2/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v15/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-2/check-your-details-dpoa')
  }

})


router.post('/applicant/v15/step-2/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v15/step-2/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-2/profile-photo-upload')
  }

})

router.post('/applicant/v15/step-2/delivery', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v15/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-2/delivery')
  }

})

router.post('/applicant/v15/step-2/check-your-details-poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v15/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-2/check-your-details-dpoa')
  }

})

router.post('/applicant/v15/step-2/check-your-details-dpoa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v15/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v15/step-2/check-your-details-dpoa')
  }

})

// applicant v16


router.post('/applicant/v16/step-1/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v16/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-1/address-postcode')
  }

})

router.post('/applicant/v16/step-1/poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/v16/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-1/dpoa')
  }

})

router.post('/applicant/v16/step-1/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v16/step-1/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-2/start')
  }

})

router.post('/applicant/v16/step-2/start', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v16/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-2/start')
  }

})

router.post('/applicant/v16/step-1/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v16/offline/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-1/2-photo-id')
  }

})

router.post('/applicant/v16/offline/no-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v16/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-2/start')
  }

})


router.post('/applicant/v16/step-2/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v16/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-2/check-your-details-dpoa')
  }

})


router.post('/applicant/v16/step-2/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v16/step-2/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-2/profile-photo-upload')
  }

})

router.post('/applicant/v16/step-2/delivery', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/v16/step-2/delivery-postcode')
  }
  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v16/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-2/delivery')
  }

})

router.post('/applicant/v16/step-2/check-your-details-poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/v16/step-2/check-your-details-poa')
  }
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v16/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-2/check-your-details-dpoa')
  }

})

router.post('/applicant/v16/step-2/check-your-details-dpoa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/v16/step-2/check-your-details-poa')
  }
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v16/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v16/step-2/check-your-details-dpoa')
  }

})


// applicant v17


router.post('/applicant/v17/step-1/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v17/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-1/address-postcode')
  }

})

router.post('/applicant/v17/step-1/poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/v17/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-1/dpoa')
  }

})

router.post('/applicant/v17/step-1/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v17/step-1/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-2/start')
  }

})

router.post('/applicant/v17/step-2/start', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v17/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-2/start')
  }

})

router.post('/applicant/v17/step-1/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v17/offline/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-1/2-photo-id')
  }

})

router.post('/applicant/v17/offline/no-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v17/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-2/start')
  }

})


router.post('/applicant/v17/step-2/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v17/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-2/check-your-details-dpoa')
  }

})


router.post('/applicant/v17/step-2/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v17/step-2/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-2/profile-photo-upload')
  }

})

router.post('/applicant/v17/step-2/delivery', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/v17/step-2/delivery-postcode')
  }
  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v17/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-2/delivery')
  }

})

router.post('/applicant/v17/step-2/check-your-details-poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/v17/step-2/check-your-details-poa')
  }
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v17/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-2/check-your-details-dpoa')
  }

})

router.post('/applicant/v17/step-2/check-your-details-dpoa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/v17/step-2/check-your-details-poa')
  }
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v17/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v17/step-2/check-your-details-dpoa')
  }

})

// applicant v18


router.post('/applicant/v18/step-1/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v18/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v18/step-1/address-postcode')
  }

})


router.post('/applicant/v18/step-1/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v18/step-1/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v18/step-2/start')
  }

})

router.post('/applicant/v18/step-2/start', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v18/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v18/step-2/start')
  }

})

router.post('/applicant/v18/step-1/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v18/offline/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v18/step-1/2-photo-id')
  }

})

router.post('/applicant/v18/offline/no-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v18/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v18/step-2/start')
  }

})


router.post('/applicant/v18/step-2/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v18/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v18/step-2/check-your-details-dpoa')
  }

})


router.post('/applicant/v18/step-2/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v18/step-2/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v18/step-2/upload-photo')
  }

})

router.post('/applicant/v18/step-2/delivery', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v18/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v18/step-2/delivery')
  }

})

router.post('/applicant/v18/step-2/check-your-details-poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v18/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v18/step-2/check-your-details-dpoa')
  }

})

router.post('/applicant/v18/step-2/check-your-details-dpoa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v18/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v18/step-2/check-your-details-dpoa')
  }

})

// applicant v19


router.post('/applicant/v19/step-1/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v19/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v19/step-1/address-postcode')
  }

})


router.post('/applicant/v19/step-1/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v19/step-1/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v19/step-2/upload-photo')
  }

})

router.post('/applicant/v19/step-2/upload-photo', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v19/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v19/step-2/upload-photo')
  }

})

router.post('/applicant/v19/step-1/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v19/offline/no-poa')
  } 

  if (poa == "driving licence"){
    // Send user to next page
    res.redirect('/applicant/v19/step-1/no-dl')
  } 

  else {
    // Send user to ineligible page
    res.redirect('/applicant/v19/step-1/2-photo-id')
  }

})

router.post('/applicant/v19/offline/no-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v19/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v19/step-2/upload-photo')
  }

})


router.post('/applicant/v19/step-2/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/v19/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v19/step-2/check-your-details-dpoa')
  }

})


router.post('/applicant/v19/step-2/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v19/step-2/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v19/step-2/upload-photo')
  }

})

router.post('/applicant/v19/step-2/delivery', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v19/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v19/step-2/delivery')
  }

})

router.post('/applicant/v19/step-2/check-your-details-poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v19/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v19/step-2/check-your-details-dpoa')
  }

})

router.post('/applicant/v19/step-2/check-your-details-dpoa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v19/step-2/check-your-details-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v19/step-2/check-your-details-dpoa')
  }

})




// applicant v20


router.post('/applicant/v20/step-1/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v20/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v20/step-1/address-postcode')
  }

})


router.post('/applicant/v20/step-1/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var passport = req.session.data['passport']

  // Check whether the variable matches a condition
  if (passport == "other"){
    // Send user to next page
    res.redirect('/applicant/v20/step-1/1-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v20/step-2/upload-photo')
  }

})

router.post('/applicant/v20/step-2/upload-photo', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v20/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v20/step-2/upload-photo')
  }

})

router.post('/applicant/v20/step-1/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v20/offline/no-poa')
  } 

  if (poa == "driving licence"){
    // Send user to next page
    res.redirect('/applicant/v20/step-1/no-dl')
  } 

  else {
    // Send user to ineligible page
    res.redirect('/applicant/v20/step-1/2-photo-id')
  }

})

router.post('/applicant/v20/offline/no-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v20/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v20/step-2/upload-photo')
  }

})



router.post('/applicant/v20/step-2/check-your-details-dpoa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v20/step-2/check-your-details-dpoa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v20/step-2/upload-photo')
  }


})



// applicant v21


router.post('/applicant/v21/step-1/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v21/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v21/step-1/address-postcode')
  }

})



router.post('/applicant/v21/step-2/upload-photo', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v21/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v21/step-2/upload-photo')
  }

})

router.post('/applicant/v21/step-1/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v21/offline/no-poa')
  } 

  if (poa == "driving licence"){
    // Send user to next page
    res.redirect('/applicant/v21/step-1/no-dl')
  } 

  else {
    // Send user to ineligible page
    res.redirect('/applicant/v21/step-1/2-photo-id')
  }

})

router.post('/applicant/v21/offline/no-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v21/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v21/step-2/upload-photo')
  }

})



router.post('/applicant/v21/step-2/check-your-details-dpoa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['profile']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v21/step-2/check-your-details-dpoa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v21/step-2/upload-photo')
  }


})


// applicant v22


router.post('/applicant/v22/step-1/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v22/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v22/step-1/address-postcode')
  }

})



router.post('/applicant/v22/step-2/start', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v22/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v22/step-2/start')
  }

})

router.post('/applicant/v22/step-1/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v22/offline/no-poa')
  } 

  if (poa == "driving licence"){
    // Send user to next page
    res.redirect('/applicant/v21/step-1/no-dl')
  } 

  else {
    // Send user to ineligible page
    res.redirect('/applicant/v22/step-1/2-photo-id')
  }

})

router.post('/applicant/v22/offline/no-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v22/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v22/step-2/start')
  }

})



// id checker v5

router.post('/idchecker/v5/reject-dup', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dupFound = req.session.data['dup-found']

  // Check whether the variable matches a condition
  if (dupFound == "yes"){
    // Send user to next page
    res.redirect('/idchecker/v5/not-dup')
  }
  if (dupFound == "no"){
    // Send user to next page
    res.redirect('/idchecker/v5/reject-dup')
  } else {
    // Send user to ineligible page
    res.redirect('/idchecker/v5/hold-dup')
  }

})


// applicant dev ready


router.post('/applicant/dev-ready/step-1/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/dev-ready/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/dev-ready/step-1/address-postcode')
  }

})

router.post('/applicant/dev-ready/step-1/poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var uk = req.session.data['uk']

  // Check whether the variable matches a condition
  if (uk == "no"){
    // Send user to next page
    res.redirect('/applicant/dev-ready/step-1/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/dev-ready/step-1/dpoa')
  }

})



router.post('/applicant/dev-ready/step-2/start', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/dev-ready/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/dev-ready/step-2/start')
  }

})

router.post('/applicant/dev-ready/step-1/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/dev-ready/offline/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/dev-ready/step-1/2-photo-id')
  }

})

router.post('/applicant/dev-ready/offline/no-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/dev-ready/offline/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/dev-ready/step-2/start')
  }

})


router.post('/applicant/dev-ready/step-2/delivery-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var delivery = req.session.data['delivery']

  // Check whether the variable matches a condition
  if (delivery == "different"){
    // Send user to next page
    res.redirect('/applicant/dev-ready/step-2/delivery-postcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/dev-ready/step-2/check-your-details-dpoa')
  }

})





module.exports = router;
