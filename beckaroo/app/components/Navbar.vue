<template>
    <div class="bg-primary text-primary-content flex justify-center shadow-sm">
        <nav class="container">
            <div class="navbar md:px-4 lg:px-8">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div
                            tabindex="0"
                            role="button"
                            class="btn btn-ghost btn-square md:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block h-7 w-7 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </div>
                        <ul
                            tabindex="-1"
                            class="menu menu-sm dropdown-content bg-base-300 rounded-box text-base-content z-1 mt-3 w-32 p-2 shadow"
                        >
                            <li>
                                <NuxtLink to="/" @click="closeDropdown"
                                    >Daily Tails</NuxtLink
                                >
                            </li>
                            <li>
                                <NuxtLink to="/" @click="closeDropdown"
                                    >The Zoo</NuxtLink
                                >
                            </li>
                            <li>
                                <NuxtLink to="/" @click="closeDropdown"
                                    >The Keepers</NuxtLink
                                >
                            </li>
                            <li>
                                <div
                                    class="btn btn-xs btn-soft btn-primary pl-0"
                                    @click="modalStore.openModal()"
                                >
                                    Sign Up
                                </div>
                            </li>
                        </ul>
                    </div>
                    <NuxtLink
                        to="/"
                        class="font-dynapuff btn btn-link text-primary-content text-xl no-underline"
                        >beckaroo & the zoo</NuxtLink
                    >
                </div>
                <div class="navbar-end hidden md:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li>
                            <NuxtLink to="/">Daily Tails</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">The Zoo</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">The Keepers</NuxtLink>
                        </li>
                        <li>
                            <div
                                class="btn btn-sm btn-ghost bg-base-300/30 hover:bg-base-300 hover:text-primary"
                                @click="modalStore.openModal()"
                            >
                                Sign Up
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
    const closeDropdown = () => {
        // Blur the currently focused element (the link/button clicked inside the dropdown)
        document.activeElement?.blur();
    };
</script>
