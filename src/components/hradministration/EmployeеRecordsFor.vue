<template lang="html">
    <div class="container"> 
        <h5 class="demonstration">Records for Employee</h5>

        <!-- <div v-for="person in people">
            <div class="dates-wrapper">
                <label for="date">From</label>
                <div class="date" id="date">20-Apr-2018, 18:12:00, Friday</div>
                <label for="date">Until</label>
                <div class="date" id="date">20-Apr-2018, 18:23:00, Friday</div>   
            </div>
            <div class="user-wrapper">
                <label for="userPic">Approved By</label>
                <div id="userPic">
                    <img src="" alt="">
                    Employee Name 
                </div>
                <label for="comentary">Commentary</label>
                <div id="comentary">
                    <p>None</p>
                </div>
            </div>    
        </div> -->
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

    export default {
        computed: {
            ...mapState('recordsFor', [
                'people'
            ])
        }
    }
</script>

<style lang="sass" scoped>
.container
    position: fixed
    z-index: 1000
    top: 0
    width: 50%
    height: 50%
    overflow: auto
    margin-top: 15%
    margin-left: -20%
    border: 1px solid ligthgrey
    background-color: lightgray
    
</style>
