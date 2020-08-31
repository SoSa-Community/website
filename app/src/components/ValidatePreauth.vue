<script>
    import axios from 'axios';
    import CryptoJS from 'crypto-js'

    export default {
        name: 'ValidatePreauth',
        props: {},
        mounted() {
            const generateJWT = (data, secret) => {
                function base64url(source) {
                    // Encode in classical base64
                    let encodedSource = CryptoJS.enc.Base64.stringify(source);
                    encodedSource = encodedSource.replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
                    return encodedSource;
                }

                const encodedHeader = base64url(CryptoJS.enc.Utf8.parse(JSON.stringify({"alg": "HS256","typ": "JWT"})));
                const encodedData = base64url(CryptoJS.enc.Utf8.parse(JSON.stringify(data)));
                return `${encodedHeader}.${encodedData}.${base64url(CryptoJS.HmacSHA256(`${encodedHeader}.${encodedData}`, secret))}`;
            };

            const {type, status, data} = this.$route.params;

            if(status && data){
                if(status === 'failure'){
                    this.$router.push({path: 'home', params:{socialLoginError: 'OAuth Failed'}});
                }else{
                    const {device_id: deviceId} = JSON.parse(atob(data));
                    const routeError = (error) => this.$router.push({name: `${type}`, params:{preauthError: error}});

                    if(deviceId){
                        let postData = { device_id: deviceId, token: generateJWT({device_id: deviceId}, 'sausage')};

                        axios.post(`${process.env.VUE_APP_AUTH_SERVER_URI}/device/login`, postData).then(loginResponse => {
                            const {data: {status, response, error}} = loginResponse;

                            if(status === 'success'){
                                this.$router.push({path: '/dashboard'});
                            }else{
                                routeError(error.message);
                            }
                        }).catch(error => {
                            routeError(error.message);
                        });
                    }else{
                        routeError('Unknown Error');
                    }
                }
            }

        }
    }
</script>

<style>
</style>
<template>
    <b-container>
        <b-row>
            <b-col cols="10" class="login_box mx-auto">
                <div style="width:4rem; margin:25% auto 0 auto;">
                    <b-spinner style="width: 6rem; height: 6rem;"></b-spinner>
                </div>
           </b-col>
        </b-row>
    </b-container>
</template>
