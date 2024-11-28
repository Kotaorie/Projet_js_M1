<template>
    <section class="">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mx-auto w-[50vw] lg:max-w-2xl xl:max-w-4xl">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
             Formulaire de paiment
            </h1>
            <div class="space-y-4 md:space-y-6" >
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom</label>
                <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="name" required="">
              </div>
                <div>
                  <label for="cbNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numéro de carte bancaire</label>
                  <input type="tel" name="cbNumber" id="cbNumber" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="formattedCbNumber" maxlength="19"  @input="onInput" required="">
                  </div>
              <div class="flex justify-between">
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code de sécurité</label>
                    <input type="tel" name="password" id="password" placeholder="123" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="password" maxlength="3" required="">
                </div>
                <div>
                    <label for="expDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date d'expiration</label>
                    <input type="date" name="expDate" id="expDate" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="expDate" required="">
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Enregistrer ma carte</label>
                  </div>
                </div>
                <!-- <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> -->
              </div>
              <button class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" :onclick="payer">Payer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
<script>
export default {
    name: 'AppCheckout',
    data() {
      return {
        rawCbNumber: ''
      };
    },
    computed: {
      formattedCbNumber: {
        get() {
          return this.rawCbNumber.match(/.{1,4}/g)?.join(' ') || '';
        },
        set(value) {
          this.rawCbNumber = value.replace(/\s+/g, '');
        }
      }
    },
    methods: {
      payer(){
        alert('Paiement effectué');
      },
    }

}
</script>
  