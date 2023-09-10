<template>
  <div
    class="h-screen w-full md:grid md:grid-cols-3 flex flex-col justify-center items-center"
  >
    <div
      class="hidden md:flex relative col-span-2 bg-[url('/firstpage-img.jpg')] bg-cover md:pl-10"
    >
      <div class="bg-[#002864d2] absolute top-0 left-0 w-full h-full p-20">
        <!-- company logo -->
        <div class="z-40 bg-white inline-block p-3">
          <img
            src="https://www.onpointcu.com/wp-content/themes/onpointcu-theme/images/OnPoint_Primary_One-Color_RGB-resized.png"
            alt="OnPoint Logo"
            class="site_header--logo_image"
            width="160"
            height="68"
          />
        </div>

        <!-- text -->
        <div class="z-40">
          <h2 class="large-header leading-[60px] mt-4">
            COMMUNITY CREDIT UNION
          </h2>
          <h4 class="medium-header mt-5">Credit card security system</h4>
          <br />
          <p class="w-8/12">
            Our anti-fraud detection system uses artificial intelligence to
            monitor for suspicious activity on your account in real-time.
            <br />
            <br />
            Advanced security for your online purchases. With On Point Secure,
            purchasing online is as fast and secure as a buying in a store.
            <br />
            <br />
            Your bank can probably help you take even more control of your
            accounts with purchase alerts. Sign up and you can easily track
            account spending and quickly spot fraudulent purchases.
          </p>
          <br />
          <br />
          <br />
          <br />
          <div class="flex items-center justify-between">
            <icon class="text-[40px]" name="uil:credit-card" />
            <icon class="w-10/12" name="uil:arrows-h" />
            <icon class="text-[40px]" name="uil:padlock" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center gap-4">
      <div class="z-40 rounded-md mb-20 bg-white inline-block p-3 md:hidden">
        <img
          src="https://www.onpointcu.com/wp-content/themes/onpointcu-theme/images/OnPoint_Primary_One-Color_RGB-resized.png"
          alt="OnPoint Logo"
          class="site_header--logo_image"
          width="160"
          height="68"
        />
      </div>
      <NuxtLink to="/signUpPage">
        <button class="login-btn">Sign up</button>
      </NuxtLink>
      <NuxtLink to="/signInPage">
        <button class="login-btn">Sign in</button>
      </NuxtLink>
    </div>
  </div>
</template>