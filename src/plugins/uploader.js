import axios from '../axios'

export default {
	install (Vue) {
		Vue.prototype.$uploader = {
			form: this.toForms,
			validCheck: this.check
		}

		Vue.prototype.$download = this.download
	},
	check: (refs, {
		hard = false,
		focus = true
	} = {}) => {
		for (const key in refs) {
			if (refs.hasOwnProperty(key)) {
				if (refs[key]['validation'] && (hard || refs[key]['validation'].invalid)) {
					if (typeof refs[key].rules === 'string' && refs[key].rules.indexOf('required') > -1) {
						if (focus) refs[key].$el.getElementsByTagName('input')[0].focus()
						return '정보가 충분하지 않습니다.'
					} else if (typeof refs[key].rules !== 'string' && !refs[key].rules.hasOwnProperty('required')) {
						if (focus) refs[key].$el.getElementsByTagName('input')[0].focus()
						return '정보가 충분하지 않습니다.'
					}
				}
			}
		}

		return true
	},
	toForms: (url, params, files = null) => {
		return new Promise((resolve, reject) => {
			const form = new FormData()
			if (files) {
				Object.keys(files).reduce((formData, key) => {
					form.append(encodeURI(key.replaceAll('.', ':')), files[key])
				}, form)
			} else if (params.files) {
				Object.keys(params.files).reduce((formData, key) => {
					form.append(key, files[key])
				}, form)
			}
			form.append('params', JSON.stringify(params))
			axios.post(url, form, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
				.then((res) => {
					resolve(res)
				})
				.catch((res) => {
					reject(res)
				})
		})
	},
	download: (url, name = 'download') => {
		return new Promise((resolve, reject) => {
			axios.get(url, {responseType: 'blob'})
				.then(res => {
					const urlArray = url.split('.')
					const extensions = urlArray[urlArray.length - 1]
					const blob = new Blob([res.data])
					const link = document.createElement('a')
					link.href = URL.createObjectURL(blob)
					link.download = `${name}.${extensions}`

					link.click()
					URL.revokeObjectURL(link.href)
					resolve()
				})
				.catch((err) => {
					reject(err)
				})
		})
	}
}
