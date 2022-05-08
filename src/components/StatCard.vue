<template>
  <div class="bg-hero-pattern bg-no-repeat md:block hidden pattern">
    <div
      class="bg-white p-6 rounded-md break-inside-avoid-column md:max-w-sm lg:max-w-sm mx-auto lg:mt-9"
    >
      <header
        class="flex justify-between items-center border-b-2 md:pb-4 lg:pb-7"
      >
        <div class="">
          <h3 class="font-semibold text-md text-gray-900 mb-2">
            Reconciled value
          </h3>
          <h2 class="lg:text-3xl md:text-2xl">$ 72,190.00</h2>
        </div>
        <img
          src="/assets/Artboard_7.svg"
          class="md:h-15 md:w-20 lg:h-20 lg:w-32"
          alt="credit-card"
        />
      </header>
      <table class="mt-5 w-full text-sm border-b-2">
        <thead></thead>
        <tbody>
          <tr>
            <td class="w-35 py-2">Auto Recon.</td>
            <td><div class="md:w-36 lg:w-48 bg-gray-100 h-6"></div></td>
            <td class="w-35">84%</td>
          </tr>
          <tr>
            <td class="py-2">Manual</td>
            <td><div class="w-8 bg-gray-100 h-6"></div></td>
            <td>14%</td>
          </tr>
          <tr>
            <td class="w-35 py-2">To Review</td>
            <td><div class="w-3 bg-gray-100 h-6"></div></td>
            <td>12%</td>
          </tr>
        </tbody>
      </table>
      <div class="flex space-x-4 items-end pt-8 striped">
        <div class="h-36 lg:h-34 md:h-34 w-8 rounded"></div>
        <div class="h-36 lg:h-28 md:h-28 w-8 rounded"></div>
        <div class="h-36 lg:h-20 md:h-20 w-8 rounded"></div>
        <div class="h-36 lg:h-28 md:h-28 w-8 rounded"></div>
        <div class="h-36 lg:h-34 md:h-34 w-8 rounded"></div>
        <div class="h-36 lg:h-28 md:h-28 w-8 rounded"></div>
        <div class="h-36 lg:h-20 md:h-20 w-8 rounded"></div>
        <div class="h-36 lg:h-28 md:h-28 w-8 rounded"></div>
        <div class="h-36 lg:h-34 md:h-34 w-8 rounded"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatCard",
};
</script>
<style scoped>
.pattern {
  background-size: 100% 100%;
}
</style>
