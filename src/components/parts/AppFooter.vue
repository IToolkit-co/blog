<template>
  <footer class="bg-background-secondary body-font">
    <div
      class="
        container
        px-5
        py-10
        md:py-24
        mx-auto
        flex
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
        flex-wrap flex-col
      "
    >
      <div class="flex-grow flex flex-wrap md:text-left text-center">
        <!-- <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font text-lg font-medium mb-3">QUICK LINKS</h2>
          <nav class="list-none mb-5">
            <ul>
              <li>
                <g-link to="/about/">About Us</g-link>
              </li>
              <li>
                <g-link to="/contact-us/">Contact Us</g-link>
              </li>
              <li>
                <g-link to="/privacy-policy/">Privacy Policy</g-link>
              </li>
              <li>
                <g-link to="/terms-and-conditions/">Terms & Conditions</g-link>
              </li>
            </ul>
          </nav>
        </div> -->
        <!-- <div class="lg:w-3/4 md:w-1/2 w-full px-8">
          <h2 class="title-font text-lg font-medium mb-3">CONTACT US:</h2>
          <div class="mb-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              nostrum numquam repudiandae. Beatae cupiditate deserunt magni
              nulla officia, porro. Architecto delectus eius, inventore laborum
              nam optio reprehenderit suscipit tempora voluptatibus!
            </p>
          </div>
        </div> -->
      </div>
      <div
        class="
          w-64
          flex-shrink-0
          md:mx-0
          mx-auto
          mb-5
          md:-mb-5 md:mt-0
          mt-5
          text-center
          md:text-left
        "
      >
        <a
          class="
            flex
            title-font
            font-medium
            items-center
            md:justify-start
            justify-center
            text-gray-900
          "
        >
          <span class="site-logo"><site-logo /></span>
        </a>
        <p class="mt-2 text-sm">
          {{ $static.metadata.siteDescription }}
        </p>
      </div>
    </div>
    <div class="bg-background-tertiary">
      <div
        class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
      >
        <p class="text-sm text-center sm:text-left">
          {{ `© ${new Date().getFullYear()} ${$static.metadata.siteName}` }} —
          <a
            :href="$static.metadata.siteAuthorUrl"
            rel="noopener noreferrer"
            class="text-gray-500 ml-1"
            target="_blank"
            >{{ `@${$static.metadata.siteAuthor}` }}</a
          >
        </p>
        <span
          class="
            inline-flex
            sm:ml-auto sm:mt-0
            mt-4
            justify-center
            sm:justify-start
          "
        >
          <a
            :href="$static.metadata.siteAuthorUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500"
          >
            IToolkit.co
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteAuthor
    siteAuthorUrl
  }
}
</static-query>

<script>
export default {
  components: {
    SiteLogo: () => import('~/components/SiteLogo.vue')
  }
}
</script>
