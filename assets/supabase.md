# Supabase Integration (frontend_web_app)

This React app supports Supabase, but it is optional so the UI can run with mock data while backend APIs are not available.

## Environment variables

The app reads these variables from the container `.env`:

- `REACT_APP_SUPABASE_URL`
- `REACT_APP_SUPABASE_KEY`

If either value is missing/empty, the app will still run, but `supabase` will be `null` and the UI will use mock data.

## Initialization

Supabase is initialized in:

- `frontend_web_app/src/services/supabaseClient.js`

Usage pattern:

```js
import { supabase } from "../services/supabaseClient";

if (!supabase) {
  // handle mock mode / show message
} else {
  // call supabase.auth / supabase.from(...)
}
```

## Notes

- Do not hardcode credentials in the repository.
- The orchestrator/user should set values in `.env` for real environments.
