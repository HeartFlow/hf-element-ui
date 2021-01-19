<template>
  <div id="okta-widget" />
</template>

<script>
import OktaSignIn from '@okta/okta-signin-widget'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import '@shared/okta-override.scss'

// Okta test tenant
const CLIENT_ID = '0oa1rliefyguQD5tR4x7'
const BASE_URL = 'https://dev-531977.okta.com'

export default {
  mounted() {
    const oktaSignIn = new OktaSignIn({
      el: '#okta-widget',
      baseUrl: BASE_URL,
      clientId: CLIENT_ID,
      redirectUri: window.location.origin,
      features: { idpDiscovery: true },
      logo: require('@/assets/hf-logo.svg'),
    })

    // Renders widget
    oktaSignIn.showSignInToGetTokens({ el: '#okta-widget' })
  }

}
</script>
