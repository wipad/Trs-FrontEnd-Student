import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../services/firebase';



function FirebaseSignIn(props) {
      firebase.auth().languageCode = 'th';
      
      const uiConfig = {
            // Popup signin flow rather than redirect flow.
            signInFlow: 'popup',
            // We will display Google and Facebook as auth providers.
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.FacebookAuthProvider.PROVIDER_ID,
              {
                  provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                  recaptchaParameters: {
                      type: 'image', // 'audio'
                      size: 'normal', // 'invisible' or 'compact'
                      badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
                  },
                  defaultCountry: 'TH', // Set default country to the United Kingdom (+44).
                  // For prefilling the national number, set defaultNationNumber.
                  // This will only be observed if only phone Auth provider is used since
                  // for multiple providers, the NASCAR screen will always render first
                  // with a 'sign in with phone number' button.
                  defaultNationalNumber: '',
                  // You can also pass the full phone number string instead of the
                  // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
                  // the first country ID that matches the country code will be used to
                  // populate the country selector. So for countries that share the same
                  // country code, the selected country may not be the expected one.
                  // In that case, pass the 'defaultCountry' instead to ensure the exact
                  // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
                  // will always have higher priority than 'loginHint' which will be ignored
                  // in their favor. In this case, the default country will be 'GB' even
                  // though 'loginHint' specified the country code as '+1'.
                  loginHint: ''
              }
            ],
            callbacks: {
              // Avoid redirects after sign-in.
              signInSuccessWithAuthResult: () => false,
            },
          };
      return (
            <React.Fragment>
                  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </React.Fragment>
      )
}

// FirebaseSignIn.propTypes = {

// }

export default FirebaseSignIn
