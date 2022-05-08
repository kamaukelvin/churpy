<template>
  <div
    class="bg-blue p-6 text-white break-inside-avoid-column mx-auto h-[28rem]  md:h-[30rem] xl:h-[33rem] flex flex-col justify-between"
  >
    <div class="">
      <div class="-mr-6 bg-white p-4 grid grid-cols-3 flex flex-col">
        <p class="md:text-sm lg:text-md text-gray-900 mb-2 col-span-3">
          Incoming Payments
        </p>
        <img
          src="/assets/Artboard_7.svg"
          class="md:h-10 lg:h-20 w-20 md:col-span-3 lg:col-span-1 md:mx-auto lg:m-0"
          alt="credit-card"
        />
        <div
          class="col-span-2 lg:col-span-2 md:col-span-3 flex flex-col justify-center flex-1 mt-0  md:mt-3 xl:mt-0"
        >
          <p class="text-xs text-black">Payment is identified</p>
          <p class="text-xs text-black m">04/05/2022 | 9122 2829 ****</p>
        </div>

        <img src="/assets/Artboard_3.svg" class="pr-4 mt-5" alt="realtime" />
        <img src="/assets/Artboard_9.svg" class="pr-4 mt-5" alt="realtime" />
      </div>
    </div>
    <div class="mb-5">
      <h4 class="md:text-md lg:text-lg mt-20 mb-4">
        Realtime Payment Tracking
      </h4>
      <p class="md:text-xs lg:text-sm">
        Payments are detected as soon as they appear and routed to our A.I
        Reconciliation Engine
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatCard",
};
</script>
