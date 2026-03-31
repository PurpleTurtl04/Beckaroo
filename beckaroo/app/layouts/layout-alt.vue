<template>
    <div>
        <div class="flex min-h-screen flex-col">
            <div class="relative">
                <NavbarAlt />
                <main class="3xl:container mx-auto grow">
                    <slot />
                </main>
            </div>
            <Footer />
        </div>
    </div>
</template>
