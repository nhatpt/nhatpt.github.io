<template>
  <div class="container">
    <div class="form-group">
      <label for="site-key">Site Key:</label>
      <input 
        type="text" 
        id="site-key" 
        v-model="siteKey" 
        placeholder="Nhập site key của bạn"
      >
    </div>
    <button @click="executeRecaptcha" :disabled="!siteKey">Tạo Token</button>
    
    <div v-if="token" class="token-display">
      <h3>Token:</h3>
      <pre>{{ token }}</pre>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'App',
  setup() {
    const siteKey = ref('')
    const token = ref('')

    const executeRecaptcha = async () => {
      try {
        if (!window.grecaptcha || !window.grecaptcha.enterprise) {
          throw new Error('reCAPTCHA chưa được load')
        }

        const newToken = await window.grecaptcha.enterprise.execute(siteKey.value, {
          action: 'generate_token'
        })
        token.value = newToken
      } catch (error) {
        console.error('Lỗi khi tạo token:', error)
        alert('Có lỗi xảy ra khi tạo token: ' + error.message)
      }
    }

    onMounted(() => {
      // Thêm script reCAPTCHA Enterprise
      const script = document.createElement('script')
      script.src = 'https://www.google.com/recaptcha/enterprise.js'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    })

    return {
      siteKey,
      token,
      executeRecaptcha
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

.token-display {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
}
</style>