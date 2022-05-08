<template>
  <div class="p-4">
    <!-- Nabar start -->
    <NavBarComponent />
    <!-- Nabar end -->
    <!-- Hero start -->
    <section
      class="bg-gray-100 mt-6 px-5 md:px-8 xl:px-32 py-10 md:grid grid-cols-2 gap-4"
    >
      <div class="flex flex-col lg:justify-center">
        <h1 class="text-3xl lg:text-5xl mb-9">
          Accounts Receivables Automation
        </h1>
        <p class="text-md mb-6">
          <span class="font-bold">Modernizing</span> the account receivable
          <span class="font-bold">finance operations</span> in Africa.
        </p>
        <div class="relative w-full xl:w-8/12">
          <input
            type="text"
            class="h-10 w-full pl-5 pr-20 rounded z-0 shadow focus:outline-none relative placeholder:text-xs"
            placeholder="Enter your email address"
          />

          <div class="absolute top-1 right-1">
            <button class="h-8 px-4 lg:px-9 text-white text-xs bg-primary">
              Get Updates
            </button>
          </div>
        </div>
      </div>
      <StatCard />
    </section>
    <!-- Hero end -->
    <!-- Product section start -->
    <section class="px-5 md:px-8 xl:px-32 py-10 grid grid-cols-3 gap-4">
      <div class="col-span-3 md:col-span-2 max-w-full md:max-w-xl">
        <span
          class="bg-primary text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-sm uppercase"
          >Product</span
        >
        <h2 class="text-2xl md:text-3xl lg:text-4xl mt-3 mb-6">
          Reconciliation nightmares are over and gone!
        </h2>
        <p class="text-md">
          Our Reconciliation Engine offers you a smooth and elegant way to
          reconcile receivables in realtime by tracking multiple channels at the
          same time
        </p>
      </div>
      <div class="relative">
        <img
          src="/assets/Artboard_9.png"
          class="md:block hidden absolute bottom-0 left-0 h-20 w-20"
          alt="pattern"
        />
      </div>

      <div class="col-span-3 md:col-span-1 md:mt-9">
        <RealTimeCard />
      </div>
      <div class="col-span-3 md:col-span-1 md:mt-9">
        <LinkUpCard />
      </div>
      <div class="col-span-3 md:col-span-1 md:mt-9">
        <ReportCard />
      </div>
    </section>
    <!-- Product section end -->
  </div>
</template>

<script>
import NavBarComponent from "../components/NavbarComponent.vue";
import StatCard from "../components/StatCard.vue";
import RealTimeCard from "../components/RealTimeCard.vue";
import LinkUpCard from "../components/LinkUpCard.vue";
import ReportCard from "../components/ReportCard.vue";

export default {
  name: "LandingPage",
  components: {
    NavBarComponent,
    StatCard,
    RealTimeCard,
    LinkUpCard,
    ReportCard,
  },
};
</script>
