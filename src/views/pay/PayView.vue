<template>
    <b-card>
        <div>
            <b-form @submit="confirmPay(getPayContent)" v-if="show">
                <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.name" placeholder="Enter name" required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Shipping address:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.address" type="address"
                        placeholder="Enter shipping address" required>
                    </b-form-input>
                </b-form-group>
                <b-form-group id="input-group-3" label="Your phone number:" label-for="input-3">
                    <b-form-input id="input-3" v-model="form.phone" type="phone" placeholder="Enter phone number"
                        required>
                    </b-form-input>
                </b-form-group>
                <b-button type="back" variant="outline-primary" @click="backcart()">back</b-button>&emsp;
                <b-button variant="primary" type="submit">confirm pay</b-button>
            </b-form>
        </div>
    </b-card>
</template>

<script lang="ts">
import CartCommodity from "@/model/cart/cart-commodity";
import PayContent from "@/model/pay/pay-content";
import { ref, computed, reactive, nextTick, defineComponent } from "vue";
import { mapActions, mapGetters, useStore } from "vuex";

export default defineComponent({
    setup() {
        const show = ref(true);
        const form = reactive({
            name: "",
            address: "",
            phone: "",
        });
        const onSubmit = (event: any) => {
            event.preventDefault();
            alert(JSON.stringify(form));
        };

        const onReset = (event: any) => {
            event.preventDefault();
            form.name = "";
            form.address = "";
            form.phone = "";
            show.value = false;
            nextTick(() => {
                show.value = true;
            });
        };
        const store = useStore();

        return { show, form, store, onSubmit, onReset };
    },
    methods: {
        ...mapActions(["confirmPay"]),
        backcart() {
            //TODO this.$router.push({ name: 'cart' })
            this.$router.go(-1);
        },
    },
    computed: {
        ...mapGetters(["getterCart"]),
        getPayContent() {
            let result: PayContent = {
                value: [],
                address: this.form.address,
                name: this.form.name,
                phone: this.form.phone
            };
            this.getterCart.forEach((element: CartCommodity) => {
                result.value.push({
                    id: element.id,
                    amount: element.amount,
                });
            });
            return result;
        },
    },
});
</script>
