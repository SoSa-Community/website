<script>
    export default {
        name: 'TopNav',
        props: {},
        data: () => {
            return {
                navItems: [
                    {url: 'https://blog.sosa.net', icon:'fal fa-newspaper'},
                    {url: 'https://facebook.com/SoSaCommunity', icon:'fab fa-facebook-f'},
                    {url: 'https://twitter.com/ChatPlayShare', icon:'fab fa-twitter'},
                    {url: 'https://youtube.com/c/ChatPlayShare', icon:'fab fa-youtube'},
                    {url: 'https://steamcommunity.com/groups/chatplayshare', icon:'fab fa-steam'},
                    {url: 'https://www.linkedin.com/company/sosa-community/', icon:'fab fa-linkedin'},
                ]
            }
        }
    }
</script>

<style>
    #login_button, #registration_button { border-radius: 1.2rem; }
    .navbar-brand h1{
        font-family: "koch_geometricmedium", "Myriad Pro", Arial;
    }

    #navbar_right .nav-item {
        margin-right: 0.5em;
    }

    #navbar_right .nav-item .nav-link i{
        font-size:1.75em;
        color: #ccc;
    }

</style>
<template>
    <b-navbar toggleable="md" type="dark">
        <b-navbar-brand class="text-center text-md-left">
            <h1>SoSa</h1>
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto" id="navbar_right">
                <b-nav-item :href="item.url" v-for="item in navItems" :key="item.url">
                    <i :class="item.icon"></i>
                </b-nav-item>
            </b-navbar-nav>

            <b-button v-b-modal.login_modal variant="success" id="login_button" class="mr-2 py-2 px-3">Login</b-button>
            <b-button v-b-modal.register_modal variant="outline-warning" id="registration_button" class="py-2 px-3 text-white">New to SoSa?</b-button>

        </b-collapse>
    </b-navbar>
</template>
