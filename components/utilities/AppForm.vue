<template>
  <div class="bg-gray-800">
    <form action="https://formspree.io/f/mpzbyzjg" method="POST">
      <fieldset>
        <legend
          class="flex flex-col sm:mx-12 md:mx-64 text-white text-5xl py-20"
        >
          Basic Info
        </legend>

        <!-- Text Input -->
        <div class="flex flex-col sm:mx-12 md:mx-64 gap-y-2">
          <label for="name" class="text-white text-4xl py-3">Full Name</label>
          <input
            class="sm:w-full p-4 rounded-xl"
            type="text"
            name="name"
            id="name"
            maxlength="20"
            placeholder="Full Name"
            required
          />

          <label for="email" class="text-white text-4xl py-3">Email</label>
          <input
            class="sm:w-full p-4 rounded-xl"
            text="text"
            name="email"
            id="email"
            placeholder="person.doe@example.com"
            required
          />

          <label for="subject" class="text-white text-4xl py-3">Subject</label>
          <input
            class="sm:w-full p-4 rounded-xl"
            type="text"
            name="subject"
            id="subject"
            placeholder="No Subject"
          />
          <label class="text-white text-4xl py-3" for="feedback">Message</label>
          <textarea
            class="sm:w-full p-4 rounded-xl"
            rows="5"
            cols="50"
            name="text"
            placeholder="Tell us about what we can do for you"
          ></textarea>
        </div>
      </fieldset>
      <div class="flex sm:mx-12 md:mx-64 pt-10">
        <button
          type="submit"
          class="sm:py-6 sm:px-16 md:px-40 rounded-full text-gray-700 bg-white hover:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
