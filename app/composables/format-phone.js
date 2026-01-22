/**
 * Format a phone number for display (UK-friendly).
 * - Keeps tel: links numeric
 * - Adds spaces for readability
 * - Handles +44, 0, and mobile/landline formats
 */
export function useFormatPhone(input = '') {
	if (!input) return ''

	// Trim + normalise
	const raw = input.toString().trim()

	// Extract digits and leading +
	const hasPlus = raw.startsWith('+')
	const digits = raw.replace(/\D/g, '')

	// Handle UK numbers
	if (digits.startsWith('44')) {
		const rest = digits.slice(2)

		// UK mobile: +44 7xxx xxx xxx
		if (rest.startsWith('7') && rest.length === 10) {
			return `+44 ${rest.slice(0,4)} ${rest.slice(4,7)} ${rest.slice(7)}`
		}

		// UK landline (best-effort): +44 xx xxxx xxxx
		if (rest.length >= 9) {
			return `+44 ${rest.slice(0,2)} ${rest.slice(2,6)} ${rest.slice(6,10)}`
		}
	}

	// UK local format: 07xxx xxx xxx
	if (digits.startsWith('07') && digits.length === 11) {
		return `${digits.slice(0,5)} ${digits.slice(5,8)} ${digits.slice(8)}`
	}

	// UK local landline: 0xx xxxx xxxx (best-effort)
	if (digits.startsWith('0') && digits.length >= 10) {
		return `${digits.slice(0,3)} ${digits.slice(3,7)} ${digits.slice(7,11)}`
	}

	// Fallback: group digits every 3–4 chars
	return digits.replace(/(\d{3,4})(?=\d)/g, '$1 ')
}
