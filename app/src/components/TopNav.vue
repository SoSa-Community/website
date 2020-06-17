<script>
    export default {
        name: 'TopNav',
        props: {}
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
                <b-nav-item href="https://blog.sosa.net">
                    <i class="fal fa-newspaper"></i>
                </b-nav-item>

                <b-nav-item href="https://facebook.com/SoSaCommunity">
                    <i class="fab fa-facebook-f"></i>
                </b-nav-item>

                <b-nav-item href="https://twitter.com/ChatPlayShare">
                    <i class="fab fa-twitter"></i>
                </b-nav-item>

                <b-nav-item href="https://youtube.com/c/ChatPlayShare">
                    <i class="fab fa-youtube"></i>
                </b-nav-item>

                <b-nav-item href="https://steamcommunity.com/groups/chatplayshare">
                    <i class="fab fa-steam"></i>
                </b-nav-item>

                <b-nav-item href="https://www.linkedin.com/company/sosa-community/">
                    <i class="fab fa-linkedin"></i>
                </b-nav-item>
            </b-navbar-nav>

            <b-button v-b-modal.login_modal variant="success" id="login_button" class="mr-2 py-2 px-3">Login</b-button>
            <b-button v-b-modal.register_modal variant="outline-warning" id="registration_button" class="py-2 px-3 text-white">New to SoSa?</b-button>

        </b-collapse>
    </b-navbar>
</template>
