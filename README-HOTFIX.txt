
# Evolve - Language Provider Hotfix

This patch fixes the build error:
> useLanguage must be used within a LanguageProvider

## Files included
- app/layout.tsx (wraps the app with `Providers`)
- app/providers.tsx (client component that mounts ThemeProvider + LanguageProvider)
- components/language-provider.tsx (React context + hook)

## Where to place
- `components/language-provider.tsx` → create `components/` at repo root if missing
- `app/providers.tsx` → place next to `app/layout.tsx`
- `app/layout.tsx` → replace your current file with this one (make sure it still imports `./globals.css`)

## Optional
If you still see prerender errors on `/`, temporarily add the following to `app/page.tsx`:
```ts
export const dynamic = "force-dynamic";
```
But ideally move any `useLanguage()` usage into client components.

After copying, commit & push, then Redeploy on Vercel with "Ignore build cache".
