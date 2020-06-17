<script>
    import axios from 'axios';

    let secret = [...Array(64)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
    let images = require.context('../assets/onboarding/', false, /\.png$/);

    let handlePreauth = (callback) => {
        axios.post(`${process.env.VUE_APP_AUTH_SERVER_URI}/preauth/create`, {device_name: 'Browser', device_secret: secret}).then(response => {
            if(response.data.error){
                this.loginError = response.data.error.message;
            }
            else{
                callback(response.data);
            }

        }).catch(error => {
            console.error(error);
        });
    }

    export default {
        name: 'LoginRegistrationModal',
        props: {
            forRegistration: Boolean
        },
        data: () => {
            return {
                username: '',
                password: '',
                onboardingError: '',
                authServerURI: process.env.VUE_APP_AUTH_SERVER_URI,
                socialNetworkLogins: [
                    {name: 'twitter', enabled: true},
                    {name: 'google', enabled: true},
                    {name: 'imgur', enabled: true},
                    {name: 'reddit', enabled: true},
                ]
            }
        },
        methods: {
            getIcon(socialNetwork) {
                return images(`./${socialNetwork}.png`);
            },
            onboard(){
                let endPoint = this.forRegistration ? 'register' : 'login';
                return {
                    withUsernameAndPassword: () => {
                        let data = {username: this.username, password: this.password, device_name: 'Browser', device_secret: secret};

                        if(this.forRegistration) data.email = this.email;

                        axios.post(`${this.authServerURI}/${endPoint}`, data).then(response => {
                            if(response.data.error) this.onboardingError = response.data.error.message;
                           console.log(response.data);
                        }).catch(error => {
                            console.error(error);
                        });
                    },
                    with: (network) => {
                        handlePreauth((data) => {
                            window.location = `${this.authServerURI}/${network}/${endPoint}?app=1&preauth=${data.response}`;
                        });
                    }
                }
            }
        },
    }
</script>

<style>
    .login_box li img {
        width: 3.25em;
        height: auto;
    }

    .login_box li {
        display: inline-block;
        margin-left: 0.5em;
        border-radius: 50%;
        overflow:hidden;
    }

    .login_box .input-group-addon{
        background-color: #fff;
        border: 1px solid #fff;
        padding: .5rem .25rem .25rem .5rem;
        color: #000;
        border-radius: 0.25rem 0 0 0.25rem;
    }

    .login_box .form-control{
        border: 1px solid #fff;
        border-left: none;
    }

    .login_box,.login_box h2,.login_box h3,.login_box h4, .login_box h5{
        color:#fff;
        text-align:center;
    }

    #login_modal .modal-dialog,
    #register_modal .modal-dialog{
        min-height: calc(100vh - 60px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: auto;
    }

    #login_modal .modal-content, #login_modal .modal-header,
    #register_modal .modal-content, #register_modal .modal-header{
        border:1px solid #121211;
        background-color:#0A0A09;
    }

    #login_modal .modal-header h5, #login_modal .modal-header .close
    #register_modal .modal-header h5, #register_modal .modal-header .close{
        color:#fff;
    }


</style>
<template>
    <b-modal :id="(!forRegistration?'login_modal':'register_modal')" aria-labelledby="login_model_label" hide-footer hide-header class="onboarding-modal">
        <template>
            <b-container fluid>
                <b-row>
                    <b-col cols="10" class="login_box mx-auto">

                        <h2 v-if="forRegistration">Join SoSa</h2>
                        <h2 v-else>Login</h2>

                        <h5 class="mt-1">With username and password</h5>

                        <b-form-group class="mt-2">

                            <b-input-group class="mb-1">
                                <div class="input-group-addon">
                                    <i class="fal fa-user"></i>
                                </div>
                                <b-form-input type="text" placeholder="Username" name="username" value="" v-model="username"/>
                            </b-input-group>

                            <b-input-group v-if="forRegistration" class="mb-1">
                                <div class="input-group-addon">
                                    <i class="fal fa-envelope"></i>
                                </div>
                                <b-form-input type="email" placeholder="What's your e-mail address?" name="email" value="" v-model="email"/>
                            </b-input-group>

                            <b-input-group class="mb-1">
                                <div class="input-group-addon">
                                    <i class="fal fa-key"></i>
                                </div>
                                <b-form-input class="form-control" type="password" placeholder="Password" name="password" v-model="password"/>
                            </b-input-group>

                            <b-alert variant="danger" :show="onboardingError.length > 0" class="mb-1 py-1">{{ onboardingError }}</b-alert>

                            <b-row class="text-center mt-2 mx-auto">
                                <b-col cols="4" class="p-0" v-if="!forRegistration">
                                    <a href="/forgot">Forgot password</a>
                                </b-col>
                                <b-col :cols="(!forRegistration?8:12)" :class="'p-0' + (!forRegistration? ' pl-1' : '')">
                                    <b-button type="submit" variant="success" class="w-100" v-on:click="onboard().withUsernameAndPassword()">Let me in!</b-button>
                                </b-col>
                            </b-row>
                        </b-form-group>

                        <div class="or">or</div>

                        <h5 class="mt-3">With social media</h5>
                        <ul id="login_icons" class="mt-2 p-0">
                            <li v-for="(socialNetwork, index) in socialNetworkLogins" :key="socialNetwork.name" v-on:click="onboard().with(socialNetwork.name)" :class="index === 0?'ml-0':''" >
                                <img :src="getIcon(socialNetwork.name)" :alt="(forRegistration ? 'Sign-up' : 'Login') + ' with ' + socialNetwork.name" width="64" height="64"/>
                            </li>
                        </ul>
                        <hr class="bg-light-grey mt-4 mb-1"/>
                        <small>By accessing our service you agree to our <a href="/terms" target="_blank">Terms and Conditions</a> and <a href="/privacy" target="_blank">Privacy Policy.</a></small>
                    </b-col>
                </b-row>
            </b-container>
        </template>
    </b-modal>

</template>
