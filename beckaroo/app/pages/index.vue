<template>
    <div class="hero relative min-h-screen overflow-hidden">
        <!-- Nuxt Image as Background -->
        <NuxtImg
            src="/images/CooperHero.png"
            alt="Hero Background"
            class="absolute inset-0 z-0 h-full w-full object-cover object-[35%]"
            sizes="100vw sm:100vw md:100vw"
        />
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content">
            <div class="max-w-lg">
                <h1 class="font-dynapuff mb-5 text-4xl font-bold md:text-5xl">
                    Welcome to the Zoo!
                </h1>
                <p class="mb-5 text-sm">
                    Our home and life revolve around animals, both those that
                    live with us and those that briefly touch our lives. Feel
                    free to browse and take a peek at our exciting adventures.
                </p>
                <div class="join">
                    <div class="text-base-content">
                        <label class="input validator join-item">
                            <svg
                                class="h-[1em] opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke-width="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect
                                        width="20"
                                        height="16"
                                        x="2"
                                        y="4"
                                        rx="2"
                                    ></rect>
                                    <path
                                        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                                    ></path>
                                </g>
                            </svg>
                            <input
                                type="email"
                                placeholder="mail@site.com"
                                required
                            />
                        </label>
                        <div class="validator-hint hidden">
                            Enter valid email address
                        </div>
                    </div>
                    <button class="btn btn-secondary join-item">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'layout-alt', // Uses app/layouts/custom.vue
    });
</script>
