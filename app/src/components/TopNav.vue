<script>
    export default {
        name: 'TopNav',
        props: {}
    }
</script>

<style>
   #login_button {
       border-radius: 1.2rem;
       cursor: pointer;
       padding: .5rem 1rem;
       font-size: 1.1rem;
       line-height: 1;
       color: #fff;
    }
    .navbar-brand h1{
        font-family: "koch_geometricmedium", "Myriad Pro", Arial;
    }

    .navbar-nav{margin: .25em 0;}
    #navbar_left .nav-item {margin-left: 0.5em;}

    .nav-item .nav-link {padding: 0 1em;}

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
            <a class="btn btn-outline-warning" id="login_button">Login</a>
        </b-collapse>
    </b-navbar>
</template>
