<template>
  <div class="container">
    <section class="get-in-touch">
      <h1 class="title m-1">Tool cho bạn Hieunnm sài chơi <i class="fa fa-regular fa-face-smile"></i> </h1>
      <form class="contact-form row" @submit.prevent="calculate()">
        <div class="form-field col-lg-12">
          <input v-model="productItem.amount" id="amount" class="input-text js-input" type="number" required
            placeholder="Giá tiền bịch bánh Hiếu muốn mua">
        </div>
        <div class="form-field col-lg-12 ">
          <input v-model="productItem.minAmount" id="minAmount" class="input-text js-input" type="number" required
            placeholder="Số tiền nhỏ nhất Hiếu cần trả để quán không bị ăn quỵt">
        </div>
        <div class="form-field col-lg-12">
          <input v-model="productItem.multiply" id="multiply" class="input-text js-input" type="number" required
            placeholder="Bội số để kiếm lời từ Hiếu">
        </div>
        <div class="form-field col-lg-6 ">
          <input v-model="productItem.point" id="point" class="input-text js-input" type="number" required
            placeholder="Số tiền thừa mà quán thiếu Hiếu">
        </div>
        <div class="form-field col-lg-12 ">
          <input v-model="productItem.lps" id="lps" class="input-text js-input" type="number" required
            placeholder="Số tiền hoa hồng Hiếu gạ Tuấn mua hàng">
        </div>
        <div class="form-field col-lg-12">
          <input v-model="productItem.discount" id="discount" class="input-text js-input" type="text" required
            placeholder="Là thành viên trung thành, quán giảm giá cho Hiếu (%)">
        </div>
        <div class="form-field col-lg-12">
          <input :disabled="isDisabled" class="submit-btn" type="submit" value="Submit" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
          <form action="login">
            <button @click="recaptcha">Execute recaptcha</button>
          </form>
        </div>
      </form>
    </section>
    <section>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Số tiền hoa hồng mà Hiếu có thể sài:</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="card shadow-lg">
                <div class="row">
                  <div class="col-12">
                    <span>{{ this.productItem.useLpsAmount }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useReCaptcha } from 'vue-recaptcha-v3'

export default {
  name: 'App',
  components: {},
  setup() {
    const reCaptcha = useReCaptcha();
    const login = async () => {
      await reCaptcha.recaptchaLoaded();
      const token = await reCaptcha.executeRecaptcha('login');
      console.log('token', token);
    }
    console.log(login)
  },
  computed: {
    isDisabled() {
      return this.productItem.amount === null
        || this.productItem.minAmount === null
        || this.productItem.multiply === null
        || this.productItem.point === null
        || this.productItem.lps === null
        || this.productItem.discount === null
        ;
    }
  },
  data: function () {
    return {
      productItem: {
        amount: null,
        minAmount: null,
        multiply: null,
        point: null,
        lps: null,
        discount: null,
        useLpsAmount: null
      }
    }
  },
  methods: {
    calculate: function () {
      let amount = this.productItem.amount;
      let minAmount = this.productItem.minAmount;
      let point = this.productItem.point;
      let lps = this.productItem.lps;
      let discount = this.productItem.discount === "" ? "0" : this.productItem.discount;
      let multiply = this.productItem.multiply;
      // Step 1:
      let needToPayAmount = amount - point;
      let odd = needToPayAmount % multiply;
      let maxApplicableLps = needToPayAmount - minAmount;
      if (maxApplicableLps > lps) {
        maxApplicableLps = lps;
      }
      let tries = Math.floor(maxApplicableLps / multiply);
      while (tries >= 0) {
        let option = odd + multiply * tries;
        if (option > maxApplicableLps) {
          tries--;
          continue;
        }
        let newAmount = needToPayAmount - option;
        if (newAmount < minAmount) {
          tries--;
          continue;
        }
        let discountAmount = newAmount * ((100 - discount) / 100);
        if (discountAmount >= minAmount) {
          this.productItem.useLpsAmount = option;
          return;
        }
        tries--;
      }
      this.productItem.useLpsAmount = 0;
      return;
    }
  }
}
</script>

<style>
@import "./main.css";

.get-in-touch {
  max-width: 800px;
  margin: 50px auto;
  position: relative;

}

.get-in-touch .title {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 3.2em;
  line-height: 48px;
  padding-bottom: 48px;
  color: #5543ca;
  background: #5543ca;
  background: -moz-linear-gradient(left, #f4524d 0%, #5543ca 100%) !important;
  background: -webkit-linear-gradient(left, #f4524d 0%, #5543ca 100%) !important;
  background: linear-gradient(to right, #f4524d 0%, #5543ca 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.contact-form .form-field {
  position: relative;
  margin: 32px 0;
}

.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #5543ca;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}

.contact-form .input-text:focus {
  outline: none;
}

.contact-form .input-text:focus+.label,
.contact-form .input-text.not-empty+.label {
  -webkit-transform: translateY(-24px);
  transform: translateY(-24px);
}

.contact-form .label {
  position: absolute;
  left: 20px;
  bottom: 11px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #5543ca;
  cursor: text;
  transition: -webkit-transform .2s ease-in-out;
  transition: transform .2s ease-in-out;
  transition: transform .2s ease-in-out,
    -webkit-transform .2s ease-in-out;
}

.contact-form .submit-btn {
  display: inline-block;
  background-color: #000;
  background-image: linear-gradient(125deg, #a72879, #064497);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  width: 200px;
  cursor: pointer;
}

.submit-btn:disabled {
  color: #666;
}
</style>
