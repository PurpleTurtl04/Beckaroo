<template>
    <div>
        <div class="flex min-h-screen flex-col">
            <Navbar />
            <main class="container mx-auto grow py-6">
                <slot />
            </main>
            <Footer />
        </div>
    </div>
</template>
