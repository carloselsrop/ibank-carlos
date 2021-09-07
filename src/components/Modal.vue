<template>
  <div
    :class="
      createModal.isOpen
        ? 'transform translate-x-0 transition duration-500'
        : 'transform -translate-x-full transition duration-500'
    "
    class="
      w-full
      h-screen
      fixed
      flex
      justify-center
      items-center
      bg-opacity-70 bg-black
      z-50
    "
  >
    <div
      class="
        sm:flex sm:flex-col
        sm:items-center
        sm:w-10/12
        md:w-8/12
        lg:items-start
        lg:w-10/12
        2xl:w-8/12
        sm:h-3/4
        lg:h-2/4
        text-white
        bg-gray-700
        rounded-lg
        px-10
        py-8
        select-none
      "
    >
      <div class="flex justify-between w-full items-center pb-4">
        <div class="font-body font-bold text-xl">Add a New Card</div>
        <button @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="w-full h-full lg:flex">
        <div
          class="
            hidden
            w-full
            lg:w-8/12
            lg:h-full
            sm:h-2/4
            sm:flex
            justify-center
            items-center
          "
        >
          <div
            class="
              w-11/12
              sm:h-5/6
              lg:w-10/12
              xl:w-9/12
              sm:pt-4
              sm:px-8
              lg:px-16
              bg-indigo-700
              shadow-2xl
              rounded-xl
            "
          >
            <div class="flex justify-between sm:pb-8 lg:pb-16 sm:pt-4 h-1/3">
              <img class="w-12 h-12 pr-2" :src="urlImage" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5
                    9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2
                    2 0 002-2V7a2 2 0 00-2-2H7a2
                    2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <div
              class="
                sm:pb-8
                lg:pb-14
                w-full
                h-1/3
                flex
                justify-center
                items-center
                px-2
                sm:text-2xl
                lg:text-3xl
                font-bold
                text-white
              "
            >
              <div>
                {{ cardNumber.replace(/(\d{4})/g, "$1 ") }}
              </div>
            </div>
            <div
              class="
                w-full
                flex
                h-1/3
                justify-between
                sm:text-lg
                lg:text-2xl
                font-semibold
                text-white
              "
            >
              <div class="flex flex-col">
                <div class="text-xs">Cardholder Name</div>
                <div class="text-xl">{{ name }}</div>
              </div>
              <div class="flex flex-col items-center">
                <div class="text-xs">Valid Thru</div>
                <div class="text-xl">{{ monthExp }}/{{ yearExp }}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            w-full
            lg:w-4/12
            lg:h-full
            sm:h-2/4
            flex flex-col
            lg:justify-center
            space-y-4
            px-6
          "
        >
          <!-- Credit Number -->
          <div class="w-full flex flex-col items-center">
            <div class="font-title text-sm text-left w-full text-gray-200">
              Credit Card:
            </div>
            <div ref="card_number" class="my-number w-full" id="card-number" />
          </div>
          <!-- Cardholder Name-->
          <div class="w-full">
            <div class="font-title text-sm text-left w-full text-gray-200">
              Cardholder name:
            </div>
            <input
              v-model="name"
              class="
                my-name
                w-full
                text-center text-md
                font-title
                text-black
                py-1
                focus:outline-none
              "
              placeholder="Your name"
              type="text"
            />
          </div>
          <!-- Expiry and CVV -->
          <div class="w-full flex justify-between items-center">
            <div class="w-6/12 flex flex-col">
              <div class="font-title text-sm text-gray-200">Expire Date:</div>
              <div class="my-expiry" id="card-expiry" />
            </div>
            <div class="w-6/12 flex flex-col">
              <div class="font-title text-sm text-gray-200">CVV</div>
              <div class="my-cvv" id="card-cvc" />
            </div>
          </div>
          <!-- Accept and cancel buttons -->
          <div class="w-full flex justify-between pt-2">
            <button
              class="
                w-6/12
                bg-red-500
                mr-2
                py-2
                rounded
                font-title font-semibold
              "
              @click="closeModal"
            >
              Cancel
            </button>
            <button
              class="
                w-6/12
                ml-2
                bg-green-500
                py-2
                rounded
                font-title font-semibold
              "
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
import { mapState, mapActions } from 'vuex';
import ValidateCard from '../directives/validate-card';

export default {
  data: () => ({
    cardNumber: '',
    name: '',
    monthExp: '',
    yearExp: '',
    cvv: '',
    brand: 'credit.png',
  }),

  async mounted() {
    const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
    const elements = stripe.elements();

    const cardNumberElement = elements.create('cardNumber',
      {
        placeholder: '**** **** **** ****',
        iconStyle: 'solid',
        showIcon: true,
        style: {
          base: {
            color: '#000',
            fontSize: '16px',
            textAlign: 'center',
            '::placeholder': {
              fontWeight: 'bold',
              color: '#8F9292',
            },
          },
          complete: {
            color: '#29A53E',
          },
        },
      });
    cardNumberElement.mount('#card-number');

    const cardCvcElement = elements.create('cardCvc', {
      style: {
        base: {
          color: '#000',
          fontSize: '16px',
          '::placeholder': {
            fontWeight: 'bold',
            color: '#8F9292',
          },
        },
        complete: {
          color: '#29A53E',
        },
      },
    });
    cardCvcElement.mount('#card-cvc');

    const cardExpiryElement = elements.create('cardExpiry', {
      style: {
        base: {
          color: '#000',
          fontSize: '16px',
          '::placeholder': {
            fontWeight: 'bold',
            color: '#8F9292',
          },
        },
        complete: {
          color: '#29A53E',
        },
      },
    });
    cardExpiryElement.mount('#card-expiry');
  },

  computed: {
    ...mapState(['createModal']),
    dateExp() {
      return `${this.monthExp}/${this.yearExp}`;
    },
    urlImage() {
      return (`/static/${this.brand}`);
    },
  },

  methods: {
    ...mapActions(['closeModal']),
  },

  watch: {
    cardNumber(value) {
      this.brand = ValidateCard(value);
    },
  },

};
</script>

<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: "#8F9292";
  font-weight: bold;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.my-number {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid rgb(39, 38, 38);
}
.my-expiry {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid rgb(39, 38, 38);
  margin-right: 6px;
}
.my-cvv {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid rgb(39, 38, 38);
  margin-left: 6px;
}
.my-name {
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid rgb(39, 38, 38);
}
</style>
