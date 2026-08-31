export type LoginCredentials = {
  email: string
  password: string
}

export type LoginResult =
  | { ok: true }
  | { ok: false; reason: 'invalid-credentials' | 'unknown' }

/**
 * Calls kindo-api to authenticate a user. Registration is intentionally not
 * supported here: accounts are provisioned by a daycare/preschool administrator.
 */
export async function login({
  email,
  password,
}: LoginCredentials): Promise<LoginResult> {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (response.status === 401) {
      return { ok: false, reason: 'invalid-credentials' }
    }

    if (!response.ok) {
      return { ok: false, reason: 'unknown' }
    }

    return { ok: true }
  } catch {
    return { ok: false, reason: 'unknown' }
  }
}
