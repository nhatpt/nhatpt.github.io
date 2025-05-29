<template>
  <div class="container">
    <div class="form-group">
      <label for="site-key">Site Key:</label>
      <input 
        type="text" 
        id="site-key" 
        v-model="siteKey" 
        placeholder="Nhập site key của bạn"
        @input="updateRecaptchaScript"
      >
    </div>
    <button @click="executeRecaptcha" :disabled="!siteKey">Tạo Token</button>
    
    <div v-if="token" class="token-display">
      <h3>Token:</h3>
      <pre>{{ token }}</pre>
      <input 
        type="hidden" 
        name="recaptcha_token" 
        :value="token"
      >
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

    const updateRecaptchaScript = () => {
      // Xóa script cũ nếu có
      const oldScript = document.querySelector('script[src*="recaptcha/enterprise.js"]')
      if (oldScript) {
        oldScript.remove()
      }

      // Tạo script mới với site key
      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${siteKey.value}`
      script.async = true
      script.defer = true
      
      // Thêm style khi script load xong
      script.onload = () => {
        const style = document.createElement('style')
        style.textContent = '.grecaptcha-badge { visibility: hidden !important; }'
        document.head.appendChild(style)
      }
      
      document.head.appendChild(script)
    }

    const executeRecaptcha = async () => {
      try {
        if (!window.grecaptcha || !window.grecaptcha.enterprise) {
          throw new Error('reCAPTCHA chưa được load')
        }

        const newToken = await window.grecaptcha.enterprise.execute(siteKey.value, {
          action: 'generate_token'
        })
        token.value = newToken
        
        // Gọi API đánh giá
        await assessToken(newToken)
      } catch (error) {
        console.error('Lỗi khi tạo token:', error)
        alert('Có lỗi xảy ra khi tạo token: ' + error.message)
      }
    }

    const assessToken = async (token) => {
      try {
        // Gọi API đánh giá thông qua backend
        const response = await fetch('https://recaptchaenterprise.googleapis.com/v1/projects/recaptcha-projec-1744100747001/assessments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': '****'
          },
          body: JSON.stringify({
            event: {
              token: token,
              siteKey: siteKey.value,
              expectedAction: 'generate_token'
            }
          })
        })

        const result = await response.json()
        console.log('Kết quả đánh giá:', result)
        
        // Kiểm tra kết quả đánh giá
        if (result.riskAnalysis) {
          const score = result.riskAnalysis.score
          const reasons = result.riskAnalysis.reasons || []
          
          // Hiển thị kết quả
          alert(`Điểm đánh giá: ${score}\nLý do: ${reasons.join(', ') || 'Không có'}`)
          
          // Kiểm tra và chặn request nếu điểm thấp
          if (score < 0.5) {
            throw new Error(`Request bị chặn: Điểm đánh giá quá thấp (${score})`)
          }
          
          // Kiểm tra các lý do đáng ngờ
          const suspiciousReasons = [
            'AUTOMATION',
            'LOW_QUALITY',
            'SUSPICIOUS',
            'ABUSIVE'
          ]
          
          const hasSuspiciousReason = reasons.some(reason => 
            suspiciousReasons.includes(reason)
          )
          
          if (hasSuspiciousReason) {
            throw new Error(`Request bị chặn: Phát hiện hành vi đáng ngờ (${reasons.join(', ')})`)
          }
          
          // Nếu pass qua các kiểm tra, cho phép request tiếp tục
          console.log('Request được chấp nhận')
        } else {
          throw new Error('Không thể đánh giá request')
        }
      } catch (error) {
        console.error('Lỗi khi đánh giá token:', error)
        alert('Có lỗi xảy ra khi đánh giá token: ' + error.message)
        // Reset token nếu request bị chặn
        token.value = ''
      }
    }

    onMounted(() => {
      // Không cần load script mặc định nữa vì sẽ load khi có site key
    })

    return {
      siteKey,
      token,
      executeRecaptcha,
      updateRecaptchaScript
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
  max-width: 600px;
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
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  width: 100%;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
  max-width: 100%;
}
</style>