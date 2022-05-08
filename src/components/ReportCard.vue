<template>
  <div class="bg-cyan p-6 text-white break-inside-avoid-column mx-auto h-full md:h-[30rem] xl:h-[33rem] flex flex-col justify-between">
    <div class="bg-white p-4 -mr-6">
      <div class="parent">
        <p class="md:text-sm lg:text-md text-gray-900 mb-2 div1">
          Reconciliation Reports
        </p>
        <div class="shadow div2">
          <img src="/assets/Artboard_5.svg" class="" alt="credit-card" />
        </div>
        <div class="shadow div3">
          <img src="/assets/Artboard_4.svg" class="" alt="credit-card" />
        </div>

        <div class="shadow div4">
          <img src="/assets/Artboard_6.svg" class="" alt="credit-card" />
        </div>
      </div>
    </div>
     <div class="mb-5 ">
    <h4 class="md:text-md lg:text-lg mt-20 mb-4">Reports & Insights</h4>
    <p class="md:text-xs lg:text-sm">
      We provide transparent detailed reports for various aspects of your data
      to suite decision making in all levels
    </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatCard",
};
</script>
<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 4;
}
.div2 {
  grid-area: 1 / 4 / 4 / 6;
}
.div3 {
  grid-area: 4 / 3 / 6 / 6;
}
.div4 {
  grid-area: 2 / 1 / 5 / 3;
}
</style>
