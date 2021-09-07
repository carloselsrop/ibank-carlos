<template>
  <div class="w-full h-full flex justify-center items-center select-none">
    <div
      class="
        w-full
        2xl:w-9/12
        h-76
        bgCredit
        py-4
        px-4
        mb-8
        lg:px-8
        select-none
        rounded-lg
        font-body
        shadow-2xl
      "
    >
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center">
          <img
            class="w-12 h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
            alt=""
          />
          <div class="px-2 font-semibold text-gray-200">mastercard</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2
              6H3m18-6h-2m2 6h-2M7 19h10a2 2 0
              002-2V7a2 2 0 00-2-2H7a2 2 0 00-2
              2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        </div>
      </div>
      <div
        class="
          w-full
          flex
          justify-between
          items-center
          text-gray-200
          pt-16
          text-2xl
          lg:text-5xl
          font-semibold
        "
      >
        <div>2424</div>
        <div>****</div>
        <div>****</div>
        <div>2424</div>
      </div>
      <div
        class="w-full flex justify-between pt-16 text-gray-200 font-semibold"
      >
        <div class="flex flex-col">
          <div class="pb-2">Expire date</div>
          <div>03/23</div>
        </div>
        <div class="flex items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012
                2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2
                2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            class="
              w-4/12
              rounded-full
              py-2
              px-6
              text-center text-white
              font-bold
              bg-gray-400
              focus:outline-none
            "
            placeholder="CVV"
            type="number"
            maxlength="3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isSaved: false,
  }),
};
</script>

<style scoped>
.bgCredit {
  background-image: url("https://i.ibb.co/JRJVKhR/Sin-t-tulo.png");
  background-repeat: no-repeat;
  background-size: cover;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: gray;
  opacity: 1; /* Firefox */
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
